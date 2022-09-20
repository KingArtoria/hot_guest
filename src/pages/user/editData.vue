<template>
  <view>
    <Head title="编辑资料" style="background: #f6f6f6" />
    <view class="content">
      <view class="content_1">
        <view class="content_1_1">
          <view class="content_1_1_1">头像</view>
          <view class="content_1_1_2">
            <image class="content_1_1_2_1" src="https://admin.bdhuoke.com//upload/20220808/687f5fda3f9928dd941c0409dad7270a.png" />
            <image class="content_1_1_2_2" :src="`${_url}xiayiy.png`" />
          </view>
        </view>
        <view class="content_1_1">
          <view class="content_1_1_1">昵称</view>
          <view class="content_1_1_2">
            <view class="content_1_1_2_3">肩上扛着几多圣灵</view>
            <image class="content_1_1_2_2" :src="`${_url}xiayiy.png`" />
          </view>
        </view>
        <view class="content_1_1">
          <view class="content_1_1_1">性别</view>
          <view class="content_1_1_2">
            <view class="content_1_1_2_3">兜里揣着几斤理想</view>
            <image class="content_1_1_2_2" :src="`${_url}xiayiy.png`" />
          </view>
        </view>
      </view>
      <view class="content_1">
        <view class="content_1_1">
          <view class="content_1_1_1">真实姓名</view>
          <view class="content_1_1_2">
            <view class="content_1_1_2_3">我信仰之笃定</view>
            <image class="content_1_1_2_2" :src="`${_url}xiayiy.png`" />
          </view>
        </view>
        <view class="content_1_1" @click="goSchool">
          <view class="content_1_1_1">毕业学校</view>
          <view class="content_1_1_2">
            <view class="content_1_1_2_3">何须神明佐证</view>
            <image class="content_1_1_2_2" :src="`${_url}xiayiy.png`" />
          </view>
        </view>
        <view class="content_1_1" @click="goAddress">
          <view class="content_1_1_1">所在省市</view>
          <view class="content_1_1_2">
            <view class="content_1_1_2_3">所在省市所在省市所在省市</view>
            <image class="content_1_1_2_2" :src="`${_url}xiayiy.png`" />
          </view>
        </view>
        <view class="content_1_1">
          <view class="content_1_1_1">公司</view>
          <view class="content_1_1_2">
            <view class="content_1_1_2_3">公司公司公司公司</view>
            <image class="content_1_1_2_2" :src="`${_url}xiayiy.png`" />
          </view>
        </view>
        <view class="content_1_1">
          <view class="content_1_1_1">职位</view>
          <view class="content_1_1_2">
            <view class="content_1_1_2_3">职位职位职位职位</view>
            <image class="content_1_1_2_2" :src="`${_url}xiayiy.png`" />
          </view>
        </view>
      </view>
      <view class="content_1">
        <view class="content_1_1">
          <view class="content_1_1_1">邀请码</view>
          <view class="content_1_1_2">
            <view class="content_1_1_2_3">我在荒芜的草原上流浪</view>
            <image class="content_1_1_2_2" :src="`${_url}xiayiy.png`" />
          </view>
        </view>
        <view class="content_1_1">
          <view class="content_1_1_1">手机</view>
          <view class="content_1_1_2">
            <view class="content_1_1_2_3">固执押韵的排比</view>
            <image class="content_1_1_2_2" :src="`${_url}xiayiy.png`" />
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
import Head from '../../components/Head';
export default {
  methods: {
    // 前往选择学校
    goSchool() {
      uni.navigateTo({
        url: '/pages/user/school',
      });
    },
    // 前往选择省市
    goAddress() {
      uni.navigateTo({
        url: '/pages/user/address',
      });
    },
  },
  components: { Head },
};
</script>

<style lang="scss" scoped>
@import './editData.scss';
</style>
