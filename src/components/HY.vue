<template>
  <view class="hy">
    <image class="hy_1" :src="`${_url}huiy.webp`" v-if="type == 1" />
    <image class="hy_2" :src="`${_url}chaojhy.webp`" v-if="type == 2" />
    <image class="hy_3" :src="`${_url}qiyehy.webp`" v-if="type == 3" />
  </view>
</template>
<script>
export default {
  props: {
    type: {
      type: Number,
      default: 0,
    },
  },
};
</script>

<style lang="scss" scoped>
.hy {
  .hy_1 {
    width: 35rpx;
    height: 30rpx;
  }
  .hy_2 {
    width: 60rpx;
    height: 21rpx;
  }
  .hy_3 {
    width: 34rpx;
    height: 30rpx;
  }
}
</style>
