<template>
  <div class="hello">
    <dxUpload
      @onChange="change"
      ref="upload"
      @chooseFile="onChooseFile"
    ></dxUpload>
    <picActionSheet
      @change="itemChange"
      :show="showPhotoDialog"
      @fileChangeSuccess="onFileChangeSuccess"
    ></picActionSheet>
  </div>
</template>

<script>
import dxupload from "../dxupload/dxUpload.vue";
import { dataURLtoFile } from "../../utils/utils";
import picActionSheet from "../actionsheet/picActionSheet.vue";
export default {
  name: "HelloWorld",
  components: {
    [dxupload.name]: dxupload,
    [picActionSheet.name]: picActionSheet
  },
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      showPhotoDialog: { visable: false }
    };
  },
  methods: {
    itemChange() {
      this.$refs.upload.uploadFile();
    },
    onChooseFile() {
      //https://blog.csdn.net/github_35549695/article/details/82770044
      this.showPhotoDialog.visable = true;
    },
    change() {
      console.log("change");
    },
    onFileChangeSuccess(item) {
      //转化文件格式 将base64转File
      let e = {
        target: {
          files: [dataURLtoFile(item, new Date().getTime() + ".jpeg")]
        }
      };
      this.$refs.upload.fileChangeHandler(e);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
