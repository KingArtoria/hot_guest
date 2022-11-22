<template>
  <view>
    <Head title="个人页" style="background: #f6f6f6" />
    <view class="content">
      <!-- 名片 -->
      <view class="content_1">
        <image class="content_1_1" :src="personal.head" />
        <view class="content_1_2">
          <view class="content_1_2_1">{{ personal.nick_name }}</view>
          <view class="content_1_2_2">{{ personal.company }}</view>
          <view class="content_1_2_2">{{ personal.position }}</view>
          <view class="content_1_2_3">{{ personal.industry_one }}</view>
        </view>
      </view>
      <!-- 添加好友 -->
      <view class="content_2">
        <view class="content_2_1">
          <image class="content_2_1_1" src="http://39.106.208.234/pic/img_/moble.png" />
          <view class="content_2_1_2">手机号：{{ personal.phone }}</view>
        </view>
        <view class="content_2_2" v-if="personal.phone == '仅好友可见'" @click="addFriend">
          <image class="content_2_2_1" src="http://39.106.208.234/pic/img_/haoyou.png" />
          <view class="content_2_2_2">好友</view>
        </view>
      </view>
      <!-- 合作信息 -->
      <view class="content_3">
        <view class="content_3_1">
          <view class="content_3_1_1">合作信息</view>
          <view class="content_3_1_2" @click="goMoreItems">
            <view class="content_3_1_2_1">查看更多</view>
            <image class="content_3_1_2_2" src="http://39.106.208.234/pic/img_/jinr.png" />
          </view>
        </view>
        <ProjectC :data="otherRelease.slice(0, 3)" />
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
import { addFriend, getOtherRelease, getOtherUserInfo } from '../../utils/api';
import { showToast } from '../../utils';
export default {
  data() {
    return {
      // 个人信息
      personal: {},
      // option
      op: {},
      // 他人发布的项目
      otherRelease: [],
    };
  },
  methods: {
    // 获取个人信息
    getOtherUserInfo(toid) {
      // 获取他人个人信息API
      getOtherUserInfo({ toid }).then(res => {
        // 头像格式化
        if (res.data.head.indexOf('http') === -1) {
          res.data.head = `${this._avatarUrl}${res.data.head}`;
        }
        // 数据赋值
        this.personal = res.data;
      });
    },
    // 他人发布的项目
    getOtherRelease(id) {
      // 获取他人发布的项目API
      getOtherRelease({ type: 1, id }).then(res => {
        // 数据赋值
        this.otherRelease = res.data;
      });
    },
    // 添加好友
    addFriend() {
      // 添加好友API
      addFriend({ toid: this.op.id }).then(res => {
        // 抛出异常
        if (res.code != 1) return showToast(res.msg);
        // 提示
        showToast('好友申请发送成功');
      });
    },
    // 前往更多项目
    goMoreItems() {
      uni.navigateTo({
        url: `/pages/user/moreItems?id=${this.op.id}`,
      });
    },
  },
  onLoad(op) {
    // op赋值
    this.op = op;
    // 获取个人信息
    this.getOtherUserInfo(op.id);
    // 他人发布的项目
    this.getOtherRelease(op.id);
  },
  components: { Head, ProjectC, Contacts },
};
</script>

<style lang="scss" scoped>
@import './personal.scss';
</style>
