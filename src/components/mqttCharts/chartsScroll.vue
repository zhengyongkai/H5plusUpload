<!--  -->
<template>
  <div>
    <div id="line" style="width:800px;height:500px;margin-left:200px;"></div>
  </div>
</template>
<script>
import initMqtt from "../../utils/initMqtt";
export default {
  data() {
    return {
      data: [],
      datas: [],
      datass: [],
      myChart: {}
    };
  },
  props: [],
  components: {},
  created() {},
  mounted() {
    this.$nextTick(() => {
      this.drawChart();
      // console.log( this.$moment(this.date).format("hh:mm:ss"))4
      var option = this.myChart.getOption();
      let j = parseInt(this.$moment().daysInMonth());
      for (let i = 1; i <= j; i++) {
        this.data.push(i + "日");
        this.datas.push(Math.floor(Math.random() * 10 + 1));
        this.datass.push(Math.floor(Math.random() * 10 + 1));
      }
      option.xAxis[0].data = this.data;
      option.series[0].data = this.datas;
      option.series[1].data = this.datass;
      this.myChart.setOption(option);
    });
  },
  destroyed() {
    clearInterval(this.timer);
    this.timer = null;
  },
  methods: {
    onMessageArrived(a, b) {
      console.log("收到的数据", b);
    },
    onConnectionLost() {
      console.log("链接丢失");
    },
    drawChart() {
      this.myChart = this.$echarts.init(document.getElementById("line"));
      // 绘制图表
      this.myChart.setOption({
        title: {
          text: "供电量"
        },
        tooltip: {
          trigger: "axis"
        },
        legend: {
          data: ["供电量", "用量"]
        },
        dataZoom: [
          {
            type: "slider",
            show: true,
            start: 0,
            end: 100 //初始化滚动条
          }
        ],
        grid: {
          containLabel: true
        },
        toolbox: {
          feature: {
            saveAsImage: {}
          }
        },
        xAxis: {
          type: "category",
          data: []
        },
        yAxis: [
          {
            name: "供电量",
            type: "value",
            max: 10
          },
          {
            name: "用量",
            max: 10,
            type: "value"
          }
        ],
        series: [
          {
            name: "供电量",
            type: "line",
            lineStyle: {
              width: 1
            },
            data: []
          },
          {
            name: "用量",
            type: "line",
            yAxisIndex: 1, //右轴
            lineStyle: {
              width: 1
            },
            data: []
          }
        ]
      });
    }
  }
};
</script>
<style lang="scss" scoped></style>
