<template>
  <view>
    <!-- 返回按钮 -->
    <image class="head" :src="`${_url}black_icon_w.png`" />
    <!-- 内容 -->
    <view class="content">
      <!-- 背景层 -->
      <view class="content_1">
        <!-- 内容 -->
        <view class="content_1_1">
          <!-- 标题 -->
          <image class="content_1_1_1" :src="`${_url}guanyuwm.png`" />
          <!-- 文案盒子 -->
          <view class="content_1_1_2">
            <!-- 单条文案 -->
            <view class="content_1_1_2_1">
              <!-- 小圆标 -->
              <view class="content_1_1_2_1_1" />
              <!-- 信息 -->
              <view class="content_1_1_2_1_2"
                >火客是一家集资源整合，优质货源，销售渠道，资源互换，招商加盟，线下广告，线下场地，免费福利，新媒体账号转让，网站转让，域名转让，异业合作，项目对接，流量变现，投放广告等一体的综合性资源平台。</view
              >
            </view>
            <!-- 单条文案 -->
            <view class="content_1_1_2_1">
              <!-- 小圆标 -->
              <view class="content_1_1_2_1_1" />
              <!-- 信息 -->
              <view class="content_1_1_2_1_2">
                火客将海量、分散、闲置的媒体资源、商务拓展资源、用户资源以及客户资源，平台化、协同化地集聚、复用与供需匹配。</view
              >
            </view>
            <!-- 单条文案 -->
            <view class="content_1_1_2_1">
              <!-- 小圆标 -->
              <view class="content_1_1_2_1_1" />
              <!-- 信息 -->
              <view class="content_1_1_2_1_2">
                火客将海量、分散、闲置的媒体资源、商务拓展资源、用户资源以及客户资源，平台化、协同化地集聚、复用与供需匹配。</view
              >
            </view>
          </view>
        </view>
        <!-- 内容 -->
        <view class="content_1_1" style="margin-top: 84rpx">
          <!-- 标题 -->
          <image class="content_1_1_1" :src="`${_url}womendys.png`" />
          <!-- 文案盒子 -->
          <view class="content_1_1_2">
            <!-- 单条文案 -->
            <view class="content_1_1_2_1">
              <!-- 小圆标 -->
              <view class="content_1_1_2_1_1" />
              <!-- 信息 -->
              <view class="content_1_1_2_1_2"
                >火客是一家集资源整合，优质货源，销售渠道，资源互换，招商加盟，线下广告，线下场地，免费福利，新媒体账号转让，网站转让，域名转让，异业合作，项目对接，流量变现，投放广告等一体的综合性资源平台。</view
              >
            </view>
            <!-- 单条文案 -->
            <view class="content_1_1_2_1">
              <!-- 小圆标 -->
              <view class="content_1_1_2_1_1" />
              <!-- 信息 -->
              <view class="content_1_1_2_1_2">
                火客将海量、分散、闲置的媒体资源、商务拓展资源、用户资源以及客户资源，平台化、协同化地集聚、复用与供需匹配。</view
              >
            </view>
            <!-- 单条文案 -->
            <view class="content_1_1_2_1">
              <!-- 小圆标 -->
              <view class="content_1_1_2_1_1" />
              <!-- 信息 -->
              <view class="content_1_1_2_1_2"
                >平台从跨行业合作信息为切入点，通过汇集的不同行业合作需求，聚合各企业人脉和资源力量，对信息进行智能分析、自动匹配、商机挖掘，从而促进同行资源对接、跨界合作、异业合作、跨境合作等各类合作的精准、极速的达成，有效的帮商务，销售，个人等不同行业用户实现资源变现，促进项目成交。</view
              >
            </view>
          </view>
        </view>
        <!-- 图片 -->
        <image class="content_1_2" :src="`${_url}woshou.png`" />
        <!-- 申请盒子 -->
        <view class="content_1_3">
          <!-- 图标 -->
          <image class="content_1_3_1" :src="`${_url}qdndjr.png`" />
          <!-- 表单 -->
          <view class="content_1_3_2">
            <!-- 标题 -->
            <view class="content_1_3_2_1">联系人</view>
            <!-- 输入框盒子 -->
            <view class="content_1_3_2_2">
              <!-- 输入框 -->
              <u-input
                border="none"
                style="height: 100%; padding: 0 20rpx"
                fontSize="30rpx"
              />
            </view>
          </view>
          <!-- 表单 -->
          <view class="content_1_3_2">
            <!-- 标题 -->
            <view class="content_1_3_2_1">手机号</view>
            <!-- 输入框盒子 -->
            <view class="content_1_3_2_2">
              <!-- 输入框 -->
              <u-input
                border="none"
                style="height: 100%; padding: 0 20rpx"
                fontSize="30rpx"
              />
            </view>
          </view>
          <!-- 表单 -->
          <view class="content_1_3_2">
            <!-- 标题 -->
            <view class="content_1_3_2_1">意向城市</view>
            <!-- 输入框盒子 -->
            <view class="content_1_3_2_3">
              <!-- 输入框 -->
              <u-input
                border="none"
                placeholder="- 省 -"
                style="height: 100%; padding: 0 20rpx; background: #fff"
                fontSize="30rpx"
                inputAlign="center"
              />
              <!-- 输入框 -->
              <u-input
                border="none"
                placeholder="- 市 -"
                style="
                  height: 100%;
                  padding: 0 20rpx;
                  background: #fff;
                  margin: 0 25rpx;
                "
                fontSize="30rpx"
                inputAlign="center"
              />
              <!-- 输入框 -->
              <u-input
                border="none"
                placeholder="- 区 -"
                style="height: 100%; padding: 0 20rpx; background: #fff"
                fontSize="30rpx"
                inputAlign="center"
              />
            </view>
          </view>
          <!-- 表单 -->
          <view class="content_1_3_2">
            <!-- 标题 -->
            <view class="content_1_3_2_1">团队规模(人)</view>
            <!-- 输入框盒子 -->
            <view class="content_1_3_2_2">
              <!-- 输入框 -->
              <u-input
                style="height: 100%; padding: 0 20rpx"
                fontSize="30rpx"
              />
            </view>
          </view>
          <!-- 按钮 -->
          <view class="content_1_3_3">立即申请</view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "./cityAgent.scss";
</style>