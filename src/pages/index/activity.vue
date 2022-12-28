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
      route: "",
    };
  },
  onLoad(op) {
    this.route = `http://activity.channel.bdhuoke.com/${op.id}?userId=${op.userId}`;
  },
};
</script>

<style lang="scss" scoped>
@import "./activity.scss";
</style>