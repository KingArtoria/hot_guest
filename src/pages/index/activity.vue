<template>
  <view>
    <iframe :src="route" frameborder="0" class="iframe" />
  </view>
</template>

<script>
export default {
  data() {
    return {
      // 路由
      route: ''
    }
  },
  onLoad(op) {
    this.route = `http://192.168.55.52:8081/${op.id}`
  },
};
</script>

<style lang="scss" scoped>
@import "./activity.scss";
</style>