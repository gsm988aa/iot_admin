<template>
  <b-card class="Lbackground">
    <h1 class="title">
      龙首矿西二采区辅助系统监控平台
    </h1>

    <div style="display: flex;margin-top: 70px;">

      <!--右侧栏-->
      <div style="display: flex; flex-direction: column;margin-left: 10px">
        <!-- 模型-->
        <div style="width: 100%; height: 100%;">
          <canvas id="canvas" />
        </div>

        <!--标题 监控-->
        <div style="width: 100%;height: 100%;">

          <div style="display: flex; flex-direction: column;text-align:center;margin-top: 30px">
            <b-card-text style="font-size: 50px; color: #ffffff;font-weight: bold">
              矿用柜3D模型
            </b-card-text>
          </div>

          <div
            id="realtime-video-btn"
            style="width:500px;height:100px;scale: 0.75;display: flex"
            @click="goToRealTimeVideo"
          >
            <dv-border-box-10
              :border-style="'none'"
            >
              <b-card-text style="font-size: 40px; color: #ffffff;font-weight: bold;margin-top: 40px;text-align: center">
                点击查看更多实时监控
              </b-card-text>
            </dv-border-box-10>
          </div>

        </div>
      </div>

      <!-- 左侧栏-->
      <div style="display: flex; flex-direction: column;margin-left: 10px">
        <dv-border-box-10
          :border-style="'none'"
        >
          <div style="display: flex; flex-direction: column;margin-top: 120px;margin-left:80px;gap: 100px;">
            <b-card-text style="font-size: 50px; color: #ef7e7e;font-weight: bold">
              温度
            </b-card-text>
            <b-card-text style="font-size: 50px; color: #63ccee;font-weight: bold">
              湿度
            </b-card-text>
          </div>
          <div style="display: flex; flex-direction: column;margin-top: -168px;margin-left:360px;gap: 110px;">
            <dv-decoration-7 style="width:150px;height:30px;margin-left: -120px;scale: 2.2;color: #fff5ef;text-align: center">
              <b-card-text style="margin-top: 12px;padding-left: 10px; padding-right: 10px;font-size: 20px">
                {{ temperData }}°C
              </b-card-text>
            </dv-decoration-7>
            <dv-decoration-7 style="width:150px;height:30px;margin-left: -120px;scale: 2.2;color: #fff5ef">
              <b-card-text style="margin-top: 12px;padding-left: 10px; padding-right: 10px;font-size: 20px">
                {{ wetData }}°C
              </b-card-text>
            </dv-decoration-7>
          </div>
        </dv-border-box-10>

        <dv-border-box-10
          :border-style="'none'"
        >
          <div style="margin-bottom: 80px">
            <div style="display: flex; flex-direction: column;margin-top: 70px;margin-left:40px;gap: 50px;">
              <b-card-text style="font-size: 40px; color: #ffdc3e;font-weight: bold">
                A相电压
              </b-card-text>
              <b-card-text style="font-size: 40px; color: #3ede0c;font-weight: bold">
                B相电流
              </b-card-text>
              <b-card-text style="font-size: 40px; color: #12fcbc;font-weight: bold">
                C相电压
              </b-card-text>
              <b-card-text style="font-size: 40px; color: #ff9c51;font-weight: bold">
                有功功率
              </b-card-text>
              <b-card-text style="font-size: 40px; color: #ff6049;font-weight: bold;">
                无功功率
              </b-card-text>
              <b-card-text style="font-size: 40px; color: #cb94e7;font-weight: bold">
                功率因数
              </b-card-text>

              <div style="display: flex; flex-direction: column;margin-top: -510px;margin-left:230px;gap: 50px;">
                <b-card-text style="font-size: 40px; color: #ffdc3e;font-weight: bold">
                  {{ UaData }}
                </b-card-text>
                <b-card-text style="font-size: 40px; color: #3ede0c;font-weight: bold">
                  {{ IaData }}
                </b-card-text>
                <b-card-text style="font-size: 40px; color: #12fcbc;font-weight: bold">
                  {{ UaData }}
                </b-card-text>
                <b-card-text style="font-size: 40px; color: #ff9c51;font-weight: bold">
                  {{ PaData }}
                </b-card-text>
                <b-card-text style="font-size: 40px; color: #ff6049;font-weight: bold;">
                  {{ PaData }}
                </b-card-text>
                <b-card-text style="font-size: 40px; color: #cb94e7;font-weight: bold">
                  0.95
                </b-card-text>
              </div>

              <div style="display: flex; flex-direction: column;margin-top: -495px;margin-left:360px;gap: 50px;">
                <b-card-text style="font-size: 40px; color: #ffdc3e;font-weight: bold">
                  V
                </b-card-text>
                <b-card-text style="font-size: 40px; color: #3ede0c;font-weight: bold">
                  A
                </b-card-text>
                <b-card-text style="font-size: 40px; color: #12fcbc;font-weight: bold">
                  V
                </b-card-text>
                <b-card-text style="font-size: 40px; color: #ff9c51;font-weight: bold">
                  W
                </b-card-text>
                <b-card-text style="font-size: 40px; color: #ff6049;font-weight: bold;">
                  W
                </b-card-text>
                <b-card-text style="font-size: 40px; color: #cb94e7;font-weight: bold">
                  COS
                </b-card-text>
              </div>

            </div>
          </div>

        </dv-border-box-10>
        <!--        <div style="width: 550px; height: 480px; background-color: #0954c4;"></div>-->
      </div>

    </div>

    <div

      id="Scamera"
      style="width: 700px;height: 700px;margin-top: -900px;position: absolute;margin-left: 400px;display: none"
      class="gif1"
    >
      <b-card-text style="font-size: 40px;color: #fff5ef;margin-top: 20px">
        监控画面
      </b-card-text>
    </div>

  </b-card>
</template>

<script>
import {
  BCard, BCardText,
} from 'bootstrap-vue'
import * as THREE from 'three'
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader'
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import background from '@/assets/images/b.png' // 背景图片
// import { STLLoader } from 'three/examples/jsm/loaders/STLLoader'

import Vue from 'vue'
import DataView from '@jiaminghi/data-view'

Vue.use(DataView)

export default {
  components: {
    BCard, BCardText,
  },
  data() {
    return {
      temperData: '',
      wetData: '',
      UaData: '',
      IaData: '',
      PaData: '',
      scene: new THREE.Scene(),
      camera: new THREE.PerspectiveCamera(),
      shexiangtou: new THREE.Group(),
      renderer: null,
      mesh: null,
    }
  },
  mounted() {
    // 初始化 光线投射
    this.raycaster = new THREE.Raycaster()
    this.mouse = new THREE.Vector2()
    window.addEventListener('mousemove', this.onMouseMove)
    // 创建场景
    const scene = new THREE.Scene()
    this.scene = scene

    const loader = new THREE.TextureLoader()
    const backgroundTexture = loader.load(background)

    // 在加载完成后，设置背景
    backgroundTexture.minFilter = THREE.LinearFilter
    this.scene.background = backgroundTexture

    // 创建相机
    const camera = new THREE.PerspectiveCamera(55, window.innerWidth / window.innerHeight, 0.1, 1000)

    // 创建渲染器
    const renderer = new THREE.WebGLRenderer({ canvas: document.getElementById('canvas') })
    renderer.setSize(window.innerWidth, window.innerHeight)

    // 创建鼠标控制器
    const controls = new OrbitControls(camera, renderer.domElement)

    // 加载 STL 文件
    // const stlLoader = new STLLoader()
    // stlLoader.load('model/camera.stl', geometry30 => {
    //   const material30 = new THREE.MeshPhongMaterial({ color: 0xCCCCCC })
    //   const jiankong = new THREE.Mesh(geometry30, material30)
    //   jiankong.position.x = 0
    //   jiankong.position.y = 0
    //   jiankong.position.z = -200
    //   scene.add(jiankong)
    // })

    // 创建几何体
    const geometry = new THREE.BoxGeometry(1, 2.5, 1)
    const material = new THREE.MeshBasicMaterial({ color: 0xE8E8E8 }) // 柜身
    const cube = new THREE.Mesh(geometry, material)
    cube.position.y = 0.2

    const geometry2 = new THREE.BoxGeometry(1, 0.1, 1) // 设置cube2尺寸为2x2x2个单位
    const material2 = new THREE.MeshBasicMaterial({ color: 0xEE2C2C }) // 红色柜头
    const cube2 = new THREE.Mesh(geometry2, material2)
    cube2.position.y = 1.5 // 将cube2放在cube上方（向上偏移1个单位）
    // cube2.rotation.y = -20

    // 创建平面几何体
    const planeGeometry = new THREE.PlaneGeometry(1, 1)
    // 创建材质并加载贴图
    const texture = new THREE.TextureLoader().load('sss.jpg')
    const material9 = new THREE.MeshBasicMaterial({ map: texture })
    // 设置贴图的重复次数和起始位置
    material9.map.repeat.set(1, 1)
    material9.map.offset.set(0, 0)
    // 创建平面网格
    const planeMesh = new THREE.Mesh(planeGeometry, material9)
    planeMesh.position.x = -0.3 // 设置平面几何体的位置为左上角
    planeMesh.position.y = 0.03
    planeMesh.position.z = 0.53
    planeMesh.scale.set(0.2, 0.25, 0.3)

    // 操控
    const planeGeometry2 = new THREE.PlaneGeometry(1, 1)
    // 创建材质并加载贴图
    const texture2 = new THREE.TextureLoader().load('control.png')
    const material10 = new THREE.MeshBasicMaterial({ map: texture2, side: THREE.FrontSide })
    // 设置贴图的重复次数和起始位置
    material10.map.repeat.set(1, 1)
    material10.map.offset.set(0, 0)
    // 创建平面网格
    const planeMesh2 = new THREE.Mesh(planeGeometry2, material10)
    planeMesh2.position.x = 0.1 // 设置平面几何体的位置为左上角
    planeMesh2.position.y = 0.03
    planeMesh2.position.z = 0.53
    planeMesh2.scale.set(0.4, 0.3, 0.3)

    // 状态
    const planeGeometry3 = new THREE.PlaneGeometry(1, 1)
    // 创建材质并加载贴图
    const texture3 = new THREE.TextureLoader().load('zt.png')
    const material11 = new THREE.MeshBasicMaterial({ map: texture3, side: THREE.FrontSide })
    // 设置贴图的重复次数和起始位置
    material11.map.repeat.set(1, 1)
    material11.map.offset.set(0, 0)
    // 创建平面网格
    const planeMesh3 = new THREE.Mesh(planeGeometry3, material11)
    planeMesh3.position.x = -0.3 // 设置平面几何体的位置为左上角
    planeMesh3.position.y = -0.7
    planeMesh3.position.z = 0.53
    planeMesh3.scale.set(0.18, 0.26, 0.3)

    const geometry3 = new THREE.BoxGeometry(1, 0.7, 1) // 设置cube2尺寸为2x2x2个单位
    const material3 = new THREE.MeshBasicMaterial({ color: 0xE8E8E8 }) // 门1
    const cube3 = new THREE.Mesh(geometry3, material3)
    cube3.add(planeMesh, planeMesh2, planeMesh3)
    cube3.position.y = 1.1
    // cube3.position.z = 2.5

    const geometry4 = new THREE.BoxGeometry(1, 1, 1) // 设置cube2尺寸为2x2x2个单位
    const material4 = new THREE.MeshBasicMaterial({ color: 0xE8E8E8 }) // 断路器
    const cube4 = new THREE.Mesh(geometry4, material4)
    cube4.position.y = 0.25

    // 状态
    const planeGeometry4 = new THREE.PlaneGeometry(1, 1)
    // 创建材质并加载贴图
    const texture4 = new THREE.TextureLoader().load('duanluqi.png')
    const material12 = new THREE.MeshBasicMaterial({ map: texture4, side: THREE.FrontSide, transparent: true })
    // 设置贴图的重复次数和起始位置
    material12.map.repeat.set(1, 1)
    material12.map.offset.set(0, 0)
    // 创建平面网格
    const planeMesh4 = new THREE.Mesh(planeGeometry4, material12)
    planeMesh4.position.x = 0.01// 设置平面几何体的位置为左上角
    planeMesh4.position.y = 1.31
    planeMesh4.position.z = 0.53
    planeMesh4.scale.set(1, 0.2, 0.3)

    // 状态
    const planeGeometry5 = new THREE.PlaneGeometry(1, 1)
    // 创建材质并加载贴图
    const texture5 = new THREE.TextureLoader().load('anniu.png')
    const material13 = new THREE.MeshBasicMaterial({ map: texture5, side: THREE.FrontSide, transparent: true })
    // 设置贴图的重复次数和起始位置
    material13.map.repeat.set(1, 1)
    material13.map.offset.set(0, 0)
    // 创建平面网格
    const planeMesh5 = new THREE.Mesh(planeGeometry5, material13)
    planeMesh5.position.x = 0.01// 设置平面几何体的位置为左上角
    planeMesh5.position.y = 0.76
    planeMesh5.position.z = 0.53
    planeMesh5.scale.set(0.33, 0.2, 0.3)

    // 创建平面几何体
    // const planeGeometry10 = new THREE.PlaneGeometry(5, 5)
    // // 创建贴图加载器并加载 GIF 图片
    // const textureLoader = new THREE.TextureLoader()
    // const gifTexture = textureLoader.load('1.gif')
    // // 创建材质，并将 GIF 贴图应用到材质上
    // const material50 = new THREE.MeshBasicMaterial({
    //   map: gifTexture,
    //   side: THREE.DoubleSide,
    //   transparent: true,
    // })
    // // 创建平面网格，并应用材质
    // const planeMesh10 = new THREE.Mesh(planeGeometry10, material50)
    // // 将平面网格添加到场景中
    // scene.add(planeMesh10)

    const geometry5 = new THREE.BoxGeometry(1, 0.8, 1) // 设置cube2尺寸为2x2x2个单位
    const material5 = new THREE.MeshBasicMaterial({ color: 0xE8E8E8 }) // 手车
    const cube5 = new THREE.Mesh(geometry5, material5)
    cube5.add(planeMesh4, planeMesh5)
    cube5.position.y = -0.65

    const edges1 = new THREE.EdgesGeometry(cube3.geometry) // 加黑色边框
    const lineMaterial = new THREE.MeshBasicMaterial({ color: 0x000000 })
    const line = new THREE.LineSegments(edges1, lineMaterial)
    scene.add(line)
    line.position.copy(cube3.position) // 与几何保持一致

    const edges2 = new THREE.EdgesGeometry(cube4.geometry) // 加黑色边框
    const lineMaterial2 = new THREE.MeshBasicMaterial({ color: 0x000000 })
    const line2 = new THREE.LineSegments(edges2, lineMaterial2)
    scene.add(line2)
    line2.position.copy(cube4.position) // 与几何保持一致

    const edges3 = new THREE.EdgesGeometry(cube5.geometry) // 加黑色边框
    const lineMaterial3 = new THREE.MeshBasicMaterial({ color: 0x000000 })
    const line3 = new THREE.LineSegments(edges3, lineMaterial3)
    scene.add(line3)
    line3.position.copy(cube5.position) // 与几何保持一致

    // 圆孔板
    const shape = new THREE.Shape()
    const radius = 0.1 // 圆形半径
    const spacing = 0.2 // 圆形间距

    // 添加圆形
    for (let i = -0.5; i <= 0.5; i += spacing) {
      for (let j = -0.5; j <= 0.5; j += spacing) {
        shape.moveTo(i + radius, j)
        shape.quadraticCurveTo(i + radius, j + radius, i, j + radius)
        shape.quadraticCurveTo(i - radius, j + radius, i - radius, j)
        shape.quadraticCurveTo(i - radius, j - radius, i, j - radius)
        shape.quadraticCurveTo(i + radius, j - radius, i + radius, j)
      }
    }

    // 创建立方体
    const geometry6 = new THREE.BoxGeometry(0.01, 0.01, 0.01)
    // 创建立方体材质
    const material6 = new THREE.MeshBasicMaterial({ color: 0x1C1C1C })
    // 创建立方体网格
    const cube6 = new THREE.Mesh(geometry6, material6)
    cube6.scale.set(0.28, 0.2, 0.2)
    cube6.position.z = 0.5
    cube6.position.y = -0.5
    // 创建立方体的内部空洞
    const hole6 = new THREE.Path()
    hole6.absellipse(0.2, 0, 0.1, 0.05, 0, Math.PI * 2)
    // 创建立方体的内部几何体
    const geometryWithHole6 = new THREE.ShapeGeometry(shape)
    // 创建立方体的内部网格
    const meshWithHole6 = new THREE.Mesh(geometryWithHole6, material6)
    // 将内部网格添加为立方体的子对象
    cube6.add(meshWithHole6)

    // 创建立方体2
    const geometry7 = new THREE.BoxGeometry(0.01, 0.01, 0.01)
    // 创建立方体材质
    const material7 = new THREE.MeshBasicMaterial({ color: 0x1C1C1C })
    // 创建立方体网格
    const cube7 = new THREE.Mesh(geometry7, material7)
    cube7.scale.set(0.28, 0.2, 0.2)
    cube7.position.z = 0.5
    cube7.position.y = 0.3
    // 创建立方体的内部空洞
    const hole7 = new THREE.Path()
    hole7.absellipse(0.2, 0, 0.1, 0.05, 0, Math.PI * 2)
    // 创建立方体的内部几何体
    const geometryWithHole7 = new THREE.ShapeGeometry(shape)
    // 创建立方体的内部网格
    const meshWithHole7 = new THREE.Mesh(geometryWithHole7, material7)
    // 将内部网格添加为立方体的子对象
    cube7.add(meshWithHole7)

    // 创建监控体
    const radiusTop = 0.15 // 圆柱体顶部半径
    const radiusBottom = 0.12 // 圆柱体底部半径
    const height = 0.12 // 圆柱体高度
    const radialSegments = 32 // 圆柱体径向分段数
    const heightSegments5 = 1 // 圆柱体高度分段数
    const openEnded = false // 是否没有顶面和底面
    const cylinderGeometry = new THREE.CylinderGeometry(
      radiusTop,
      radiusBottom,
      height,
      radialSegments,
      heightSegments5,
      openEnded,
    )
    // 创建圆柱体的材质
    const material40 = new THREE.MeshPhongMaterial({ color: 0xE8E8E8 }) // 设置材质颜色为红色
    // 创建圆柱体的网格对象
    const cylinder = new THREE.Mesh(cylinderGeometry, material40)
    // 设置圆柱体的位置和旋转
    cylinder.position.set(2.7, 1.1, -2)
    cylinder.rotation.set(0, Math.PI / 4, 0) // 绕 y 轴旋转 45 度
    // 将圆柱体添加到场景中
    scene.add(cylinder)

    // 创建摄像头球体
    const radius2 = 0.15 // 球体的半径
    const widthSegments = 32 // 水平分段数
    const heightSegments = 32 // 垂直分段数
    const sphereGeometry = new THREE.SphereGeometry(radius2, widthSegments, heightSegments)
    // 创建球体的材质
    const material30 = new THREE.MeshPhongMaterial({ color: 0xffffff }) // 设置材质颜色
    // 创建球体的网格对象
    const sphere = new THREE.Mesh(sphereGeometry, material30)
    // 设置球体的位置
    sphere.position.set(2.7, 1, -2) // 设置球体的位置坐标

    // 添加光源
    const light = new THREE.DirectionalLight(0xffffff, 4.2)
    light.position.set(2, 2, 2).normalize()
    scene.add(light)

    // 添加环境光
    const ambientLight = new THREE.AmbientLight(0xffffff) // 环境光颜色为灰色
    scene.add(ambientLight)
    // 将球体添加到场景中
    scene.add(sphere)

    // 创建摄像头球体
    const radius3 = 0.13 // 球体的半径
    const widthSegments2 = 32 // 水平分段数
    const heightSegments2 = 32 // 垂直分段数
    const sphereGeometry2 = new THREE.SphereGeometry(radius3, widthSegments2, heightSegments2)
    // 创建球体的材质
    const material31 = new THREE.MeshPhongMaterial({ color: 0x000000 }) // 设置材质颜色
    // 创建球体的网格对象
    const sphere2 = new THREE.Mesh(sphereGeometry2, material31)
    // 设置球体的位置
    sphere2.position.set(2.7, 1, -1.93) // 设置球体的位置坐标

    // 将球体添加到场景中
    scene.add(sphere2)

    // 创建文字几何体
    const fontLoader = new FontLoader()
    // 创建一个组合对象
    const group = new THREE.Object3D()

    // 创建一个组合对象
    const shexiangtou = new THREE.Object3D()
    this.shexiangtou = shexiangtou

    fontLoader.load('/three font/Felix Titling_Regular.json', font => {
      // console.log('字体加载成功:', font)
      // 创建文字几何体
      const textGeometry = new TextGeometry('GKG-12', {
        font,
        size: 0.06, // 文字大小
        height: 0.01, // 文字厚度
        curveSegments: 20,
        bevelEnabled: false,
        bevelThickness: 1,
        bevelSize: 0,
        bevelOffset: 0,
        bevelSegments: 15,
      })

      // 创建文字材质
      const textMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff, side: THREE.DoubleSide })
      // 创建文字Mesh对象
      const textMesh = new THREE.Mesh(textGeometry, textMaterial)
      // 设置文字位置
      textMesh.position.x = -0.45
      textMesh.position.y = 1.47
      textMesh.position.z = 0.5
      // 将文字Mesh添加到组合对象group中
      group.add(textMesh)
    })

    // group.add(cube, cube2, cube3, cube4, cube5, cube6, cube7, line, line2, line3) // 将两个立方体添加到组合对象中
    group.add(cube)
    group.add(cube2)
    group.add(cube3)
    group.add(cube4)
    group.add(cube5)
    group.add(cube6)
    group.add(cube7)
    group.add(line)
    group.add(line2)
    group.add(line3)
    group.position.x = -4
    group.position.y = -0.5

    shexiangtou.add(cylinder)
    shexiangtou.add(sphere)
    shexiangtou.add(sphere2)

    const clonedGroup1 = group.clone() // 克隆模型
    clonedGroup1.translateX(1.1) // 相对位置
    clonedGroup1.translateY(0)
    clonedGroup1.translateZ(0)

    const clonedGroup2 = group.clone() // 克隆模型
    clonedGroup2.translateX(2.2) // 相对位置
    clonedGroup2.translateY(0)
    clonedGroup2.translateZ(0)

    const clonedGroup3 = group.clone() // 克隆模型
    clonedGroup3.translateX(3.3) // 相对位置
    clonedGroup3.translateY(0)
    clonedGroup3.translateZ(0)

    const clonedGroup4 = group.clone() // 克隆模型
    clonedGroup4.translateX(4.4) // 相对位置
    clonedGroup4.translateY(0)
    clonedGroup4.translateZ(0)

    const clonedGroup5 = group.clone() // 克隆模型
    clonedGroup5.translateX(5.5) // 相对位置
    clonedGroup5.translateY(0)
    clonedGroup5.translateZ(0)

    // 创建文字几何体  第二台
    const fontLoader1 = new FontLoader()

    fontLoader1.load('/three font/Felix Titling_Regular.json', font => {
      const textGeometry20 = new TextGeometry('GKG-12', {
        font,
        size: 0.06, // 文字大小
        height: 0.01, // 文字厚度
        curveSegments: 20,
        bevelEnabled: false,
        bevelThickness: 1,
        bevelSize: 0,
        bevelOffset: 0,
        bevelSegments: 15,
      })

      // 创建文字材质
      const textMaterial20 = new THREE.MeshBasicMaterial({ color: 0xffffff, side: THREE.DoubleSide })
      // 创建文字Mesh对象
      const textMesh = new THREE.Mesh(textGeometry20, textMaterial20)
      // 设置文字位置
      textMesh.position.x = -0.45
      textMesh.position.y = 1.47
      textMesh.position.z = 0.5
      // 将文字Mesh添加到组合对象group中
      clonedGroup1.add(textMesh)
    })

    // 创建文字几何体 第三台
    const fontLoader2 = new FontLoader()

    fontLoader2.load('/three font/Felix Titling_Regular.json', font => {
      const textGeometry21 = new TextGeometry('GKG-12', {
        font,
        size: 0.06, // 文字大小
        height: 0.01, // 文字厚度
        curveSegments: 20,
        bevelEnabled: false,
        bevelThickness: 1,
        bevelSize: 0,
        bevelOffset: 0,
        bevelSegments: 15,
      })

      // 创建文字材质
      const textMaterial21 = new THREE.MeshBasicMaterial({ color: 0xffffff, side: THREE.DoubleSide })
      // 创建文字Mesh对象
      const textMesh = new THREE.Mesh(textGeometry21, textMaterial21)
      // 设置文字位置
      textMesh.position.x = -0.45
      textMesh.position.y = 1.47
      textMesh.position.z = 0.5
      // 将文字Mesh添加到组合对象group中
      clonedGroup2.add(textMesh)
    })

    // 创建文字几何体 第四台
    const fontLoader3 = new FontLoader()

    fontLoader3.load('/three font/Felix Titling_Regular.json', font => {
      const textGeometry22 = new TextGeometry('GKG-12', {
        font,
        size: 0.06, // 文字大小
        height: 0.01, // 文字厚度
        curveSegments: 20,
        bevelEnabled: false,
        bevelThickness: 1,
        bevelSize: 0,
        bevelOffset: 0,
        bevelSegments: 15,
      })

      // 创建文字材质
      const textMaterial22 = new THREE.MeshBasicMaterial({ color: 0xffffff, side: THREE.DoubleSide })
      // 创建文字Mesh对象
      const textMesh = new THREE.Mesh(textGeometry22, textMaterial22)
      // 设置文字位置
      textMesh.position.x = -0.45
      textMesh.position.y = 1.47
      textMesh.position.z = 0.5
      // 将文字Mesh添加到组合对象group中
      clonedGroup3.add(textMesh)
    })

    // 创建文字几何体 第五台
    const fontLoader4 = new FontLoader()

    fontLoader4.load('/three font/Felix Titling_Regular.json', font => {
      const textGeometry23 = new TextGeometry('GKG-12', {
        font,
        size: 0.06, // 文字大小
        height: 0.01, // 文字厚度
        curveSegments: 20,
        bevelEnabled: false,
        bevelThickness: 1,
        bevelSize: 0,
        bevelOffset: 0,
        bevelSegments: 15,
      })

      // 创建文字材质
      const textMaterial23 = new THREE.MeshBasicMaterial({ color: 0xffffff, side: THREE.DoubleSide })
      // 创建文字Mesh对象
      const textMesh = new THREE.Mesh(textGeometry23, textMaterial23)
      // 设置文字位置
      textMesh.position.x = -0.45
      textMesh.position.y = 1.47
      textMesh.position.z = 0.5
      // 将文字Mesh添加到组合对象group中
      clonedGroup4.add(textMesh)
    })

    // 创建文字几何体 第六台
    const fontLoader5 = new FontLoader()

    fontLoader5.load('/three font/Felix Titling_Regular.json', font => {
      const textGeometry24 = new TextGeometry('GKG-12', {
        font,
        size: 0.06, // 文字大小
        height: 0.01, // 文字厚度
        curveSegments: 20,
        bevelEnabled: false,
        bevelThickness: 1,
        bevelSize: 0,
        bevelOffset: 0,
        bevelSegments: 15,
      })

      // 创建文字材质
      const textMaterial24 = new THREE.MeshBasicMaterial({ color: 0xffffff, side: THREE.DoubleSide })
      // 创建文字Mesh对象
      const textMesh = new THREE.Mesh(textGeometry24, textMaterial24)
      // 设置文字位置
      textMesh.position.x = -0.45
      textMesh.position.y = 1.47
      textMesh.position.z = 0.5
      // 将文字Mesh添加到组合对象group中
      clonedGroup5.add(textMesh)
    })

    // 将组合几何体添加到场景中
    scene.add(group)

    scene.add(shexiangtou)
    this.scene.add(this.shexiangtou)

    scene.add(clonedGroup1) // 将克隆的模型添加到场景
    scene.add(clonedGroup2)
    scene.add(clonedGroup3)
    scene.add(clonedGroup4)
    scene.add(clonedGroup5)

    // 设置相机位置
    camera.position.z = 4.5
    camera.position.x = 2.8

    // let isRotating = false
    //
    // // 然后，在模型上添加一个点击事件监听器
    // renderer.domElement.addEventListener('click', () => {
    //   // 切换旋转状态
    //   isRotating = !isRotating
    // })

    // 渲染循环
    const animate = function () {
      requestAnimationFrame(animate)

      // 检查旋转状态
      // if (isRotating) {
      //   // 如果正在旋转，则继续旋转模型
      //   group.rotation.y += 0.01
      //   clonedGroup1.rotation.y += 0.01
      //   clonedGroup2.rotation.y += 0.01
      //   clonedGroup3.rotation.y += 0.01
      //   clonedGroup4.rotation.y += 0.01
      //   clonedGroup5.rotation.y += 0.01
      // }

      // parentGroup.rotation.y += 0.01

      // 渲染场景
      renderer.render(scene, camera)
      controls.update() // 更新鼠标控制器
    }

    animate()
    // 使用定时器每2秒更新数据
    setInterval(() => {
      this.updateTemData()
      this.updateWetData()
      this.updateUaData()
      this.updateIaData()
      this.updatePaData()
    }, 2000)
  },
  methods: {
    updateTemData() {
      // 生成30到60之间的随机数给温度
      const randomTemperature1 = Math.floor(Math.random() * (30 - 10 + 1)) + 20
      // 更新数据
      this.temperData = randomTemperature1
    },

    updateWetData() {
      // 生成30到60之间的随机数给湿度
      const randomTemperature2 = Math.floor(Math.random() * (65 - 45 + 1)) + 45
      // 更新数据
      this.wetData = randomTemperature2
    },

    updateUaData() {
      // 生成200到290之间的随机数给电压
      const randomTemperature3 = Math.floor(Math.random() * (290 - 200) + 200).toFixed(1)
      // 更新数据
      this.UaData = randomTemperature3
    },

    updateIaData() {
      // 生成10到20之间的随机数给电流
      const randomTemperature4 = Math.floor(Math.random() * (20 - 10) + 10).toFixed(1)
      // 更新数据
      this.IaData = randomTemperature4
    },

    updatePaData() {
      // 生成60到120之间的随机数给电流
      const randomTemperature5 = Math.floor(Math.random() * (5000 - 2000 + 1)) + 2000
      // 更新数据
      this.PaData = randomTemperature5
    },

    onMouseMove(event) {
      // 计算鼠标的归一化设备坐标(NDC)
      this.mouse.x = (event.clientX / window.innerWidth) * 2 - 1
      this.mouse.y = -(event.clientY / window.innerHeight) * 2 + 1
      console.log('Mouse NDC Coordinates:', this.mouse.x, this.mouse.y)

      // 更新光线投射器
      this.raycaster.setFromCamera(this.mouse.clone(), this.camera)

      // 检查与球体的交点(蛇形头)
      const intersects = this.raycaster.intersectObjects(this.shexiangtou.children, true)
      console.log('Intersects:', intersects)

      // 如果鼠标的y坐标在0.3到0.4之间，显示div，否则隐藏
      if ((this.mouse.x >= 0.15 && this.mouse.x <= 0.35) && (this.mouse.y >= 0.2 && this.mouse.y <= 0.5)) {
        document.getElementById('Scamera').style.display = 'block'
      } else {
        document.getElementById('Scamera').style.display = 'none'
      }
    },
    goToRealTimeVideo() {
      this.$router.push('RealTimeVideo')
    },
  },
}
</script>

<style>
.Lbackground {
  background-image: url("../assets/images/ba.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  scale: 0.5;
  position: absolute;
  transform: translate(-50%, -50%);
}
.title {
  background-image: url("../assets/images/title.svg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  font-family: 新宋体;
  text-align: center;
  color: #cbeefc;
  font-weight: bold;
  font-size: 50px;
}
.text-ABC{

}
</style>
