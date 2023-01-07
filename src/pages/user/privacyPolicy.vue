<template>
  <view>
    <Head title="隐私政策" />
    <iframe src="http://yszc.channel.bdhuoke.com" class="iframe" />
  </view>
</template>

<script>
import Head from "../../components/Head";
export default {
  components: { Head },
};
</script>
<style lang="scss" scoped>
.iframe {
  padding-top: 180rpx;
  width: 100%;
  min-height: 100vh;
}
</style>