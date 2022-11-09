<template>
  <view>
    <view class="document" v-for="(item, index) in data" :key="index" @click="document(item)">
      <!-- 标题 -->
      <view class="document_1" :style="`color:${color}`">{{ item.case_name || item.name || item.notice_type || item.case_type || item.honor_level || item.tax_name }}</view>
      <!-- 附件 -->
      <view class="document_2" v-for="(item2, index2) in item.kv" :key="index2">{{ item2.key }}：{{ item2.value }}</view>
    </view>
  </view>
</template>

<script>
export default {
  props: {
    data: {
      type: Array,
      default: () => [],
    },
    color: {
      type: String,
      default: '#333',
    },
  },
  methods: {
    document(item) {
      this.$emit('document', item);
    },
  },
};
</script>

<style lang="scss" scoped>
.document {
  background: #fff;
  padding: 35rpx 21rpx;
  margin-bottom: 10rpx;
  .document_1 {
    font-size: 34rpx;
    font-family: PingFang SC;
    font-weight: 500;
    color: #333333;
    line-height: 50rpx;
  }
  .document_2 {
    font-size: 28rpx;
    font-family: PingFang SC;
    font-weight: 500;
    color: #666666;
    line-height: 64rpx;
  }
}
</style>
