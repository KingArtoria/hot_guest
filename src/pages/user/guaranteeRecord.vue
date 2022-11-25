<template>
  <view>
    <Head title="担保记录" />
    <view class="content">
      <!-- 内容 -->
      <view class="content_1">
        <view
          class="content_1_1"
          v-for="(item, index) in guaranteeRecord"
          :key="index"
        >
          <view class="content_1_1_1">{{ item.details }}</view>
          <view class="content_1_1_2">
            <view class="content_1_1_2_1">担保金额：</view>
            <view class="content_1_1_2_2">￥{{ item.price }}</view>
          </view>
          <view class="content_1_1_3">
            <view class="content_1_1_3_1">
              <view class="content_1_1_3_1_1">发起方：</view>
              <view class="content_1_1_3_1_2">{{ item.member_id }}</view>
            </view>
            <view class="content_1_1_3_1">
              <view class="content_1_1_3_1_1">合作方：</view>
              <view class="content_1_1_3_1_2">{{ item.to_id }}</view>
            </view>
          </view>
          <view class="content_1_1_3">
            <view class="content_1_1_3_1">
              <view class="content_1_1_3_1_1">发起时间：</view>
              <view class="content_1_1_3_1_2">{{ item.createtime }}</view>
            </view>
            <view class="content_1_1_3_1">
              <view class="content_1_1_3_1_1">完成时间：</view>
              <view class="content_1_1_3_1_2">{{ item.completetime }}</view>
            </view>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
import Head from "../../components/Head";
import { getGuaranteeRecord } from "../../utils/api";
export default {
  data() {
    return {
      // 担保记录参数
      guaranteeRecordParams: {
        page: 1,
        num: 10,
      },
      // 担保记录
      guaranteeRecord: [],
    };
  },
  methods: {
    // 担保记录
    getGuaranteeRecord() {
      // 担保记录API
      getGuaranteeRecord(this.guaranteeRecordParams).then((res) => {
        // 赋值
        res.data.list.forEach((item) => {
          // 数组追加
          this.guaranteeRecord.push(item);
        });
      });
    },
  },
  onLoad() {
    // 担保记录
    this.getGuaranteeRecord();
  },
  // 滚动到底部
  onReachBottom() {
    // 页数+1
    this.guaranteeRecordParams.page++;
    // 担保记录
    this.getGuaranteeRecord();
  },
  components: { Head },
};
</script>

<style lang="scss" scoped>
@import "./guaranteeRecord.scss";
</style>
