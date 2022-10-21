<template>
  <view>
    <Head title="个人页" style="background: #f6f6f6" />
    <view class="content">
      <!-- 名片 -->
      <view class="content_1">
        <image class="content_1_1" src="http://admin.bdhuoke.com/upload/20210604/8afcaa631acccc3fa095ddedeafb1a6a.jpg" />
        <view class="content_1_2">
          <view class="content_1_2_1">我是名字</view>
          <view class="content_1_2_2">徐州星跃联动网络科技有限公司</view>
          <view class="content_1_2_2">产品经理</view>
          <view class="content_1_2_3">IT/互联网</view>
        </view>
      </view>
      <!-- 添加好友 -->
      <view class="content_2">
        <view class="content_2_1">
          <image class="content_2_1_1" src="http://39.106.208.234/pic/img_/moble.png" />
          <view class="content_2_1_2">手机号：仅好友可见</view>
        </view>
        <view class="content_2_2">
          <image class="content_2_2_1" src="http://39.106.208.234/pic/img_/haoyou.png" />
          <view class="content_2_2_2">好友</view>
        </view>
      </view>
      <!-- 合作信息 -->
      <view class="content_3">
        <view class="content_3_1">
          <view class="content_3_1_1">合作信息</view>
          <view class="content_3_1_2">
            <view class="content_3_1_2_1">查看更多</view>
            <image class="content_3_1_2_2" src="http://39.106.208.234/pic/img_/jinr.png" />
          </view>
        </view>
        <ProjectC />
        <ProjectC />
      </view>
      <!-- 猜你还想认识 -->
      <view class="content_4">
        <view class="content_4_1">猜你还想认识</view>
        <Contacts />
      </view>
    </view>
  </view>
</template>

<script>
import Head from '@/components/Head';
import ProjectC from '@/components/ProjectC';
import Contacts from '@/components/Contacts';
export default {
  components: { Head, ProjectC, Contacts },
};
</script>

<style lang="scss" scoped>
@import './personal.scss';
</style>
