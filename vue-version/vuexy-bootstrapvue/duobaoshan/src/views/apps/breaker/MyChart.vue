<template>
    <div>
        <h2>{{ chartData.title }}</h2>
        <canvas ref="chartCanvas"></canvas>
    </div>
</template>

<script>
import Chart from 'chart.js';

export default {
    myProps: {
        chartData: {
            type: Object,
            required: true,
        },
        showSeries: {
            type: Boolean,
            default: true,
        },
    },
    mounted() {
        this.renderChart();
    },
    methods: {
        renderChart() {
            const ctx = this.$refs.chartCanvas.getContext('2d');
            const chart = new Chart(ctx, {
                type: 'line',
                data: {
                    labels: this.chartData.data.labels,
                    datasets: this.chartData.data.datasets.map((dataset) => {
                        return {
                            ...dataset,
                            hidden: !this.showSeries,
                        };
                    }),
                },
                options: {
                    title: {
                        display: false,
                        text: this.chartData.title,
                    },
                },
            });
        },
    },
    watch: {
        showSeries() {
            this.renderChart();
        },
    },
};
</script>