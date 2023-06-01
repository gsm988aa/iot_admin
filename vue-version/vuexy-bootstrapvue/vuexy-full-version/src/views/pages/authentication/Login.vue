<template>
  <div>
    <h1>Example</h1>
    <div v-if="!loggedIn">
      <form @submit.prevent="login">
        <div>
          <label for="username">Username:</label>
          <input type="text" id="username" v-model="username">
        </div>
        <div>
          <label for="password">Password:</label>
          <input type="password" id="password" v-model="password">
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
    <div v-else>
      <h2>Welcome, {{ username }}!</h2>
      <button @click="logout">Logout</button>
      <div v-if="users">
        <h3>Users</h3>
        <ul>
          <li v-for="user in users" :key="user.id">{{ user.username }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import {getHomeRouteForLoggedInUser} from "@/auth/utils";
import ToastificationContent from "@core/components/toastification/ToastificationContent.vue";


export default {
  data() {
    return {
      loggedIn: false,
      username: 'admin',
      password: '',
      rolegroup: 2,

      users: []
    }
  },
  methods: {
    async login() {
      try {

        const response = await axios.post('http://localhost:10866/login', {
          username: this.username,
          password: this.password,
        })
        const {token} = response.data
        this.rolegroup = response.data.rolegroup
        localStorage.setItem('token', token)
        this.loggedIn = true
        // this.username = ''
        // this.password = ''
        this.getUsers()
        if (this.rolegroup === 0){

        }
        if (this.rolegroup === 1){

        }


      } catch (error) {
        console.error(error)
      }
    },
    async logout() {
      localStorage.removeItem('token')
      this.loggedIn = false
      this.users = null
    },
    async getUsers() {
      try {
        const token = localStorage.getItem('token')
        const response = await axios.get('http://localhost:10866/users', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        })
        this.users = response.data

      } catch (error) {
        console.error(error)
      }
    }
  },

  created() {
    const token = localStorage.getItem('token')
    if (token) {
      this.loggedIn = true
      this.getUsers()
    }
  }
}
</script>