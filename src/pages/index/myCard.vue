<template>
  <view>

    <Head title="我的名片夹" />
    <view class="content">
      <!-- tip提示 -->
      <view class="content_1">
        <view class="content_1_1">每个用户仅可做3张名片，名片不可修改只能删除或者重做</view>
        <image class="content_1_2" src="http://39.106.208.234/pic/img_/closee-mpj.png" />
      </view>
      <!-- 名片为空提示 -->
      <view class="content_2">
        <image class="content_2_1" src="http://39.106.208.234/pic/img_/tuianjia.png" />
        <view class="content_2_2">制作名片</view>
      </view>
    </view>
  </view>
</template>

<script>
import Head from '../../components/Head.vue'
export default {
  components: { Head }
}
</script>

<style lang="scss" scoped>
@import './myCard.scss';
</style>  