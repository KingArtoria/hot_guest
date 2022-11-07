<template>
  <view>
    <!-- 头部 -->
    <view class="head">
      <view class="head_1">
        <view class="head_1_1">
          <image class="head_1_1_1" src="http://39.106.208.234/pic/img_/hylb.png" />
        </view>
        <view class="head_1_2">人脉</view>
        <view class="head_1_3">
          <image class="head_1_3_1" src="http://39.106.208.234/pic/img_/tianjia.png" />
        </view>
      </view>
    </view>
    <!-- 内容 -->
    <view class="content">
      <!-- 搜素框 -->
      <view class="content_1">
        <image class="content_1_1" src="http://39.106.208.234/pic/img_/sousuo_rm.png" />
        <u-input placeholder="好友昵称/备注" fontSize="28rpx" border="none" />
      </view>
      <!-- 提示助手 -->
      <view class="content_2">
        <view class="content_2_1">
          <image class="content_2_1_1" src="http://39.106.208.234/pic/img_/zs.png" />
          <view class="content_2_1_2">
            <view class="content_2_1_2_1">
              <view class="content_2_1_2_1_1">火客小助手</view>
              <view class="content_2_1_2_1_2">昨天</view>
            </view>
            <view class="content_2_1_2_2">您的私人小助手</view>
          </view>
        </view>
        <view class="content_2_1">
          <image class="content_2_1_1" src="http://39.106.208.234/pic/img_/xxzs.png" />
          <view class="content_2_1_2">
            <view class="content_2_1_2_1">
              <view class="content_2_1_2_1_1">消息通知小助手</view>
              <view class="content_2_1_2_1_2">16:20</view>
            </view>
            <view class="content_2_1_2_2">有2条好友申请待处理</view>
          </view>
        </view>
      </view>
      <!-- 私聊信息 -->
      <view class="content_3">
        <view class="content_3_1" @click="goPrivateChat">
          <view class="content_3_1_1">
            <image class="content_3_1_1_1" src="http://39.106.208.234/pic/img_/xxzs.png" />
            <view class="content_3_1_1_2">2</view>
          </view>
          <view class="content_3_1_2">
            <view class="content_3_1_2_1">
              <view class="content_3_1_2_1_1">
                <view class="content_3_1_2_1_1_1">名字</view>
                <view class="content_3_1_2_1_1_2">公司名字&nbsp;&nbsp;岗位</view>
              </view>
              <view class="content_3_1_2_1_2">2021-03-12</view>
            </view>
            <view class="content_3_1_2_2">谢谢老板</view>
          </view>
        </view>
        <view class="content_3_1">
          <view class="content_3_1_1">
            <image class="content_3_1_1_1" src="http://39.106.208.234/pic/img_/xxzs.png" />
            <view class="content_3_1_1_2">2</view>
          </view>
          <view class="content_3_1_2">
            <view class="content_3_1_2_1">
              <view class="content_3_1_2_1_1">
                <view class="content_3_1_2_1_1_1">名字</view>
                <view class="content_3_1_2_1_1_2">公司名字&nbsp;&nbsp;岗位</view>
              </view>
              <view class="content_3_1_2_1_2">2021-03-12</view>
            </view>
            <view class="content_3_1_2_2">谢谢老板</view>
          </view>
        </view>
        <view class="content_3_1">
          <view class="content_3_1_1">
            <image class="content_3_1_1_1" src="http://39.106.208.234/pic/img_/xxzs.png" />
            <view class="content_3_1_1_2">2</view>
          </view>
          <view class="content_3_1_2">
            <view class="content_3_1_2_1">
              <view class="content_3_1_2_1_1">
                <view class="content_3_1_2_1_1_1">名字</view>
                <view class="content_3_1_2_1_1_2">公司名字&nbsp;&nbsp;岗位</view>
              </view>
              <view class="content_3_1_2_1_2">2021-03-12</view>
            </view>
            <view class="content_3_1_2_2">谢谢老板</view>
          </view>
        </view>
        <view class="content_3_1">
          <view class="content_3_1_1">
            <image class="content_3_1_1_1" src="http://39.106.208.234/pic/img_/xxzs.png" />
            <view class="content_3_1_1_2">2</view>
          </view>
          <view class="content_3_1_2">
            <view class="content_3_1_2_1">
              <view class="content_3_1_2_1_1">
                <view class="content_3_1_2_1_1_1">名字</view>
                <view class="content_3_1_2_1_1_2">公司名字&nbsp;&nbsp;岗位</view>
              </view>
              <view class="content_3_1_2_1_2">2021-03-12</view>
            </view>
            <view class="content_3_1_2_2">谢谢老板</view>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  methods: {
    // 前往私聊
    goPrivateChat() {
      uni.navigateTo({
        url: '/pages/news/privateChat',
      });
    },
  },
};
</script>

<style lang="scss" scoped>
@import './index.scss';
</style>
