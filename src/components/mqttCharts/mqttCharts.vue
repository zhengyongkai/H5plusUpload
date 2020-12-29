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
      datass:[],
      myChart: {}
    };
  },
  props: [],
  components: {},
  created() {},
  mounted() {
    this.$nextTick(() => {
      this.drawChart();
      // console.log( this.$moment(this.date).format("hh:mm:ss"))
      this.initmqtt = new initMqtt();
      this.client = this.initmqtt.connect(
        () => {
          console.log("链接成功,开始订阅主题");
          this.client.subscribe("home/line");
        },
        this.onConnectionLost,
        this.onMessageArrived
      );
      this.timer = setInterval(() => {
        this.data.push(this.$moment(this.date).format("hh:mm:ss"));
        this.datas.push(Math.floor(Math.random()*10+1))
          this.datass.push(Math.floor(Math.random()*10+1))
        if(this.data.length>5){
          this.data.splice(0,1)
           this.datas.splice(0,1)
        }
        var option = this.myChart.getOption();
        option.xAxis[0].data = this.data;
        option.series[0].data = this.datas;
        option.series[1].data =  this.datass;
       // console.log( option.xAxis)
        console.log( option.series[0].data)
        this.myChart.setOption(option);
        this.$forceUpdate()
      }, 3000);
    });
  },
  destroyed() {
    clearInterval(this.timer);
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
            name: "流量",
            type: "line",
            lineStyle: {
              width: 1
            },
            data: []
          },
          {
            name: "降雨量",
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
