<template>
  <!--虚实结合-->
  <div class="right">
    <el-row :gutter="20" >
      <el-col :md="11">
        <div class="sj_card">
          <div class="card_body">
            <!-- T模型 -->
            <div class="data_box">
              <!-- <span
                class="title"
              >T模型 {{AskModelList.baseAskModel?AskModelList.baseAskModel.tmodel:''}}</span> -->
            </div>
            <!-- 学生ASK模型 -->
            <div class="data_box">
              <!-- <div class="title">学生ASK模型</div> -->
              <div id="personal_leida" style="width: 100%;height: 385px;"></div>
            </div>
          </div>
        </div>
      </el-col>
      <el-col :md="13">
        <div class="sj_card">
          <!-- <div class="card_header">学生成长模型</div> -->
          <div class="data_box">
            <div
              id="personal_line"
            
            ></div>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "panelOne",
  data() {
    return {
      dataObj: {},
      dialogVisible: false,
      currentPage: 1, //默认第一页
      pageShow: true, //分页显示与否
      limit: 5,
      total: 1,
      pagesize: 0,
      statistics: {},
      options: [
        {
          value: 1,
          label: "今天"
        },
        {
          value: 2,
          label: "过去七天"
        },
        {
          value: 3,
          label: "更早"
        }
      ],
      optionsIndicator: [],
      optionsTrain: [],
      selectData: {
        timeType: "",
        demonstrator: "",
        item: ""
      },
      optionsGrade: [],
      optionsClass: [],
      selectDataTh: {
        timeType: "",
        year: "",
        classId: ""
      },
      tableData: [],
      reportData: {},
      cellStyle: { border: "none" },
      tableDataTh: [],
      listTrain: [],
      listBook: [],
      studyList: [],
      myList: [],
      AskModelList: {}
    };
  },
  computed: {
  },
  mounted() {
    // this.getReportByStudent(this.limit, this.currentPage, this.info.id);
    // this.getMyCount(this.info.id);
    // this.getAskModel(this.info.id);
    this.DrawPie();
    this.DrawLine();
  },
  methods: {
    getReportByStudent(limit, page, ID) {
      this.$ajax
        .post(this.$api.pageListReportByStudent, {
          limit: limit,
          page: page,
          userId: ID
        })
        .then(res => {
          this.studyList = res.data;
          this.total = res.count;
          this.pagesize = this.total / this.limit;
          console.log("total" + this.total);
        });
    },
    getMyCount(userId) {
      this.$ajax.get(this.$api.getMyCount + "?userId=" + userId).then(res => {
        this.myList = res.data;
      });
    },
    getAskModel(userId) {
      this.$ajax.get(this.$api.getAskModel + "?userId=" + userId).then(res => {
        this.AskModelList = res.data;
        console.log("________", res.data);
      });
    },
    /**
     * 分页
     */
    handleCurrentChange(val) {
      this.currentPage = val;
      this.getReportByStudent(this.limit, val);
    },
    //初始化数据
    DrawPie() {
      // 基于准备好的dom，初始化echarts实例
      var myChart = this.$echarts.init(
        document.getElementById("personal_leida")
      );
      // 绘制图表
      myChart.setOption({
        title: {
          text: "学生ASK模型",
          top: "10%"
          //left: "1%"
        },
        tooltip: {},
        legend: {
          top: "70%",
          // 图例距离顶部边距
          // left: "3%",
          // 图例距离左侧边距
          itemWidth: 10,
          // 图例标记的图形宽度。[ default: 25 ]
          itemHeight: 10,
          // 图例标记的图形高度。[ default: 14 ]
          itemGap: 10,
          // 图例每项之间的间隔。[ default: 10 ]横向布局时为水平间隔，纵向布局时为纵向间隔。
          orient: "",
          // 图例列表的布局朝向,'horizontal'为横向,''为纵向.
          data: ["A（Attitude）", "S（Skill）", "K（knowledge）"]
        },
        radar: {
          // shape: 'circle',
          // 圆中心坐标，数组的第一项是横坐标，第二项是纵坐标。[ default: ['50%', '50%'] ]
          center: ["50%", "50%"],
          radius: 100,
          // 圆的半径，数组的第一项是内半径，第二项是外半径。
          name: {
            textStyle: {
              color: "#fff",
              backgroundColor: "#999",
              borderRadius: 3,
              padding: [3, 5]
            }
          },
          indicator: [
            { name: "A（Attitude）", max: 6500 },
            { name: "S（Skill）", max: 16000 },
            { name: "K（knowledge）", max: 30000 }
          ]
        },
        series: [
          {
            name: "预算 vs 开销（Budget vs spending）",
            type: "radar",
            // areaStyle: {normal: {}},
            data: [
              {
                value: [4300, 10000, 28000, 35000, 50000, 19000],
                name: "A（Attitude）"
              },
              {
                value: [5000, 14000, 28000, 31000, 42000, 21000],
                name: "S（Skill）"
              },
              {
                value: [4000, 13000, 25000, 28000, 36000, 29000],
                name: "K（knowledge）"
              }
            ]
          }
        ]
      });
    },
    //初始化数据
    DrawLine() {
      // 基于准备好的dom，初始化echarts实例
      var myChart = this.$echarts.init(
        document.getElementById("personal_line")
      );
      // 绘制图表
      myChart.setOption({
        title: {
          text: "学生成长模型"
        },
        tooltip: {
          trigger: "axis"
        },
        legend: {
          data: ["邮件营销", "联盟广告", "视频广告"],
          x: "200px"
        },
        grid: {
          left: "3%",
          containLabel: true
        },
        toolbox: {
          feature: {
            saveAsImage: {}
          }
        },
        xAxis: {
          type: "category",
          data: ["周一", "周二", "周三", "周四", "周五"]
        },
        yAxis: {
          type: "value"
        },
        series: [
          {
            name: "邮件营销",
            type: "line",
            stack: "总量",
            data: [120, 132, 101, 134, 90, 230, 210]
          },
          {
            name: "联盟广告",
            type: "line",
            stack: "总量",
            data: [220, 182, 191, 234, 290, 330, 310]
          },
          {
            name: "视频广告",
            type: "line",
            stack: "总量",
            data: [150, 232, 201, 154, 190, 330, 410]
          }
        ]
      });
    },
    //跳转页面
    jumprecord() {
      this.$router.push("record");
    },
    jumpreport() {
      this.$router.push("report");
    }
  }
};
</script>

<style scoped lang="scss">
.right {
  background-color: #fff;
  .personal_box {
   // @extend .flex;
    flex: 1;
    margin-left: 20px;
    margin-top: 0px;
    height: 120px;
    padding: 0 30px;
    // background-image: url(../../../assets/bg_personal.png);
    background-repeat: no-repeat;
    background-position: center;
    background-size: 100%;

    img {
      display: block;
      width: 80px;
      height: 80px;
      margin-right: 30px;
    }

    .info {
      p {
        color: rgba(255, 255, 255, 0.8);

        &.name {
          color: #ffffff;
          font-weight: bold;
          font-size: 30px;
          margin-bottom: 10px;
        }
      }
    }
  }
  // .personal_echarts {
  //   flex-wrap: wrap;
  //   display: flex;
  //   margin-top: 20px;
  //   margin-left: 20px;
  //   #personal_line {
  //     width: 59%;
  //     padding: 20px 30px;
  //     background-color: #ffffff;
  //     margin-left: 20px;
  //     flex: 1;
  //     height: 333px;
  //     border: 1px solid #d1d3d6;
  //     box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.08);
  //   }
  //   #personal_leida {
  //     background-color: #ffffff;
  //     width: 39%;
  //     border: 1px solid #d1d3d6;
  //     box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.08);
  //   }
  // }
  .study_content {
    display: flex;
    .study_title {
      position: absolute;
      width: 200px;
      height: 25px;
      margin-left: 35px;
      margin-top: 50px;
      color: #000;
      font-size: 20px;
      font-family: PingFang SC;
      font-weight: bold;
    }
    .search {
      position: absolute;
      width: 600px;
      height: 25px;
      margin-left: 35px;
      margin-top: 90px;
      .el-select {
        margin-right: 40px;
      }
    }
    .study_view {
      position: absolute;
      width: 200px;
      height: 25px;
      margin-left: 1035px;
      margin-top: 60px;
      color: #949aa3;
      font-size: 10px;
      font-family: PingFang SC;
      font-weight: bold;
    }
  }
  .personal_study4 {
    display: flex;
    flex-wrap: wrap;
    margin: 20px 1px 20px 20px;
    padding: 125px 25px 25px 10px;
    border: 1px solid #d1d3d6;
    box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.08);
    opacity: 1;
    background-color: #fff;
    // .sj_page {
    //   padding-top: 20px;
    //   width: 100%;
    // }
    .study_info {
      width: 19%;
      border: 1px solid #e5e7ea;
      background-color: #ffffff;
      box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.15);
      opacity: 1;
      border-radius: 8px;
      position: relative;
      margin-bottom: 15px;
      &:not(:nth-child(5n)) {
        margin-right: calc(5% / 4);
      }
      .sj_info_img {
        display: block;
        width: 100%;
        height: auto;
        margin: 0 auto;
      }
      .sj_tag {
        width: 80px;
        height: 24px;
        background: #007aff;
        opacity: 1;
        border-radius: 4px 0px 4px 0px;
        position: absolute;
        top: 0px;
        font-size: 13px;
        line-height: 24px;
        color: #ffffff;
        text-align: center;
      }
      .sj_info_text {
        padding: 10px;
        .study_discipline {
          font-size: 13px;
          font-weight: bold;
          font-family: PingFang SC;
          line-height: 20px;
          color: #000;
        }
        .study_teacher {
          font-size: 10px;
          font-family: Source Han Sans CN;
          font-weight: 500;
          line-height: 20px;
          color: #636466;
        }
      }
    }
  }
  .personal_study {
    display: flex;
    flex-wrap: wrap;
    margin: 20px 1px 20px 20px;
    padding: 75px 25px 25px 10px;
    border: 1px solid #d1d3d6;
    box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.08);
    opacity: 1;
    background-color: #fff;
    .study_info {
      width: 19%;
      border: 1px solid #e5e7ea;
      background-color: #ffffff;
      box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.15);
      opacity: 1;
      border-radius: 8px;
      position: relative;
      margin-bottom: 15px;
      &:not(:nth-child(5n)) {
        margin-right: calc(5% / 4);
      }
      .sj_info_img {
        display: block;
        width: 100%;
        height: auto;
        margin: 0 auto;
      }
      .sj_tag {
        width: 80px;
        height: 24px;
        background: #007aff;
        opacity: 1;
        border-radius: 4px 0px 4px 0px;
        position: absolute;
        top: 0px;
        font-size: 13px;
        line-height: 24px;
        color: #ffffff;
        text-align: center;
      }
      .sj_info_text {
        padding: 10px;
        .study_discipline {
          font-size: 13px;
          font-weight: bold;
          font-family: PingFang SC;
          line-height: 20px;
          color: #000;
        }
        .study_teacher {
          font-size: 10px;
          font-family: Source Han Sans CN;
          font-weight: 500;
          line-height: 20px;
          color: #636466;
        }
      }
    }
  }
}
.personal_info {
 // @extend .flex-item;
 // @extend .flex;
}

.personal_data {
 // @extend .flex;
  // //@include flexAlignV(stretch);
  padding: 18px 0;

  .personal_item {
   // @extend .flex-item;
    padding: 0 30px;
    position: relative;
    border-left: 1px solid rgba(255, 255, 255, 0.3);

    &:first-child {
      border-left-color: transparent;
    }

    p {
      color: rgba(255, 255, 255, 0.8);
      text-align: center;
      white-space: nowrap;

      &.number {
        font-weight: bold;
        color: #ffffff;
        font-size: 24px;
        margin-bottom: 6px;
      }
    }
  }
}
.data_box {
  padding: 24px 0;
  & + .data_box {
    padding-top: 0;
  }
  // .personal_echarts {
  //   flex-wrap: wrap;
  //   display: flex;
  //   margin-top: 20px;
  //   margin-left: 20px;
    #personal_line {
      width: 100%;
      padding: 20px 30px;
      background-color: #ffffff;
      margin-left: 20px;
      height: 333px;
      border: 1px solid #d1d3d6;
      box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.08);
    }
    #personal_leida {
      background-color: #ffffff;
      width: 39%;
      border: 1px solid #d1d3d6;
      box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.08);
    }
  //}
  .title {
   // @extend .flex;
    // //@include flexAlign(space-between);
    color: #1c1d1e;
    font-weight: 500;
    //padding-bottom: 10px;
    font-size: 22px;
    font-family: PingFang SC;
  }
  .jindu {
    color: #1c1d1e;
    font-weight: 500;
    margin-left: 390px;
    font-size: 15px;
    font-family: PingFang SC;
  }
}
.processing_box {
 // @extend .flex-item;
 // @extend .flex;
  //@include borderRadius(4px);
  .processing {
    height: 24px;
    background: #5dafff;
    border-right: 3px solid #ffffff;
  }
  .processing_cell {
   // @extend .flex-item;
    height: 24px;
    background: #f2f4f7;
  }
}
.sj_card {
  padding: 0 24px;
  margin-left: 20px;
  background-color: #ffffff;
  margin-top: 20px;
  border: 0px solid rgba(209, 211, 214, 1);
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.08);
  //@include borderRadius(4px);
  .card_header {
    padding: 24px 0;
    //font-size: $fontsize_md;
    font-weight: bold;
    .title {
     // font-size: $fontsize_md;
      position: relative;
      text-indent: 16px;
      &:before {
        content: "";
        width: 4px;
        background: rgba(20, 119, 237, 1);
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
      }
    }
  }

  .card_body {
    .card_body_title {
      margin-bottom: 16px;
    }
    .card_body_item {
     // @extend .flex;
      padding: 24px;
      overflow: hidden;
      cursor: pointer;
      box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.15);
      -webkit-transition: all 0.3s ease 0s;
      transition: all 0.3s ease 0s;
      background: #ffffff;
      margin-bottom: 20px;
      //@include borderRadius(4px);

      &:hover {
        box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.35);
      }

      .item_img {
        display: block;
        width: 48px;
        height: 48px;
        margin-right: 24px;
      }

      .item_content {
       // @extend .flex-item;
        width: 0;

        .title {
          color: #000000;
          font-size: 18px;
          width: 100%;
          white-space: nowrap;
          text-overflow: ellipsis;
          overflow: hidden;
        }

        .subtitle {
          margin-top: 10px;
          color: #636466;
        }
      }
    }
  }
}
</style>
