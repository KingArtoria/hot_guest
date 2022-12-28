<template>
  <view class="hy">
    <image class="hy_1" :src="`${_url}huiy.webp`" v-if="type == 'vip'" />
    <image class="hy_2" :src="`${_url}chaojhy.webp`" v-if="type == 'svip'" />
    <image class="hy_3" :src="`${_url}qiyehy.webp`" v-if="type == 'fvip'" />
    <image class="hy_4" :src="`${_url}heikahuizhang.png`" v-if="type == 'bvip'" />
  </view>
</template>
<script>
export default {
  props: {
    type: {
      type: String,
      default: '',
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
    width: 29rpx;
    height: 26rpx;
  }

  .hy_4 {
    width: 43rpx;
    height: 36rpx;
  }
}
</style>
