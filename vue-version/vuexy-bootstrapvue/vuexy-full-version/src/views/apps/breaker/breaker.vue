<template>
    <b-container fluid>

        <b-row>
            <b-col cols="12">
                <b-card className="center">
                    <b-form-checkbox v-model="checkedstatus">增加卡尔曼滤波器温度预测</b-form-checkbox>
                </b-card>
            </b-col>
        </b-row>

        <b-row>
            <b-col cols="4">
                <b-card>
                    <div ref="chart1" style="width: 100%; height: 400px;">
                    </div>

                </b-card>
            </b-col>
            <b-col cols="4">
                <b-card>
                    <div ref="chart2" style="width: 100%; height: 400px;">
                    </div>

                </b-card>
            </b-col>
            <b-col cols="4">
                <b-card>
                    <div ref="chart3" style="width: 100%; height: 400px;">
                    </div>

                </b-card>
            </b-col>

        </b-row>


        <b-row>
            <b-col cols="4">
                <b-card>
                    <div ref="chart4" style="width: 100%; height: 400px;">
                    </div>
                </b-card>
            </b-col>
            <b-col cols="4">
                <b-card>
                    <div ref="chart5" style="width: 100%; height: 400px;">
                    </div>
                </b-card>
            </b-col>
            <b-col cols="4">
                <b-card>
                    <div ref="chart6" style="width: 100%; height: 400px;">
                    </div>
                </b-card>
            </b-col>
        </b-row>


        <b-row>
            <b-col cols="4">
                <b-card>
                    <div ref="chart7" style="width: 100%; height: 400px;">
                    </div>
                </b-card>
            </b-col>
            <b-col cols="4">
                <b-card>
                    <div ref="chart8" style="width: 100%; height: 400px;">
                    </div>
                </b-card>
            </b-col>

            <b-col cols="4">
                <b-card>
                    <div ref="chart9" style="width: 100%; height: 400px;">
                    </div>
                </b-card>
            </b-col>
        </b-row>


        <div>
            <ul>
                <li v-for="(state, index) in chartStates" :key="index">
                    <label>
                        <input type="checkbox" v-model="state.visible">
                        {{ state.name }}
                    </label>
                </li>
            </ul>
            <div v-for="(state, index) in chartStates" :key="index">
                <div :id="state.name"></div>
            </div>
        </div>

    </b-container>

</template>

<script>
import {
    BRow, BCol, BCardGroup, BCard, BCardText, BButton, BFormTextarea, BContainer, BFormSelect, BFormCheckbox
} from 'bootstrap-vue'
import echarts from 'echarts';
import axios from 'axios';


export default {
    components: {
        BContainer,
        BRow,
        BCol,
        BCard,
        BFormTextarea,
        BButton,

        BFormCheckbox,
        BCardGroup,
        BCardText,


    },


    data() {
        return {
            chartStates: [
                { name: 'chart1', visible: true },
                { name: 'chart2', visible: true },
                { name: 'chart3', visible: true },
                { name: 'chart4', visible: true },
                { name: 'chart5', visible: true },
                { name: 'chart6', visible: true },
                { name: 'chart7', visible: true },
                { name: 'chart8', visible: true },
                { name: 'chart9', visible: true },
            ],
            checkedstatus: false,
            nowtemp: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            x: [10, 10, 10, 10, 10, 10, 10, 10, 10, 10],
            x_pred: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            p_pred: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            z: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            p: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            q: [0.01, 0.01, 0.01, 0.01, 0.01, 0.01, 0.01, 0.01, 0.01, 0.01],
            r: [0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1],
            k: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            x_update: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            p_update: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],

            switch6: true,
            switch9: true,
            newdata: [],
            // 预测温度
            predictdata1: [0, 0, 0, 0, 0, 0, 0],
            predictdata2: [0, 0, 0, 0, 0, 0, 0],
            predictdata3: [0, 0, 0, 0, 0, 0, 0],
            predictdata4: [0, 0, 0, 0, 0, 0, 0],
            predictdata5: [0, 0, 0, 0, 0, 0, 0],
            predictdata6: [0, 0, 0, 0, 0, 0, 0],
            predictdata7: [0, 0, 0, 0, 0, 0, 0],
            predictdata8: [0, 0, 0, 0, 0, 0, 0],
            predictdata9: [0, 0, 0, 0, 0, 0, 0],

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

            legendData: ['卡尔曼预测'],

            // 定义一个共用的 series 数据
            // seriesData: [
            //     {
            //         name: '卡尔曼预测',
            //         type: 'line',
            //         data: []
            //     }
            // ],
            // legendSelected: { '卡尔曼预测': true },

            chartData1: {
                title: {
                    text: '温度：'
                },
                legend: {
                    data: ['原始数据', '卡尔曼预测'],
                    show: true,
                },
                //悬停数字
                tooltip: {
                    trigger: 'axis',//显示横坐标值
                    axisPointer: {
                        type: 'cross',
                        label: {
                            backgroundColor: '#6a7985'
                        }
                    }
                },
                xAxis: {
                    type: 'category',
                    boundaryGap: false,
                    data: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],

                    inverse: true,// 设置反向属性
                    axisLabel: {
                        formatter: function (value, index) {
                            const date = new Date(value);
                            //显示几月几号： (date.getMonth() + 1),date.getDate(),

                            // 显示时分秒
                            const texts = [
                                date.getHours().toString().padStart(2, '0'), // 将小时转换成字符串，并填充到 2 位，用字符 '0' 来填充
                                date.getMinutes().toString().padStart(2, '0'), // 将分钟转换成字符串，并填充到 2 位，用字符 '0' 来填充
                                date.getSeconds().toString().padStart(2, '0') // 将秒钟转换成字符串，并填充到 2 位，用字符 '0' 来填充
                            ];
                            //实现时间为xx.xx.xx格式
                            return texts.join(':');

                        }
                    },
                },


                yAxis: {
                    type: 'value'
                },
                series: [
                    {
                        name: '原始数据',
                        icon: 'circle',

                        data: [820, 932, 901, 934, 1290, 1330, 1320, 1340, 1360, 1380],
                        type: 'line',
                        itemStyle: {
                            color: 'rgb(8,46,84)'
                        },
                        areaStyle: {
                            opacity: 0.4,
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                {
                                    offset: 0,
                                    color: 'rgb(255, 235, 205)'
                                },
                                {
                                    offset: 1,
                                    color: 'rgb(128,128,105)'
                                }

                            ])
                        },
                        smooth: true
                    },
                    {
                        name: '卡尔曼预测',
                        icon: 'circle',
                        data: [10, 10, 10, 10, 10, 10, 10],
                        type: 'line',
                        smooth: true,
                    },
                ],

            },
            chartData2: {
                title: {
                    text: '温度：'
                },
                legend: {
                    data: this.legendData
                },
                //悬停数字
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'cross',
                        label: {
                            backgroundColor: '#6a7985'
                        }
                    }
                },
                xAxis: {
                    type: 'category',
                    boundaryGap: false,
                    data: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
                    inverse: true, // 设置反向属性
                    axisLabel: {
                        formatter: function (value, index) {
                            const date = new Date(value);
                            //显示几月几号： (date.getMonth() + 1),date.getDate(),

                            // 显示时分秒
                            const texts = [
                                date.getHours().toString().padStart(2, '0'), // 将小时转换成字符串，并填充到 2 位，用字符 '0' 来填充
                                date.getMinutes().toString().padStart(2, '0'), // 将分钟转换成字符串，并填充到 2 位，用字符 '0' 来填充
                                date.getSeconds().toString().padStart(2, '0') // 将秒钟转换成字符串，并填充到 2 位，用字符 '0' 来填充
                            ];
                            //实现时间为xx.xx.xx格式
                            return texts.join(':');

                        }
                    },
                },
                yAxis: {
                    type: 'value'
                },
                series: [
                    {
                        name: '原始数据',
                        data: [820, 932, 901, 934, 1290, 1330, 1320, 1340, 1360, 1380],
                        type: 'line',
                        itemStyle: {
                            color: 'rgb(39,64,139)'
                        },
                        areaStyle: {
                            opacity: 0.4,
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                {
                                    offset: 0,
                                    color: 'rgb(255, 235, 205)'
                                },
                                {
                                    offset: 1,
                                    color: 'rgb(77, 119, 255)'
                                }

                            ])
                        },
                        smooth: true
                    },
                    {
                        name: '卡尔曼预测',
                        data: [10, 10, 10, 10, 10, 10, 10],
                        type: 'line',
                        smooth: true,
                    }
                ]
            },
            chartData3: {
                title: {
                    text: '温度：'
                },
                legend: {
                    data: this.legendData
                },
                //悬停数字
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'cross',
                        label: {
                            backgroundColor: '#6a7985'
                        }
                    }
                },
                xAxis: {
                    type: 'category',
                    boundaryGap: false,
                    data: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
                    inverse: true, // 设置反向属性
                    axisLabel: {
                        formatter: function (value, index) {
                            const date = new Date(value);
                            //显示几月几号： (date.getMonth() + 1),date.getDate(),

                            // 显示时分秒
                            const texts = [
                                date.getHours().toString().padStart(2, '0'), // 将小时转换成字符串，并填充到 2 位，用字符 '0' 来填充
                                date.getMinutes().toString().padStart(2, '0'), // 将分钟转换成字符串，并填充到 2 位，用字符 '0' 来填充
                                date.getSeconds().toString().padStart(2, '0') // 将秒钟转换成字符串，并填充到 2 位，用字符 '0' 来填充
                            ];
                            //实现时间为xx.xx.xx格式
                            return texts.join(':');

                        }
                    },
                },
                yAxis: {
                    type: 'value'
                },
                series: [
                    {
                        name: '原始数据',
                        data: [820, 932, 901, 934, 1290, 1330, 1320, 1340, 1360, 1380],
                        type: 'line',
                        itemStyle: {
                            color: 'rgb(135,38,87)'
                        },
                        areaStyle: {
                            opacity: 0.4,
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                {
                                    offset: 0,
                                    color: 'rgb(255, 250, 205)'
                                },
                                {
                                    offset: 1,
                                    color: 'rgb(255,20,147)'
                                }

                            ])
                        },
                        smooth: true
                    },
                    {
                        name: '卡尔曼预测',
                        data: [10, 10, 10, 10, 10, 10, 10],
                        type: 'line',
                        smooth: true,
                    }
                ]
            },
            chartData4: {
                title: {
                    text: '温度：'
                },
                legend: {
                    data: this.legendData
                },
                //悬停数字
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'cross',
                        label: {
                            backgroundColor: '#6a7985'
                        }
                    }
                },
                xAxis: {
                    type: 'category',
                    boundaryGap: false,
                    data: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
                    inverse: true, // 设置反向属性
                    axisLabel: {
                        formatter: function (value, index) {
                            const date = new Date(value);
                            //显示几月几号： (date.getMonth() + 1),date.getDate(),

                            // 显示时分秒
                            const texts = [
                                date.getHours().toString().padStart(2, '0'), // 将小时转换成字符串，并填充到 2 位，用字符 '0' 来填充
                                date.getMinutes().toString().padStart(2, '0'), // 将分钟转换成字符串，并填充到 2 位，用字符 '0' 来填充
                                date.getSeconds().toString().padStart(2, '0') // 将秒钟转换成字符串，并填充到 2 位，用字符 '0' 来填充
                            ];
                            //实现时间为xx.xx.xx格式
                            return texts.join(':');

                        }
                    },
                },
                yAxis: {
                    type: 'value'
                },
                series: [
                    {
                        name: '原始数据',
                        data: [820, 932, 901, 934, 1290, 1330, 1320, 1340, 1360, 1380],
                        type: 'line',
                        itemStyle: {
                            color: 'rgb(255,97,3)'
                        },
                        areaStyle: {
                            opacity: 0.4,
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                {
                                    offset: 0,
                                    color: 'rgb(255, 235, 205)'
                                },
                                {
                                    offset: 1,
                                    color: 'rgb(255,140,0)'
                                }

                            ])
                        },
                        smooth: true
                    },
                    {
                        name: '卡尔曼预测',
                        data: [10, 10, 10, 10, 10, 10, 10],
                        type: 'line',
                        smooth: true,
                    }
                ]
            },
            chartData5: {
                title: {
                    text: '温度：'
                },
                legend: {
                    data: this.legendData
                },
                //悬停数字
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'cross',
                        label: {
                            backgroundColor: '#6a7985'
                        }
                    }
                },
                xAxis: {
                    type: 'category',
                    boundaryGap: false,
                    data: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
                    inverse: true, // 设置反向属性
                    axisLabel: {
                        formatter: function (value, index) {
                            const date = new Date(value);
                            //显示几月几号： (date.getMonth() + 1),date.getDate(),

                            // 显示时分秒
                            const texts = [
                                date.getHours().toString().padStart(2, '0'), // 将小时转换成字符串，并填充到 2 位，用字符 '0' 来填充
                                date.getMinutes().toString().padStart(2, '0'), // 将分钟转换成字符串，并填充到 2 位，用字符 '0' 来填充
                                date.getSeconds().toString().padStart(2, '0') // 将秒钟转换成字符串，并填充到 2 位，用字符 '0' 来填充
                            ];
                            //实现时间为xx.xx.xx格式
                            return texts.join(':');

                        }
                    },
                },
                yAxis: {
                    type: 'value'
                },
                series: [
                    {
                        name: '原始数据',
                        data: [820, 932, 901, 934, 1290, 1330, 1320, 1340, 1360, 1380],
                        type: 'line',
                        itemStyle: {
                            color: 'rgb(48, 128, 20 )'
                        },
                        areaStyle: {
                            opacity: 0.4,
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                {
                                    offset: 0,
                                    color: 'rgb(255, 250, 205)'
                                },
                                {
                                    offset: 1,
                                    color: 'rgb(127, 255, 0)'
                                }
                            ])
                        },
                        smooth: true
                    },
                    {
                        name: '卡尔曼预测',
                        data: [10, 10, 10, 10, 10, 10, 10],
                        type: 'line',
                        smooth: true,
                    }
                ]
            },
            chartData6: {
                title: {
                    text: '温度：'
                },
                legend: {
                    data: ['原始数据', '卡尔曼预测'],

                },
                //悬停数字
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'cross',
                        label: {
                            backgroundColor: '#6a7985'
                        }
                    }
                },
                xAxis: {
                    type: 'category',
                    boundaryGap: false,
                    data: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
                    inverse: true, // 设置反向属性
                    axisLabel: {
                        formatter: function (value, index) {
                            const date = new Date(value);
                            //显示几月几号： (date.getMonth() + 1),date.getDate(),

                            // 显示时分秒
                            const texts = [
                                date.getHours().toString().padStart(2, '0'), // 将小时转换成字符串，并填充到 2 位，用字符 '0' 来填充
                                date.getMinutes().toString().padStart(2, '0'), // 将分钟转换成字符串，并填充到 2 位，用字符 '0' 来填充
                                date.getSeconds().toString().padStart(2, '0') // 将秒钟转换成字符串，并填充到 2 位，用字符 '0' 来填充
                            ];
                            //实现时间为xx.xx.xx格式
                            return texts.join(':');

                        }
                    },
                },
                yAxis: {
                    type: 'value'
                },
                series: [
                    {
                        name: '原始数据',
                        data: [820, 932, 901, 934, 1290, 1330, 1320, 1340, 1360, 1380],
                        type: 'line',

                        itemStyle: {
                            color: 'rgb(106,90,205)'
                        },
                        areaStyle: {
                            opacity: 0.4,
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                {
                                    offset: 0,
                                    color: 'rgb(255, 235, 205)'
                                },
                                {
                                    offset: 1,
                                    color: 'rgb(116, 21, 219)'
                                }

                            ])
                        },
                        smooth: true
                    },
                    {
                        name: '卡尔曼预测',
                        data: [10, 10, 10, 10, 10, 10, 10],
                        type: 'line',
                        smooth: true,
                    }
                ]
            },
            chartData7: {
                title: {
                    text: '温度：'
                },
                legend: {
                    data: this.legendData
                },
                //悬停数字
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'cross',
                        label: {
                            backgroundColor: '#6a7985'
                        }
                    }
                },
                xAxis: {
                    type: 'category',
                    boundaryGap: false,
                    data: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
                    inverse: true, // 设置反向属性
                    axisLabel: {
                        formatter: function (value, index) {
                            const date = new Date(value);
                            //显示几月几号： (date.getMonth() + 1),date.getDate(),

                            // 显示时分秒
                            const texts = [
                                date.getHours().toString().padStart(2, '0'), // 将小时转换成字符串，并填充到 2 位，用字符 '0' 来填充
                                date.getMinutes().toString().padStart(2, '0'), // 将分钟转换成字符串，并填充到 2 位，用字符 '0' 来填充
                                date.getSeconds().toString().padStart(2, '0') // 将秒钟转换成字符串，并填充到 2 位，用字符 '0' 来填充
                            ];
                            //实现时间为xx.xx.xx格式
                            return texts.join(':');

                        }
                    },
                },
                yAxis: {
                    type: 'value'
                },
                series: [
                    {
                        name: '原始数据',
                        data: [820, 932, 901, 934, 1290, 1330, 1320, 1340, 1360, 1380],
                        type: 'line',
                        itemStyle: {
                            color: 'rgb(205,133,0)'
                        },
                        areaStyle: {
                            opacity: 0.4,
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                {
                                    offset: 0,
                                    color: 'rgb(240, 230, 140)'
                                },
                                {
                                    offset: 1,
                                    color: 'rgb(255, 255, 0)'
                                }

                            ])
                        },
                        smooth: true
                    },
                    {
                        name: '卡尔曼预测',
                        data: [10, 10, 10, 10, 10, 10, 10],
                        type: 'line',
                        smooth: true,
                    }
                ]
            },


            chartData8: {
                title: {
                    text: '温度：'
                },
                legend: {
                    data: this.legendData
                },
                //悬停数字
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'cross',
                        label: {
                            backgroundColor: '#6a7985'
                        }
                    }
                },
                xAxis: {
                    type: 'category',
                    boundaryGap: false,
                    data: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
                    inverse: true, // 设置反向属性
                    axisLabel: {
                        formatter: function (value, index) {
                            const date = new Date(value);
                            //显示几月几号： (date.getMonth() + 1),date.getDate(),

                            // 显示时分秒
                            const texts = [
                                date.getHours().toString().padStart(2, '0'), // 将小时转换成字符串，并填充到 2 位，用字符 '0' 来填充
                                date.getMinutes().toString().padStart(2, '0'), // 将分钟转换成字符串，并填充到 2 位，用字符 '0' 来填充
                                date.getSeconds().toString().padStart(2, '0') // 将秒钟转换成字符串，并填充到 2 位，用字符 '0' 来填充
                            ];
                            //实现时间为xx.xx.xx格式
                            return texts.join(':');

                        }
                    },
                },
                yAxis: {
                    type: 'value'
                },
                series: [
                    {
                        name: '原始数据',
                        data: [820, 932, 901, 934, 1290, 1330, 1320, 1340, 1360, 1380],
                        type: 'line',
                        itemStyle: {
                            color: 'rgb(178,34,34)'
                        },
                        areaStyle: {
                            opacity: 0.4,
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                {
                                    offset: 0,
                                    color: 'rgb(255, 235, 205)'
                                },
                                {
                                    offset: 1,
                                    color: 'rgb(255,48, 48)'
                                }

                            ])
                        },
                        smooth: true
                    },
                    {
                        name: '卡尔曼预测',
                        data: [10, 10, 10, 10, 10, 10, 10],
                        type: 'line',
                        smooth: true,
                    }
                ]
            },


            chartData9: {
                title: {
                    text: '温度：'
                },
                legend: {
                    data: this.legendData
                },
                //悬停数字
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'cross',
                        label: {
                            backgroundColor: '#6a7985'
                        }
                    }
                },
                xAxis: {
                    type: 'category',
                    boundaryGap: false,
                    data: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
                    inverse: true, // 设置反向属性
                    axisLabel: {
                        formatter: function (value, index) {
                            const date = new Date(value);
                            //显示几月几号： (date.getMonth() + 1),date.getDate(),

                            // 显示时分秒
                            const texts = [
                                date.getHours().toString().padStart(2, '0'), // 将小时转换成字符串，并填充到 2 位，用字符 '0' 来填充
                                date.getMinutes().toString().padStart(2, '0'), // 将分钟转换成字符串，并填充到 2 位，用字符 '0' 来填充
                                date.getSeconds().toString().padStart(2, '0') // 将秒钟转换成字符串，并填充到 2 位，用字符 '0' 来填充
                            ];
                            //实现时间为xx.xx.xx格式
                            return texts.join(':');

                        }
                    },
                },
                yAxis: {
                    type: 'value'
                },
                series: [
                    {
                        name: '原始数据',
                        data: [820, 932, 901, 934, 1290, 1330, 1320, 1340, 1360, 1380],
                        type: 'line',
                        itemStyle: {
                            color: 'rgb(95, 158, 160)'
                        },
                        areaStyle: {
                            opacity: 0.4,
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                {
                                    offset: 0,
                                    color: 'rgb(255,246,143)'
                                },
                                {
                                    offset: 1,
                                    color: 'rgb(0, 128, 128)'
                                }

                            ])
                        },
                        smooth: true
                    },
                    {
                        name: '卡尔曼预测',
                        data: [10, 10, 10, 10, 10, 10, 10],
                        type: 'line',
                        smooth: true,
                    }
                ]
            },


        }
    },


    mounted() {

        const chart1 = echarts.init(this.$refs.chart1);
        const chart2 = echarts.init(this.$refs.chart2);
        const chart3 = echarts.init(this.$refs.chart3);
        const chart4 = echarts.init(this.$refs.chart4);
        const chart5 = echarts.init(this.$refs.chart5);
        const chart6 = echarts.init(this.$refs.chart6);
        const chart7 = echarts.init(this.$refs.chart7);
        const chart8 = echarts.init(this.$refs.chart8);
        const chart9 = echarts.init(this.$refs.chart9);


        chart1.setOption(this.chartData1);
        chart2.setOption(this.chartData2);
        chart3.setOption(this.chartData3);
        chart4.setOption(this.chartData4);
        chart5.setOption(this.chartData5);
        chart6.setOption(this.chartData6);
        chart7.setOption(this.chartData7);
        chart8.setOption(this.chartData8);
        chart9.setOption(this.chartData9);


        this.chartStates.forEach(state => {
            const chart = echarts.init(document.getElementById(state.name));
            chart.setOption({
                // 配置项
            });
            // 存储图表实例
            state.chart = chart;
        });

        setInterval(() => {
            // this.newdata = this.generateData();

            // 数组predictdata1左移
            if (this.checkedstatus === true) {
                //
                this.predictdata1.shift();
                this.predictdata1[6] = this.kalmanFilter();
                this.chartData1.series[1].data = this.predictdata1;
                this.chartData1.legend.data = ['原始数据', '卡尔曼预测']

            } else {
                this.chartData1.legend.data = []
                this.chartData1.series[1].hidden = true;

            }
            // 获取最新的数据
            // this.generateData();

            const now = new Date();
            // 获取3s前的时间
            const before3s = new Date(now.getTime() - 3000);
            const before6s = new Date(now.getTime() - 6000);
            const before9s = new Date(now.getTime() - 9000);
            const before12s = new Date(now.getTime() - 12000);
            const before15s = new Date(now.getTime() - 15000);
            const before18s = new Date(now.getTime() - 18000);
            const before21s = new Date(now.getTime() - 21000);
            const before24s = new Date(now.getTime() - 24000);
            const before27s = new Date(now.getTime() - 27000);
            // const before30s = new Date(now.getTime() - 30000);

            this.timeserial = [now, before3s, before6s, before9s, before12s, before15s, before18s, before21s, before24s, before27s];
            // const hour = now.getHours();

            this.newdata = this.generateData();

            // 调用接口获取测温数据并更新 temperatureData 变量

            this.chartData1.xAxis.data = this.timeserial;
            this.chartData2.xAxis.data = this.timeserial;
            this.chartData3.xAxis.data = this.timeserial;
            this.chartData4.xAxis.data = this.timeserial;
            this.chartData5.xAxis.data = this.timeserial;
            this.chartData6.xAxis.data = this.timeserial;
            this.chartData7.xAxis.data = this.timeserial;
            this.chartData8.xAxis.data = this.timeserial;
            this.chartData9.xAxis.data = this.timeserial;


            this.chartData1.series[0].data = this.temperature1;
            // 将时间序列 timeserial 给chartData1的xAxis

            this.chartData2.series[0].data = this.temperature2;

            this.chartData3.series[0].data = this.temperature3;
            this.chartData4.series[0].data = this.temperature4;
            this.chartData5.series[0].data = this.temperature5;
            this.chartData6.series[0].data = this.temperature6;
            this.chartData7.series[0].data = this.temperature7;
            this.chartData8.series[0].data = this.temperature8;
            this.chartData9.series[0].data = this.temperature9;

            chart1.setOption(this.chartData1);
            chart2.setOption(this.chartData2);
            chart3.setOption(this.chartData3);
            chart4.setOption(this.chartData4);
            chart5.setOption(this.chartData5);
            chart6.setOption(this.chartData6);
            chart7.setOption(this.chartData7);
            chart8.setOption(this.chartData8);
            chart9.setOption(this.chartData9);


            // 更新温度数据

        }, 3000);
    },

    watch: {
        temperatureData(newVal) {
            if (newVal) {
                // 更新 Echarts 图表数据
                this.chartData6.series[0].data = newVal
            }
        },
        chartStates: {
            deep: true,
            handler(states) {
                states.forEach(state => {
                    if (state.chart) {
                        if (state.visible) {
                            state.chart.show();
                        } else {
                            state.chart.hide();
                        }
                    }
                });
            }
        }

    },
    methods: {
        kalmanFilter() {

            let m;
            this.nowtemp[0] = this.temperature1[0];
            // this.nowtemp[0] = 100;
            this.nowtemp[1] = this.temperature2[0];
            this.nowtemp[2] = this.temperature3[0];
            this.nowtemp[3] = this.temperature4[0];
            this.nowtemp[4] = this.temperature5[0];
            this.nowtemp[5] = this.temperature6[0];
            this.nowtemp[6] = this.temperature7[0];
            this.nowtemp[7] = this.temperature8[0];
            this.nowtemp[8] = this.temperature9[0];


            for (m = 0; m <= 8; m++) {
                this.x_pred[m] = this.x[m]

                this.p_pred[m] = this.p[m] + this.q[m]


                // 更新状态
                if (this.nowtemp[m] != null) {
                    this.z[m] = this.nowtemp[m]
                    this.k[m] = this.p_pred[m] / (this.p_pred[m] + this.r[m])

                    if (this.x[m] != null) {
                        this.x_update[m] = this.x_pred[m] + this.k[m] * (this.z[m] - this.x_pred[m])

                        this.p_update[m] = (1 - this.k[m]) * this.p_pred[m]
                        this.x[m] = this.x_update[m]
                        this.p[m] = this.p_update[m]
                        return this.x_update[m]
                    } else {
                        console.log("x[m] is NaN", m)
                    }
                } else {
                    console.log("nowtemp is NaN", m)
                }
            }
// 判断所有温度是否达到 100°
            if (this.nowtemp.every(temp => temp >= 100)) {
                alert('所有温度已达到 100°，请立即停止操作！');
            }
        },

        generateData() {
            axios.get('http://localhost:10866/getdbtemperature').then((response) => {
                this.temperature1 = response.data.map(item => item.data1);
                this.temperature2 = response.data.map(item => item.data2);
                this.temperature3 = response.data.map(item => item.data3);
                this.temperature4 = response.data.map(item => item.data4);
                this.temperature5 = response.data.map(item => item.data5);
                this.temperature6 = response.data.map(item => item.data6);
                this.temperature7 = response.data.map(item => item.data7);
                this.temperature8 = response.data.map(item => item.data8);
                this.temperature9 = response.data.map(item => item.data9);

            }).catch((error) => {
                console.log(error);
            });
            if (this.temperature1.length === 0) {
                return;
            }
            return this.temperature1, this.temperature2, this.temperature3, this.temperature4, this.temperature5, this.temperature6, this.temperature7, this.temperature8, this.temperature9;
        }

    },

}

</script>
