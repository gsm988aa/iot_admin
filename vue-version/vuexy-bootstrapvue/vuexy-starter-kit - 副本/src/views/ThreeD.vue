<template>
  <div
    ref="canvasContainer"
    style="scale: 0.78;position: absolute;margin-top: -110px;margin-left: -135px;width: auto;height: 100vh;"
  >
    <b-button
      variant="success"
      @click="BigData"
    >
      返回主页
    </b-button>

    <div
      id="container"
      class="div"
    >
      智能柜
    </div>
    <div
      id="container"
      class="model"
    >
      3D模型
    </div>

  </div>
</template>

<script>
import * as THREE from 'three'

import { STLLoader } from 'three/examples/jsm/loaders/STLLoader'
// import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls' // 旋转控制器
import {
  BButton,
} from 'bootstrap-vue'
import background from '@/assets/images/gif/1.gif' // 背景图片

export default {
  components: {
    BButton,
  },
  data() {
    return {
      scene: null,
      camera: null,
      renderer: null,
      mesh: null,
    }
  },
  beforeDestroy() {
    // 防止内存泄露
    if (!this.myChart) {
      return
    }
    this.myChart.dispose()
    this.myChart = null
  },
  mounted() {
    // 1、创建场景
    this.scene = new THREE.Scene()
    // this.scene.background = new THREE.Color(0x38628a) // 设置背景颜色，这里是白色

    const loader = new THREE.TextureLoader()
    const backgroundTexture = loader.load(background)

    // 在加载完成后，设置背景
    backgroundTexture.minFilter = THREE.LinearFilter
    this.scene.background = backgroundTexture

    // 2、创建相机
    this.camera = new THREE.PerspectiveCamera(
      30, window.innerWidth / window.innerHeight,
      0.1,
      750,
    )
    this.camera.position.z = 420 // 设置摄像机的 z 坐标
    this.camera.position.x = 200 // 设置摄像机的 x 坐标
    this.camera.position.y = 100 // 设置摄像机的 y 坐标

    // 3、创建渲染器
    this.renderer = new THREE.WebGLRenderer()
    this.renderer.setSize(window.innerWidth, window.innerHeight)
    this.$refs.canvasContainer.appendChild(this.renderer.domElement)
    this.renderer.antialias = true

    // 在窗口大小变化时重新调整渲染器大小
    window.addEventListener('resize', () => {
      const newWidth = window.innerWidth
      const newHeight = window.innerHeight
      this.camera.aspect = newWidth / newHeight
      this.camera.updateProjectionMatrix()
      this.renderer.setSize(window.innerWidth, window.innerHeight)
    })

    // 添加环境光
    const ambientLight = new THREE.AmbientLight(0xffffff, 1) // 设置环境光颜色
    this.scene.add(ambientLight)
    // 添加光源
    const light = new THREE.DirectionalLight(0xffffff, 4.2)
    light.position.set(2, 2, 2).normalize()
    this.scene.add(light)
    // 添加反面光源
    const light2 = new THREE.DirectionalLight(0xffffff, 2)
    light2.position.set(-2, -2, -2).normalize() // 使用反方向的光源
    this.scene.add(light2)

    if (this.renderer.domElement) {
      // 创建OrbitControls并配置
      const controls = new OrbitControls(this.camera, this.renderer.domElement)

      // 设置控制器的属性
      controls.enableDamping = true // 启用阻尼效果，使相机运动平滑
      controls.dampingFactor = 0.1 // 阻尼效果的强度
      controls.rotateSpeed = 0.5 // 旋转速度

      const tloader = new STLLoader()
      // 加载第一个STL文件，以及其他STL文件，重复上述过程
      tloader.load('model/tong.stl', geometry2 => {
        const material2 = new THREE.MeshPhongMaterial({
          color: 0xcecece,
          side: THREE.DoubleSide,
          shininess: 100,
          specular: 0x111111,
        })

        const mesh2 = new THREE.Mesh(geometry2, material2)
        mesh2.scale.set(0.2, 0.2, 0.2)
        mesh2.position.set(160, 20, 0) // 设置第二个STL文件的位置

        this.scene.add(mesh2)

        let rotationAngle = 0 // 在初始化中定义一个变量用于存储旋转角度
        const animate = () => {
          rotationAngle += 0.01 // 调整旋转速度
          mesh2.rotation.set(0, rotationAngle, 0)// 在动画循环函数中更新旋转角度并应用到物体
          requestAnimationFrame(animate)
          controls.update() // 更新控制器
          this.renderer.render(this.scene, this.camera)
        }

        animate() // 启动动画循环

        const boundingBox = new THREE.Box3().setFromObject(mesh2)
        const center = new THREE.Vector3()
        boundingBox.getCenter(center)
        controls.target.copy(center) // 将控件的目标设置为对象的中心
      })

      // 加载第二个STL文件
      // const loader = new FBXLoader()
      const sloader = new STLLoader()
      // 加载STL文件
      sloader.load('model/total.stl', geometry => {
        // MeshLambertMaterial材质 光滑
        const material = new THREE.MeshPhongMaterial({ // Phong material 有纹理的材质
          color: 0xcecece, // 设置颜色
          side: THREE.DoubleSide,
          shininess: 100, // 亮度
          specular: 0x111111, // 镜面颜色
        })

        const mesh = new THREE.Mesh(geometry, material)
        mesh.scale.set(0.06, 0.06, 0.06) // 缩放物体大小
        let rotationAngle = 0 // 在初始化中定义一个变量用于存储旋转角度
        const animate = () => {
          rotationAngle += 0.005 // 调整旋转速度
          mesh.rotation.set(0, rotationAngle, 0)// 在动画循环函数中更新旋转角度并应用到物体
          requestAnimationFrame(animate)
          controls.update() // 更新控制器
          this.renderer.render(this.scene, this.camera)
        }

        animate() // 启动动画循环

        const boundingBox = new THREE.Box3().setFromObject(mesh)
        const center = new THREE.Vector3()
        boundingBox.getCenter(center)
        controls.target.copy(center) // 将控件的目标设置为对象的中心

        this.scene.add(mesh)
      })

      window.addEventListener('resize', () => {
        controls.update()
      })

      // 添加渲染循环
    }
  },
  methods: {
    BigData() {
      // 使用 Vue Router 导航到 Home 界面
      this.$router.push('/')
    },
  },
}

</script>
<style lang="scss">
#canvas {
  text-align: center;
  height: 100vh;
  width: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

}

.div {
  font-size: 10vw;
  line-height: 100vh;
  filter: drop-shadow(0 0 5px #ecc700);
  animation: spin 5s linear infinite;
  z-index: 80;
  position: fixed;
  display: flex;
  margin-left: 720px;
  margin-top: -330px;
  color: #ffffff;
  font-family: 微软雅黑,serif;
}
.model {
  font-size: 10vw;
  line-height: 100vh;
  filter: drop-shadow(0 0 5px #ecc700);
  animation: spin 5s linear infinite;
  z-index: 80;
  position: fixed;
  margin-left: 700px;
  margin-top: -220px;
  color: #ffffff;
  font-family: 微软雅黑,serif;
}

@keyframes spin {
  100% {
    transform: rotateY(360deg);
  }
}
</style>
