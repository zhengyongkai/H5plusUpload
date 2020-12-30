<template>
  <div>
    <header>
      <NavBar
        title="商品列表"
        left-text="返回"
        left-arrow
        @click-left="goBack"
      />
    </header>
    <div class="page-content">
      <Card
        num="2"
        price="2.00"
        desc="软糯香甜的芋圆料料铺满底部，杯壁挂上香浓厚芋泥"
        title="芋泥波波奶茶"
        tag="新品"
        thumb="./components/img/nc.png"
      >
        <template #tags>
          <Tag plain type="danger">超好喝</Tag>
        </template>
        <template #footer>
          <div class="item-footer">
            <Button round icon="minus" size="mini" />
            <span>5</span>
            <Button round icon="plus" size="mini" />
          </div>
        </template>
      </Card>
      <GoodsAction>
        <GoodsActionIcon icon="cart-o" text="购物车" />
        <GoodsActionButton type="danger" text="立即购买" />
      </GoodsAction>
    </div>
  </div>
</template>
<script>
import {
  NavBar,
  Card,
  Tag,
  Button,
  GoodsAction,
  GoodsActionIcon,
  GoodsActionButton,
} from "vant";
export default {
  name: "BetterGoodList",
  components: {
    NavBar,
    Card,
    Tag,
    Button,
    GoodsAction,
    GoodsActionIcon,
    GoodsActionButton,
  },
  data() {
    return {};
  },
  methods: {
    goBack() {
      this.$router.push({ path: "/goodLIst" });
    },
  },
};
</script>

<style lang="scss" scoped>
.item-footer {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  span {
    padding-left: 5px;
    font-size: 14px;
  }
}
</style>
