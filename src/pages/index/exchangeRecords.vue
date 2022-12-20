<template>
  <view>
    <Head title="兑换记录" />
    <view class="content">
      <Props
        v-for="(item, index) in list"
        :key="index"
        :item="item"
        :type="2"
        :status="2"
      />
    </view>
  </view>
</template>

<script>
import Head from "../../components/Head";
import Props from "../../components/Props";
import { getExchangeRecord } from "../../utils/api";
export default {
  data() {
    return {
      // 待使用
      list: [],
    };
  },
  methods: {
    // 兑换记录
    getExchangeRecord() {
      // 兑换记录API
      getExchangeRecord().then((res) => {
        // 初始化数据
        res.data.forEach((item) => {
          // 初始化道具图片
          item.image = `http://39.106.208.234${item.image}`;
          // 兑换时间保留年月日
          item.create_time = item.create_time.slice(0, 10);
        });
        // 赋值
        this.list = res.data;
      });
    },
  },
  onLoad() {
    // 兑换记录
    this.getExchangeRecord();
  },
  components: { Head, Props },
};
</script>   
<style lang="scss" scoped>
@import "./exchangeRecords.scss";
</style>