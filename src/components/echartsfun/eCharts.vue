<!--  -->
<template>
  <div>
    <div style="height:350px" id="mixBarEcharts"></div>
  </div>
</template>
<script>
export default {
  name: "mixBarEcharts",
  data() {
    return {
      option: {
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "cross",
            crossStyle: {
              color: "#999"
            }
          }
        },
        dataZoom: [
          {
            type: "slider",
            show: true,
            height: 12,
            start: 0,
            end: 100 //初始化滚动条
          }
        ],
        toolbox: {
          feature: { 
            dataView: { show: true, readOnly: false }, //数据视图
            magicType: { show: true, type: ["line", "bar"] }, //切换折线图
            restore: { show: true }, //还原
            saveAsImage: { show: true } //下载图片
          }
        },
        legend: {
          data: [{ name: "蒸发量" }, { name: "平均温度" }],
          textStyle: { //lengend字体样式
            fontSize: 14, //字体大小
            color: "gray" //字体颜色
          }
        },
        grid: { //像左移或者上下移动
          x: 80,
          y: 40
        },
        xAxis: [ //x轴数据
          {
            type: "category",
            data: [
              "1月",
              "2月",
              "3月",
              "4月",
              "5月",
              "6月",
              "7月",
              "8月",
              "9月",
              "10月",
              "11月",
              "12月"
            ],
            axisPointer: {
              type: "shadow"
            },
            axisLabel: {  //x轴下标文字
              show: true, 
              textStyle: { //字体颜色
                color: "gray"
              },
              interval: 0,
              rotate: 30 //斜体
            }
          }
        ],
        yAxis: [
          {
            type: "value",
            name: "水量",
            nameTextStyle: { //y轴标注字体样式 //即水量样式
              color: "gray",
              fontSize: 12
            },
            min: 0,
            max: 250,
            interval: 50,
            splitLine: { show: false }, //去除网格线
            axisLabel: {  //y轴文字
              formatter: "{value} ml",
              show: true,
              textStyle: { //字体样式
                color: "gray",
                fontSize: "14px"
              }
            }
          },
          {
            type: "value",
            name: "温度",
            nameTextStyle: {
              color: "gray",
              fontSize: 12
            },
            min: 0,
            max: 25,
            interval: 5,
            splitLine: { show: false }, //去除网格线
            axisLabel: {
              formatter: "{value} °C",
              textStyle: {
                color: "gray",
                fontSize: "14px"
              }
            }
          }
        ],
        series: [
          {
            name: "蒸发量",
            type: "bar",
            barWidth: 10, //柱图宽度
            itemStyle: { //柱状样式
              normal: {
                color: this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  { offset: 0, color: "  #E4FB00" }, //柱图渐变色
                  { offset: 0.5, color: "#F8DF23" }, 
                  { offset: 1, color: "#FEC635" } 
                ])
              }
            },
            data: [
              2.0,
              4.9,
              7.0,
              23.2,
              25.6,
              76.7,
              135.6,
              162.2,
              32.6,
              20.0,
              6.4,
              3.3
            ]
          },
          {
            name: "平均温度",
            type: "line",
            yAxisIndex: 1,
            itemStyle: {
              normal: {
                color: "#14DBD8",
                lineStyle: {
                  width: 5 //设置线条粗细
                }
              }
            },
            data: [
              2.0,
              2.2,
              3.3,
              4.5,
              6.3,
              10.2,
              20.3,
              23.4,
              23.0,
              16.5,
              12.0,
              6.2
            ]
          }
        ]
      },
      repairEcharts1: {}
    };
  },
  components: {},
  created() {},
  watch: {},
  mounted() {
    this.drawEcharts();
  },
  methods: {
    drawEcharts() {
      var echarts1 = document.getElementById("mixBarEcharts");
      this.repairEcharts1 = this.$echarts.init(echarts1);
      this.repairEcharts1.setOption(this.option);
    }
  }
};
</script>
<style lang="scss" scoped></style>
