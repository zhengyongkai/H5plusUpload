<template>
  <div v-if="isShow">
    <div
      id="rightMenuDom"
      class="right-menu"
      :style="{
        top: top,
        left: left
      }"
    >
      <ul>
        <!--分为2组渲染-->
        <li>
          <span
            v-for="item in list"
            :key="item.id"
            v-show="item.id <= 3"
            @click="item.handler"
            >{{ item.text }}
          </span>
        </li>
        <li>
          <span
            v-for="item in list"
            :key="item.id"
            v-show="item.id > 3"
            @click="item.handler"
            >{{ item.text }}
          </span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    top: {
      type: String,
      default: "0px"
    },
    left: {
      type: String,
      default: "0px"
    },
    list: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  mounted() {
    let that = this;
    document.addEventListener("click", () => {
      // console.log(Vue.prototype.$rightClick().$children);
      // 隐藏右键菜单
      that.close();
    });
  },
  destroyed() {
    document.removeEventListener("click", this.close());
  },
  data() {
    return {
      isShow: false
    };
  },
  methods: {
    show() {
      this.isShow = true;
    },
    close() {
      this.isShow = false;
    }
  }
};
</script>

<style lang="scss" scoped>
// 右键菜单样式
.right-menu {
  position: fixed;
  left: 0;
  top: 0;
  width: 166px;
  height: auto;
  background-color: rgb(242, 242, 242);
  border: solid 1px #c2c1c2;
  box-shadow: 0 10px 10px #c2c1c2;
  border-radius: 5px;

  ul {
    padding: 0;
    margin: 0;
    font-size: 15px;

    li {
      list-style: none;
      box-sizing: border-box;
      padding: 6px 0;
      border-bottom: 1px solid rgb(216, 216, 217);

      &:nth-child(1) {
        padding-top: 2px;
      }

      &:nth-last-child(1) {
        border-bottom: none;
      }

      span {
        display: block;
        height: 20px;
        line-height: 20px;
        padding-left: 16px;

        &:hover {
          background-color: #0070f5;
          cursor: pointer;
          color: #ffffff;
        }
      }
    }
  }
}
</style>
