<template>
  <image class="black" src="http://39.106.208.234/pic/img_/black_ss.png" @click="goBack" />
</template>

<script>
export default {
  methods: {
    goBack() {
      uni.navigateBack();
    },
  },
}
</script>

<style lang="scss" scoped>
.black {
  width: 16rpx;
  height: 32rpx;
}
</style>