<template>
  <view>
    <Head title="道具商城" />
    <view class="content">
      <view class="content_1">
        <Props
          v-for="(item, index) in propsList"
          :key="index"
          :item="item"
          :type="1"
        />
      </view>
    </view>
  </view>
</template>

<script>
import Head from "../../components/Head";
import Props from "../../components/Props";
import { getInnerList } from "../../utils/api";
export default {
  data() {
    return {
      // 道具列表
      propsList: [],
      // sn
      order_sn: "",
    };
  },
  methods: {
    // 道具列表
    getInnerList() {
      // 道具列表API
      getInnerList({ type: "DJK" }).then((res) => {
        console.log(res.data);
        res.data.forEach((item) => {
          item.image = this._propUrl + item.image;
        });
        // 赋值
        this.propsList = res.data;
      });
    },
  },
  onLoad() {
    // 道具列表
    this.getInnerList();
  },
  components: { Head, Props },
};
</script>

<style lang="scss" scoped>
@import "./prop.scss";
</style>
