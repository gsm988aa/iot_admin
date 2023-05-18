<template>

  <!--   <section id="dashboard-deviceinfos" class = "deviceinfos">
        11111
     </section> -->
<!--      <v-chart :options="chartOptions"></v-chart>-->
    <div>
        <div>
            <div ref="chart" style="width: 100%; height: 400px;"></div>
        </div>
        <b-button @click =  "handleClick1" variant="primary">
            获取九点测温温度值
        </b-button>

        <b-form-textarea
                id="textarea"
                v-model="text"
                placeholder="Enter something..."
                rows="3"
                max-rows="6">
            {{text}}
        </b-form-textarea>

    </div>

</template>

<script>
import {
    BRow, BCol, BCardGroup, BCard, BCardText,BButton , BFormTextarea
} from 'bootstrap-vue'
import echarts from 'echarts';
import  axios from 'axios'

export default {
    components: {
        BFormTextarea,
        BButton,

    },

    data() {
        return {
            text: 'information',
            temperature1: [],
            temperature2: [],
            temperature3: [],
            temperature4: [],
            temperature5: [],
            temperature6: [],
            temperature7: [],
            temperature8: [],
            temperature9: [],
            currenttime : [],

            chartData: {
                color: ['#80FFA5', '#00DDFF', '#37A2FF', '#FF0087', '#FFBF00'],
                paddingLeft: 0,
                title: {
                    text: 'Gradient Stacked Area Chart'
                },
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'cross',
                        label: {
                            backgroundColor: '#6a7985'
                        }
                    }
                },


                // options: {
                //     backgroundColor: '#fff',
                //     title:{
                //         text:'测温数据',
                //         left:'center'
                //     }
                // },


                legend: {
                    data: ['Line 1', 'Line 2', 'Line 3', 'Line 4', 'Line 5','Line 6','Line 7','Line 8','Line 9']
                },
                toolbox: {
                    feature: {
                        saveAsImage: {}
                    }
                },
                grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '3%',
                    containLabel: true
                },
                xAxis: [
                    {
                        type: 'category',
                        boundaryGap: false,
                        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                        // axisLabel: {
                        //     formatter: function (value, index) {
                        //         var date = new Date(value);
                        //         return date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();
                        //     }
                        // }
                    }
                ],
                yAxis: [
                    {
                        type: 'value'
                    }
                ],
                series: [
                    // {data: [
                    //         [new Date('2022/01/01 00:00:00').getTime(), 10],
                    //         [new Date('2022/01/01 00:01:00').getTime(), 20],
                    //         [new Date('2022/01/01 00:02:00').getTime(), 30],
                    //         [new Date('2022/01/01 00:03:00').getTime(), 40],
                    //         [new Date('2022/01/01 00:04:00').getTime(), 50]
                    //     ],
                    //     type: 'line'},
                    {
                        name: 'Line 1',
                        type: 'line',
                        stack: 'Total',
                        smooth: true,
                        lineStyle: {
                            width: 0
                        },
                        showSymbol: false,
                        areaStyle: {
                            opacity: 0.8,
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                {
                                    offset: 0,
                                    color: 'rgb(128, 255, 165)'
                                },
                                {
                                    offset: 1,
                                    color: 'rgb(1, 191, 236)'
                                }
                            ])
                        },
                        emphasis: {
                            focus: 'series'
                        },
                        data: [140, 232, 101, 264, 90, 340, 250]
                    },
                    {
                        name: 'Line 2',
                        type: 'line',
                        stack: 'Total',
                        smooth: true,
                        lineStyle: {
                            width: 0
                        },
                        showSymbol: false,
                        areaStyle: {
                            opacity: 0.8,
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                {
                                    offset: 0,
                                    color: 'rgb(0, 221, 255)'
                                },
                                {
                                    offset: 1,
                                    color: 'rgb(77, 119, 255)'
                                }
                            ])
                        },
                        emphasis: {
                            focus: 'series'
                        },
                        data: [120, 282, 111, 234, 220, 340, 310]
                    },
                    {
                        name: 'Line 3',
                        type: 'line',
                        stack: 'Total',
                        smooth: true,
                        lineStyle: {
                            width: 0
                        },
                        showSymbol: false,
                        areaStyle: {
                            opacity: 0.8,
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                {
                                    offset: 0,
                                    color: 'rgb(55, 162, 255)'
                                },
                                {
                                    offset: 1,
                                    color: 'rgb(116, 21, 219)'
                                }
                            ])
                        },
                        emphasis: {
                            focus: 'series'
                        },
                        data: [320, 132, 201, 334, 190, 130, 220]
                    },
                    {
                        name: 'Line 4',
                        type: 'line',
                        stack: 'Total',
                        smooth: true,
                        lineStyle: {
                            width: 0
                        },
                        showSymbol: false,
                        areaStyle: {
                            opacity: 0.8,
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                {
                                    offset: 0,
                                    color: 'rgb(255, 0, 135)'
                                },
                                {
                                    offset: 1,
                                    color: 'rgb(135, 0, 157)'
                                }
                            ])
                        },
                        emphasis: {
                            focus: 'series'
                        },
                        data: [220, 402, 231, 134, 190, 230, 120]
                    },
                    {
                        name: 'Line 5',
                        type: 'line',
                        stack: 'Total',
                        smooth: true,
                        lineStyle: {
                            width: 0
                        },
                        showSymbol: false,
                        label: {
                            show: true,
                            position: 'top'
                        },
                        areaStyle: {
                            opacity: 0.8,
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                {
                                    offset: 0,
                                    color: 'rgb(255, 191, 0)'
                                },
                                {
                                    offset: 1,
                                    color: 'rgb(224, 62, 76)'
                                }
                            ])
                        },
                        emphasis: {
                            focus: 'series'
                        },
                        data:[220, 302, 181, 234, 210, 290, 150]
                    },
                    {
                        name: 'Line 6',
                        type: 'line',
                        stack: 'Total',
                        smooth: true,
                        lineStyle: {
                            width: 0
                        },
                        showSymbol: false,
                        label: {
                            show: true,
                            position: 'top'
                        },
                        areaStyle: {
                            opacity: 0.8,
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                {
                                    offset: 0,
                                    color: 'rgb(255, 160, 122)'
                                },
                                {
                                    offset: 1,
                                    color: 'rgb(224, 62, 76)'
                                }
                            ])
                        },
                        emphasis: {
                            focus: 'series'
                        },
                        data:[220, 302, 181, 234, 210, 290, 150]
                    },
                    {
                        name: 'Line 7',
                        type: 'line',
                        stack: 'Total',
                        smooth: true,
                        lineStyle: {
                            width: 0
                        },
                        showSymbol: false,
                        label: {
                            show: true,
                            position: 'top'
                        },
                        areaStyle: {
                            opacity: 0.8,
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                {
                                    offset: 0,
                                    color: 'rgb(255, 192, 203)'
                                },
                                {
                                    offset: 1,
                                    color: 'rgb(224, 62, 76)'
                                }
                            ])
                        },
                        emphasis: {
                            focus: 'series'
                        },
                        data:[220, 322, 181, 234, 210, 290, 150]
                    },
                    {
                        name: 'Line 8',
                        type: 'line',
                        stack: 'Total',
                        smooth: true,
                        lineStyle: {
                            width: 0
                        },
                        showSymbol: false,
                        label: {
                            show: true,
                            position: 'top'
                        },
                        areaStyle: {
                            opacity: 0.8,
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                {
                                    offset: 0,
                                    color: 'rgb(95, 158, 160)'
                                },
                                {
                                    offset: 1,
                                    color: 'rgb(188, 143, 143)'
                                }
                            ])
                        },
                        emphasis: {
                            focus: 'series'
                        },
                        data:[220, 282, 181, 234, 210, 290, 150]
                    },
                    {
                        name: 'Line 9',
                        type: 'line',
                        stack: 'Total',
                        smooth: true,
                        lineStyle: {
                            width: 0
                        },
                        showSymbol: false,
                        label: {
                            show: true,
                            position: 'top'
                        },
                        areaStyle: {
                            opacity: 0.8,
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                {
                                    offset: 0,
                                    color: 'rgb(128, 128, 0)'
                                },
                                {
                                    offset: 1,
                                    color: 'rgb(240,230, 140)'
                                }
                            ])
                        },
                        emphasis: {
                            focus: 'series'
                        },
                        data:[220, 342, 181, 234, 210, 290, 150]
                    },
                ]
            }

        }
    },
    mounted() {
        const chart = echarts.init(this.$refs.chart);
        chart.setOption(this.chartData);
        setInterval(() => {
            // this.chartData.series[0].data = this.generateData();
            // chart.setOption(this.chartData);

          // 生成新的数据
            const newData = this.generateData();
            chart.setOption({
                series: [{
                    data: newData
                }
                    // {
                    //     data1: this.temperature1
                    // },
                    // {
                    //     data2: this.temperature2
                    // },
                    // {
                    //     data3: this.temperature3
                    // },
                    // {
                    //     data4: this.temperature4
                    // },
                    // {
                    //     data5: this.temperature5
                    // },
                    // {
                    //     data6: this.temperature6
                    // },
                    // {
                    //     data7: this.temperature7
                    // },
                    // {
                    //     data8: this.temperature8
                    // },
                    // {
                    //     data9: this.temperature9
                    // },
                    // {
                    //     currenttime: this.currenttime
                    // },
                ]
            });
            // 更新温度数据
            this.temperature1[0] = newData[0].value;
        }, 3000);
    },
    methods: {

        handleClick1() {

            axios.get('http://localhost:10866/getdbtemperature').then((response) => {
                this.text = response.data
            })
        },
        generateData() {
            // const data = [];
            // for (let i = 0; i < 7; i++) {
            //     data.push(Math.floor(Math.random() * 1000));
            // }

            axios.get('http://localhost:10866/getdbtemperature').then((response) => {
                // this.temperature1[0] = response.data[0].data1
                // this.temperature1[1] = response.data[1].data1
                // this.temperature1[2] = response.data[2].data1
                // this.temperature1[3] = response.data[3].data1
                // this.temperature1[4] = response.data[4].data1
                // this.temperature1[5] = response.data[5].data1
                // this.temperature1[6] = response.data[6].data1
                //
                // this.temperature2[0] = response.data[0].data2
                // this.temperature2[1] = response.data[1].data2
                // this.temperature2[2] = response.data[2].data2
                // this.temperature2[3] = response.data[3].data2
                // this.temperature2[4] = response.data[4].data2
                // this.temperature2[5] = response.data[5].data2
                // this.temperature2[6] = response.data[6].data2
                //
                // this.temperature3[0] = response.data[0].data3
                // this.temperature3[1] = response.data[1].data3
                // this.temperature3[2] = response.data[2].data3
                // this.temperature3[3] = response.data[3].data3
                // this.temperature3[4] = response.data[4].data3
                // this.temperature3[5] = response.data[5].data3
                // this.temperature3[6] = response.data[6].data3
                //
                // this.temperature4[0] = response.data[0].data4
                // this.temperature4[1] = response.data[1].data4
                // this.temperature4[2] = response.data[2].data4
                // this.temperature4[3] = response.data[3].data4
                // this.temperature4[4] = response.data[4].data4
                // this.temperature4[5] = response.data[5].data4
                // this.temperature4[6] = response.data[6].data4
                //
                // this.temperature5[0] = response.data[0].data5
                // this.temperature5[1] = response.data[1].data5
                // this.temperature5[2] = response.data[2].data5
                // this.temperature5[3] = response.data[3].data5
                // this.temperature5[4] = response.data[4].data5
                // this.temperature5[5] = response.data[5].data5
                // this.temperature5[6] = response.data[6].data5
                //
                // this.temperature6[0] = response.data[0].data6
                // this.temperature6[1] = response.data[1].data6
                // this.temperature6[2] = response.data[2].data6
                // this.temperature6[3] = response.data[3].data6
                // this.temperature6[4] = response.data[4].data6
                // this.temperature6[5] = response.data[5].data6
                // this.temperature6[6] = response.data[6].data6
                //
                // this.temperature7[0] = response.data[0].data7
                // this.temperature7[1] = response.data[1].data7
                // this.temperature7[2] = response.data[2].data7
                // this.temperature7[3] = response.data[3].data7
                // this.temperature7[4] = response.data[4].data7
                // this.temperature7[5] = response.data[5].data7
                // this.temperature7[6] = response.data[6].data7
                //
                // this.temperature8[0] = response.data[0].data8
                // this.temperature8[1] = response.data[1].data8
                // this.temperature8[2] = response.data[2].data8
                // this.temperature8[3] = response.data[3].data8
                // this.temperature8[4] = response.data[4].data8
                // this.temperature8[5] = response.data[5].data8
                // this.temperature8[6] = response.data[6].data8
                //
                // this.temperature9[0] = response.data[0].data9
                // this.temperature9[1] = response.data[1].data9
                // this.temperature9[2] = response.data[2].data9
                // this.temperature9[3] = response.data[3].data9
                // this.temperature9[4] = response.data[4].data9
                // this.temperature9[5] = response.data[5].data9
                // this.temperature9[6] = response.data[6].data9
                //
                // this.currenttime[0] = response.data[0].currenttime
                // this.currenttime[1] = response.data[1].currenttime
                // this.currenttime[2] = response.data[2].currenttime
                // this.currenttime[3] = response.data[3].currenttime
                // this.currenttime[4] = response.data[4].currenttime
                // this.currenttime[5] = response.data[5].currenttime
                // this.currenttime[6] = response.data[6].currenttime

                this.temperature6 = response.data.map(item => item.data6);
            });
            return this.temperature6;
        }
    },

}

</script>



