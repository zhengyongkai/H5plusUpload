<!-- 商品列表组件 -->
<template>
  <div class="">
    <el-form
      ref="goodsRef"
      :model="newGoods"
      :rules="newGoodsRules"
      label-width="80px"
      v-loading="dialogLoading"
    >
      <el-form-item label="商品图标">
        <el-upload
          class="avatar-uploader"
          action=""
          :show-file-list="false"
        >
          <img
            v-if="newGoods.spu_image"
            :src="newGoods.spu_image"
            class="avatar"
          />
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
      </el-form-item>
      <el-form-item label="商品名称" prop="spu_name">
        <el-input v-model="newGoods.spu_name"></el-input>
      </el-form-item>
      <el-form-item label="商品描述" prop="spu_desc">
        <el-input v-model="newGoods.spu_desc"></el-input>
      </el-form-item>
      <el-form-item label="一级分类" prop="category11">
        <el-select
          v-model.trim="newGoods.category1_id"
          placeholder="请选择一级分类"
        >
          <el-option label='22' value='222'
          ></el-option>
             <el-option label='223' value='2221'
          ></el-option>
             <el-option label='2233' value='2222'
          ></el-option>
        </el-select>
      </el-form-item>

      <el-form-item label="二级分类" prop="category21">
        <el-select v-model="newGoods.category2_id" placeholder="请选择二级分类">
            <el-option label='22' value='222'
          ></el-option>
             <el-option label='223' value='2221'
          ></el-option>
             <el-option label='2233' value='222'
          ></el-option>
        </el-select>
      </el-form-item>
    </el-form>
    <span class="dialog-footer">
      <el-button>取 消</el-button>
      <el-button type="primary" @click="createGoods">确 定</el-button>
    </span>
    <!-- 添加商品对话框 -->
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      goodsList: [],
      //   区域加载
      loading: true,
      // dialog区域加载
      dialogLoading: false,
      //   搜索框选择
      select: "",
      //    搜索框内容
      input: "",
      //    数据总条数
      total: 0,
      //   上一页路径
      previousUrl: null,
      //   下一页路径
      nextUrl: null,
      // 对话框
      dialogVisible: false,
      // 表单
      newGoods: {
        category1_id: "",
        category2_id: "",
        spu_name: "",
        spu_desc: "",
        spu_image: ""
      },
      // 表单验证规则
      newGoodsRules: {
        spu_name: [
          { required: true, message: "请输入商品名称", trigger: "blur" },
          {
            min: 4,
            max: 10,
            message: "商品名称的长度在4-10个字",
            trigger: "blur"
          }
        ],
        spu_desc: [
          { required: true, message: "请输入商品描述", trigger: "blur" },
          {
            min: 10,
            max: 30,
            message: "商品描述的长度在10-30个字",
            trigger: "blur"
          }
        ],
        category11: [
          {
            required: true,
            message: "请选择一级分类",
            trigger: "change"
          }
        ],
        category21: [
          {
            required: true,
            message: "请选择二级分类",
            trigger: "change"
          }
        ]
      },
      // 分类信息
      category: [],
      // 一级分类
      category1: null,
      // 二级分类列表
      category2_list: []
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    createGoods() {
      const that = this;
      // 预校验
      that.$refs.goodsRef.validate(valid => {
        if (valid) {
        }
      });
    }
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {
    this.Init();
  },
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {},
  beforeCreate() {}, //生命周期 - 创建之前
  beforeMount() {}, //生命周期 - 挂载之前
  beforeUpdate() {}, //生命周期 - 更新之前
  updated() {}, //生命周期 - 更新之后
  beforeDestroy() {}, //生命周期 - 销毁之前
  destroyed() {}, //生命周期 - 销毁完成
  activated() {} //如果页面有keep-alive缓存功能，这个函数会触发
};
</script>
<style scoped>
.avatar-uploader .el-upload {
  border: 1px solid #f3f3f3;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}

.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}

.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 128px;
  height: 128px;
  line-height: 128px;
  text-align: center;
}

.avatar {
  width: 128px;
  height: 128px;
  display: block;
}
</style>
