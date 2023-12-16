<template>
  <div class="map-view">
    <div
      ref="mapContainer"
      class="main"
    />
  </div>
</template>

<script>
import * as echarts from 'echarts'
import geoJson from '@/assets/json/map/china.json'

export default {
  mounted() {
    this.$nextTick(() => {
      this.initECharts()
    })
  },
  methods: {
    initECharts() {
      const { mapContainer } = this.$refs
      const myChart = echarts.init(mapContainer)

      // 注册地图
      echarts.registerMap('china', geoJson)

      // 初始化图表
      myChart.setOption({
        // 背景色
        backgroundColor: 'rgb(0,0,0,10%)',
        // 配置项(组件)
        geo: {
          map: 'china',
          // 地图的长宽比例
          aspectScale: 0.75,
          // 图层
          zoom: 1.1,
          // 样式
          itemStyle: {
            // 标准
            // 地图区域的颜色
            areaColor: {
              type: 'radial',
              x: 0.5,
              y: 0.5,
              r: 0.8,
              // 颜色的步骤
              colorStops: [
                {
                  offset: 0,
                  color: '#09132c',
                },
                {
                  offset: 1,
                  color: '#274d68',
                },
              ],
              // 延长作用域
              globalCoord: true,
            },
            // 盒子的阴影
            shadowColor: 'rgb(58,115,192)',
            // 偏移
            shadowOffsetX: 5,
            shadowOffsetY: 7,
          },
          region: [
            {
              name: '南海诸岛',
              itemStyle: {
                opacity: 0,
              },
            },
          ],
        },
        series: [
          // 配置地图相关的数据参数
          {
            type: 'map',
            label: {
              // 显示文字
              color: 'white',
              fontSize: 9, // 文字大小
              show: true, // 是否显示文字
            },
            // 图层
            zoom: 1.1,
            map: 'china',
            itemStyle: {
              // 背景色
              backgroundColor: 'rgb(147,235,248)',
              // 边框
              borderWidth: 1,
              // 区域颜色
              areaColor: {
                color: 'rgb(70,70,150)', // 鼠标滑过背景颜色
                borderWidth: 0.1,
                type: 'radial',
                x: 0.5,
                y: 0.5,
                // 文档
                r: 0.8,
                colorStops: [
                  {
                    offset: 0,
                    color: 'rgb(50,50,150)',
                  },
                  {
                    offset: 1,
                    color: 'rgb(90,158,162)',
                  }, // 每个省的地图背景色
                ],
                // 全局生效
                globalCoord: true,
              },
            },
            // 高亮效果
            emphasis: {
              label: {
                color: 'red', // 鼠标滑过字体颜色
              },
            },
          },
        ],
      })
    },
  },
}
</script>

<style lang="scss" scoped>
.map-view {
  width: 683px;
  height: 420px;
  scale: 2.6;
}
.main {
  width: 683px;
  height: 420px;
}
</style>
