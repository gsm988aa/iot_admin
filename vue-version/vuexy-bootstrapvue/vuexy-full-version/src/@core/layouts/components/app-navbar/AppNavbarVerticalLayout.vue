<template>
  <div class="navbar-container d-flex content align-items-center">

    <!-- Nav Menu Toggler -->
    <ul class="nav navbar-nav d-xl-none">
      <li class="nav-item">
        <b-link
          class="nav-link"
          @click="toggleVerticalMenuActive"
        >
          <feather-icon
            icon="MenuIcon"
            size="21"
          />
        </b-link>
      </li>
    </ul>

    <!-- Left Col -->
<!--     顶栏功能按键-->
    <div class="bookmark-wrapper align-items-center flex-grow-1 d-none d-lg-flex">
      <b-button variant="outline-primary"  href="/dashboard/deviceinfos">A相</b-button>&nbsp;
      <b-button variant="outline-primary" href="/dashboard/deviceinfos">B相</b-button>&nbsp;
      <b-button variant="outline-primary" href="/dashboard/deviceinfos" >C相</b-button>&nbsp;&nbsp;&nbsp;
<!--      按钮链接到emergencyopening页面-->
      <b-button  variant="danger" href="/apps/emergencyopening">紧急分闸</b-button>&nbsp;

<!--      <b-button  variant="danger">紧急分闸</b-button>&nbsp;-->
      <b-button variant="outline-primary">自检：开</b-button>&nbsp;&nbsp;&nbsp;
      <!-- Bookmarks Container -->
<!--      <bookmarks />-->

    </div>

    <b-navbar-nav class="nav align-items-center ml-auto">
      <locale />
      <dark-Toggler class="d-none d-lg-block" />
      <search-bar />
<!--      <cart-dropdown />-->
<!--      <notification-dropdown />-->
      <user-dropdown />
    </b-navbar-nav>
  </div>
</template>

<script>
import {
  BButton,
  BLink, BNavbarNav,
} from 'bootstrap-vue'
import Bookmarks from './components/Bookmarks.vue'
import Locale from './components/Locale.vue'
import SearchBar from './components/SearchBar.vue'
import DarkToggler from './components/DarkToggler.vue'
import CartDropdown from './components/CartDropdown.vue'
import NotificationDropdown from './components/NotificationDropdown.vue'
import UserDropdown from './components/UserDropdown.vue'
import axios from 'axios'

export default {
  components: {
    BLink,
    BButton,
    // Navbar Components
    BNavbarNav,
    Bookmarks,
    Locale,
    SearchBar,
    DarkToggler,
    CartDropdown,
    NotificationDropdown,
    UserDropdown,
  },
  data() {
    return {
      guzhang_data: '无故障',
    }
  },
  // 在加载这个.vue页面时，设置data中flag=1

  props: {
    toggleVerticalMenuActive: {
      type: Function,
      default: () => {},
    },
  },
}
</script>
