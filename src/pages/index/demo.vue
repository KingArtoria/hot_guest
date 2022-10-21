<template>
  <view>
    <u-skeleton rows="10" :loading="loading" :title="false">
      <u--text>loading为false时，将会展示此处插槽内容</u--text>
    </u-skeleton>
  </view>
</template>

<script>
export default {
  data() {
    return {
      loading: true,
      title: '',
      time: '',
    };
  },
  onLoad() {
    setTimeout(() => (this.loading = false), 3000);
  },
};
</script>

<style></style>
