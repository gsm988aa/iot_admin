<template>

  <!--   <section id="dashboard-deviceinfos" class = "deviceinfos">
        11111
     </section> -->
<!--      <v-chart :options="chartOptions"></v-chart>-->
    <b-container class="bv-example-row">

        <b-row>
            <b-col  cols="4">
                <b-row id="ec1">
                    <br>
                    <br>
                    第一个图
                </b-row>
                <b-row id="ec4">
                    <br>
                    <br>
                    第四个图
                </b-row>
            </b-col>
            <b-col  cols="4">
                <b-row id="ec2">
                    <br>
                    <br>
                    第二个图
                </b-row>
                <b-row id="ec5">
                    <br>
                    <br>
                    第五个图
                </b-row>
            </b-col>
            <b-col  cols="4">
                <b-row id="ec3">
                    <br>
                    <br>
                    第三个图
                </b-row>
                <b-row id="ec6">
                    <br>
                    <br>
                    第六个图
                </b-row>
            </b-col>
        </b-row>

        <div>

            <b-button @click="hideCharts = !hideCharts">{{ hideCharts ? '显示图表' : '隐藏图表' }}</b-button>

            <b-collapse v-model="hideCharts">
                <b-row>
                    <b-col  cols="4">
                        <b-row id="hi1">
                            <br>
                            <br>
                        </b-row>
                    </b-col>
                    <b-col cols="4">
                        <b-row id="hi2">
                            <br>
                            <br>
                        </b-row>
                    </b-col>
                    <b-col cols="4">
                        <b-row id="hi3">
                            <br>
                            <br>
                        </b-row>
                    </b-col>
                </b-row>
            </b-collapse>
        </div>


    </b-container>

</template>


<script src="https://cdn.jsdelivr.net/npm/echarts/dist/echarts.min.js">
</script>

<script src="echarts.min.js"></script>

<script>
import {
    BRow, BCol, BCardGroup, BCard, BCardText,BButton , BFormTextarea, BContainer
} from 'bootstrap-vue'
import echarts from 'echarts';
import  axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'bootstrap-vue/dist/bootstrap-vue.js'


export default {
    components: {
        BFormTextarea,
        BButton,
        BRow,
        BCol,
        BContainer,
    },

    props: {
        option: {
            type: Object,
            required: true
        }
    },


    data() {
        return {

            // 记录是否隐藏最后三张图表
            hideCharts: true,

            charts: [],
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
            currenttime: [],

            ec1: {
                // color: ['#FFBF00'],
                // paddingLeft: 0,
                // title: {
                //     text: 'Gradient Stacked Area Chart'
                // },
                // tooltip: {
                //     trigger: 'axis',
                //     axisPointer: {
                //         type: 'cross',
                //         label: {
                //             backgroundColor: '#6a7985'
                //         }
                //     }
                // },

                // options: {
                //     backgroundColor: '#fff',
                //     title:{
                //         text:'测温数据',
                //         left:'center'
                //     }
                // },

                // legend: {
                //     data: ['Line 1']
                // },
                // toolbox: {
                //     feature: {
                //         saveAsImage: {}
                //     }
                // },
                // grid: {
                //     left: '3%',
                //     right: '4%',
                //     bottom: '3%',
                //     containLabel: true
                // },
                // xAxis: [
                //     {
                //         type: 'category',
                //         boundaryGap: false,
                //         data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                //         // axisLabel: {
                //         //     formatter: function (value, index) {
                //         //         var date = new Date(value);
                //         //         return date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();
                //         //     }
                //         // }
                //     }
                // ],
                // yAxis: [
                //     {
                //         type: 'value'
                //     }
                // ],
                // series: [
                //     {
                //         name: 'Line 1',
                //         type: 'line',
                //         stack: 'Total',
                //         smooth: true,
                //         lineStyle: {
                //             width: 0
                //         },
                //         showSymbol: false,
                //         areaStyle: {
                //             opacity: 0.8,
                //             color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                //                 {
                //                     offset: 0,
                //                     color: 'rgb(128, 255, 165)'
                //                 },
                //                 {
                //                     offset: 1,
                //                     color: 'rgb(1, 191, 236)'
                //                 }
                //             ])
                //         },
                //         emphasis: {
                //             focus: 'series'
                //         },
                //         data: [120, 132, 101, 134, 90, 230, 210]
                //     },
                //     ]
            }
        }
    },


    beforeDestroy() {
        this.chart.dispose()
    },

    mounted() {
        // 初始化 Echarts 实例
        const chart1 = echarts.init(document.getElementById('ec1'));
        const chart2 = echarts.init(document.getElementById('ec2'));
        const chart3 = echarts.init(document.getElementById('ec3'));
        const chart4 = echarts.init(document.getElementById('ec4'));
        const chart5 = echarts.init(document.getElementById('ec5'));
        const chart6 = echarts.init(document.getElementById('ec6'));
        const chart7 = echarts.init(document.getElementById('hi1'));
        const chart8 = echarts.init(document.getElementById('hi2'));
        const chart9 = echarts.init(document.getElementById('hi3'));

        // 根据不同的图表类型创建不同的 option 对象
        const option1 = {
            title: {
                text: '测温数据1'
            },
            tooltip: {},
            legend: {
                data: ['data1']
            },
            xAxis: {
                data: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"]
            },
            yAxis: {},
            series: [{
                smooth: true,
                name: 'data1',
                type: 'line',
                data: [5, 20, 36, 10, 10, 20, 5],
                areaStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(
                            0, 0, 0, 1,
                            [
                                {offset: 0, color: '#FFDAB9'},
                                {offset: 0.5, color: 'pink'},
                                {offset: 1, color: '#ffffff'}
                            ]
                        )
                    }
                },
            }],

        };
        const option2 = {
            title: {
                text: '测温数据2'
            },
            tooltip: {},
            legend: {
                data: ['data2']
            },
            xAxis: {
                data: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"]
            },
            yAxis: {},
            series: [{
                smooth: true,
                name: 'data2',
                type: 'line',
                data: [5, 20, 36, 10, 10, 20, 5],
                lineStyle: {
                    normal: {
                        color: '#9370DB',
                        width: 2,
                    }
                },
                areaStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(
                            0, 0, 0, 1,
                            [
                                {offset: 0, color: '#E0EEEE'},
                                {offset: 0.5, color: '#EED2EE'},
                                {offset: 1, color: '#ffffff'}
                            ]
                        )
                    }
                },
            }]
        };
        const option3 = {
            title: {
                text: '测温数据3'
            },
            tooltip: {},
            legend: {
                data: ['data3']
            },
            xAxis: {
                data: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"]
            },
            yAxis: {},
            series: [{
                smooth: true,
                name: 'data3',
                type: 'line',
                data: [5, 20, 36, 10, 10, 20, 5],
                lineStyle: {
                    normal: {
                        color: '#FFA500',
                        width: 2,
                    }
                },
                areaStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(
                            0, 0, 0, 1,
                            [
                                {offset: 0, color: '#FFF8DC'},
                                {offset: 0.5, color: '#FFA54F'},
                                {offset: 1, color: '#ffffff'}
                            ]
                        )
                    }
                },
            }]
        };
        const option4 = {
            title: {
                text: '测温数据4'
            },
            tooltip: {},
            legend: {
                data: ['data4']
            },
            xAxis: {
                data: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"]
            },
            yAxis: {},
            series: [{
                smooth: true,
                name: 'data4',
                type: 'line',
                data: [5, 20, 36, 10, 10, 20, 5],
                lineStyle: {
                    normal: {
                        color: '#FFB90F',
                        width: 2,
                    }
                },
                areaStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(
                            0, 0, 0, 1,
                            [
                                {offset: 0, color: '#FFF68F'},
                                {offset: 0.5, color: '#FFD700'},
                                {offset: 1, color: '#ffffff'}
                            ]
                        )
                    }
                },
            }]
        };
        const option5 = {
            title: {
                text: '测温数据5'
            },
            tooltip: {},
            legend: {
                data: ['data5']
            },
            xAxis: {
                data: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"]
            },
            yAxis: {},
            series: [{
                smooth: true,
                name: 'data5',
                type: 'line',
                data: [5, 20, 36, 10, 10, 20, 5],
                lineStyle: {
                    normal: {
                        color: '#9ACD32',
                        width: 2,
                    }
                },
                areaStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(
                            0, 0, 0, 1,
                            [
                                {offset: 0, color: '#FFFFF0'},
                                {offset: 0.5, color: '#BCEE68'},
                                {offset: 1, color: '#ffffff'}
                            ]
                        )
                    }
                },
            }]
        };
        const option6 = {
            title: {
                text: '测温数据6'
            },
            tooltip: {},
            legend: {
                data: ['data6']
            },
            xAxis: {
                data: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"]
            },
            yAxis: {},
            series: [{
                smooth: true,
                name: 'data6',
                type: 'line',
                data: [5, 20, 36, 10, 10, 20, 5],
                lineStyle: {
                    normal: {
                        color: '#696969',
                        width: 2,
                    }
                },
                areaStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(
                            0, 0, 0, 1,
                            [
                                {offset: 0, color: '#FFE4E1'},
                                {offset: 0.5, color: '#CFCFCF'},
                                {offset: 1, color: '#ffffff'}
                            ]
                        )
                    }
                },
            }]
        };
        const option7 = {
            title: {
                text: '测温数据7'
            },
            tooltip: {},
            legend: {
                data: ['data7']
            },
            xAxis: {
                data: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"]
            },
            yAxis: {},
            series: [{
                smooth: true,
                name: 'data7',
                type: 'line',
                data: [5, 20, 36, 10, 10, 20, 5],
                lineStyle: {
                    normal: {
                        color: '#8B4513',
                        width: 2,
                    }
                },
                areaStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(
                            0, 0, 0, 1,
                            [
                                {offset: 0, color: '#DEB887'},
                                {offset: 0.5, color: '#CD853F'},
                                {offset: 1, color: '#ffffff'}
                            ]
                        )
                    }
                },
            }]
        };
        const option8 = {
            title: {
                text: '测温数据8'
            },
            tooltip: {},
            legend: {
                data: ['data8']
            },
            xAxis: {
                data: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"]
            },
            yAxis: {},
            series: [{
                smooth: true,
                name: 'data8',
                type: 'line',
                data: [5, 20, 36, 10, 10, 20, 5],
                lineStyle: {
                    normal: {
                        color: '#006400',
                        width: 2,
                    }
                },
                areaStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(
                            0, 0, 0, 1,
                            [
                                {offset: 0, color: '#EEE8AA'},
                                {offset: 0.5, color: '#BDB76B'},
                                {offset: 1, color: '#ffffff'}
                            ]
                        )
                    }
                },
            }]
        };
        const option9 = {
            title: {
                text: '测温数据9'
            },
            tooltip: {},
            legend: {
                data: ['data9']
            },
            xAxis: {
                data: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"]
            },
            yAxis: {},
            series: [{
                smooth: true,
                name: 'data9',
                type: 'line',
                data: [5, 20, 36, 10, 10, 20, 5],
                lineStyle: {
                    normal: {
                        color: '#1E90FF',
                        width: 2,
                    }
                },
                areaStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(
                            0, 0, 0, 1,
                            [
                                {offset: 0, color: '#B0C4DE'},
                                {offset: 0.5, color: '#48D1CC'},
                                {offset: 1, color: '#ffffff'}
                            ]
                        )
                    }
                },
            }]
        };


        // 使用配置项显示图表
        chart1.setOption(option1);
        chart2.setOption(option2);
        chart3.setOption(option3);
        chart4.setOption(option4);
        chart5.setOption(option5);
        chart6.setOption(option6);
        chart7.setOption(option7);
        chart8.setOption(option8);
        chart9.setOption(option9);

// 循环更新数据
        for (let i = 1; i <= 9; i++) {
            const chart = echarts.init(document.getElementById(`ec${i}`));
            const option = {
                title: {
                    text: `测温数据${i}`
                },
                // ...
            };
            chart.setOption(option);
        }



// 获取按钮
        const button = document.getElementById("btn");
// 绑定click事件
        button.addEventListener("click", function () {
            // 点击按钮后执行的代码
        });





        const chart = echarts.init(this.$refs.chart);
        chart.setOption(this.chartData);
        setInterval(() => {
            // this.chartData.series[0].data = this.generateData();
            // chart.setOption(this.chartData);

          // 生成新的数据
            const newData1 = this.generateData1();
            const newData2 = this.generateData2();
            const newData3 = this.generateData3();
            const newData4 = this.generateData4();
            const newData5 = this.generateData5();
            const newData6 = this.generateData6();
            const newData7 = this.generateData7();
            const newData8 = this.generateData8();
            const newData9 = this.generateData9();
            const newcurrenttime = this.generatecurrenttime();


            chart.setOption({
                series: [{
                    data: newData
                }
                ]
            });
            // 更新温度数据
            this.temperature1[0] = newData[0].value;
        }, 3000);


        this.showCharts([0, 1, 2, 3, 4, 5]);

    },
    methods: {
        // handleClick1() {
        //
        //     axios.get('http://localhost:10866/getdbtemperature').then((response) => {
        //         this.text = response.data
        //     })
        // },
        generateData() {
            // const data = [];
            // for (let i = 0; i < 7; i++) {
            //     data.push(Math.floor(Math.random() * 1000));
            // }

            axios.get('http://localhost:10866/getdbtemperature').then((response) => {

                this.temperature1 = response.data.map(item => item.ec1);
                this.temperature2 = response.data.map(item => item.ec2);
                this.temperature3 = response.data.map(item => item.ec3);
                this.temperature4 = response.data.map(item => item.ec4);
                this.temperature5 = response.data.map(item => item.ec5);
                this.temperature6 = response.data.map(item => item.ec6);
                this.temperature7 = response.data.map(item => item.ec7);
                this.temperature8 = response.data.map(item => item.ec8);
                this.temperature9 = response.data.map(item => item.ec9);
                this.currenttime = response.data.map(item => item.currenttime);
            });
            return this.temperature1;
            return this.temperature2;
            return this.temperature3;
            return this.temperature4;
            return this.temperature5;
            return this.temperature6;
        },

        showCharts(indexes) {
            this.charts.forEach((chart, index) => {
                if (indexes.includes(index)) {
                    chart.setOption({hide: 'none'});
                } else {
                    chart.setOption({show: 'none'});
                }
            });
        },
        showAllCharts() {
            this.showCharts([0, 1, 2, 3, 4, 5]);
        }

    },


}

</script>
<style>
#ec1, #ec2, #ec3,#ec4, #ec5, #ec6 {
    width: 100%;

    height: 400px;

}
#hi1, #hi2, #hi3{
    width: 100%;

    height: 400px;

}
.bv-example-row {
    position: relative;
}


hideCharts{
    position: absolute;
    left: 0;
    bottom: 0;
    transform: translateX(-100%);
    transition: transform 0.5s ease;
}

button {
    display: block;
    margin-top: 20px;
}
</style>


