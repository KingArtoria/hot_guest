<template>
  <view>
    <Head title="好友列表" style="background: #f6f6f6">
      <image slot="head_3_1" src="http://39.106.208.234/pic/img_/jiahaoy.png" :style="slotStyle" @click="goAddFriend" />
    </Head>
    <view class="content">
      <!-- 搜索框 -->
      <view class="content_1">
        <image class="content_1_1" src="http://39.106.208.234/pic/img_/sousuo_rm.png" />
        <u-input border="none" fontSize="28rpx" placeholder="搜索人脉" />
      </view>
      <!-- 索引列表 -->
      <u-index-list :index-list="indexList">
        <u-index-item v-for="(item, index) in itemArr" :key="index">
          <u-index-anchor :text="indexList[index]" color="#2a2a2a" size="22rpx" bgColor="#f6f6f6" height="65rpx" />
          <view v-for="(cell, index) in item" :key="index" class="content_2">
            <image class="content_2_1" :src="cell.img" />
            <view class="content_2_2">
              <view class="content_2_2_1">{{ cell.name }}</view>
              <view class="content_2_2_2">{{ cell.position }}&nbsp;&nbsp;&nbsp;&nbsp;{{ cell.company }}</view>
            </view>
          </view>
        </u-index-item>
      </u-index-list>
    </view>
  </view>
</template>

<script>
import Head from '@/components/Head';
export default {
  data() {
    return {
      // 插槽样式对象
      slotStyle: { width: '80rpx', height: '80rpx' },
      indexList: ['A', 'B', 'C'],
      itemArr: [
        [
          { img: 'https://admin.bdhuoke.com//upload/20220808/687f5fda3f9928dd941c0409dad7270a.png', name: '哈哈哈', position: '项目经理', company: '徐州星跃联动网络科技有限公司' },
          { img: 'https://admin.bdhuoke.com//upload/20220808/687f5fda3f9928dd941c0409dad7270a.png', name: '哈哈哈', position: '项目经理', company: '徐州星跃联动网络科技有限公司' },
          { img: 'https://admin.bdhuoke.com//upload/20220808/687f5fda3f9928dd941c0409dad7270a.png', name: '哈哈哈', position: '项目经理', company: '徐州星跃联动网络科技有限公司' },
          { img: 'https://admin.bdhuoke.com//upload/20220808/687f5fda3f9928dd941c0409dad7270a.png', name: '哈哈哈', position: '项目经理', company: '徐州星跃联动网络科技有限公司' },
        ],
        [
          { img: 'https://admin.bdhuoke.com//upload/20220808/687f5fda3f9928dd941c0409dad7270a.png', name: '哈哈哈', position: '项目经理', company: '徐州星跃联动网络科技有限公司' },
          { img: 'https://admin.bdhuoke.com//upload/20220808/687f5fda3f9928dd941c0409dad7270a.png', name: '哈哈哈', position: '项目经理', company: '徐州星跃联动网络科技有限公司' },
          { img: 'https://admin.bdhuoke.com//upload/20220808/687f5fda3f9928dd941c0409dad7270a.png', name: '哈哈哈', position: '项目经理', company: '徐州星跃联动网络科技有限公司' },
          { img: 'https://admin.bdhuoke.com//upload/20220808/687f5fda3f9928dd941c0409dad7270a.png', name: '哈哈哈', position: '项目经理', company: '徐州星跃联动网络科技有限公司' },
        ],
        [
          { img: 'https://admin.bdhuoke.com//upload/20220808/687f5fda3f9928dd941c0409dad7270a.png', name: '哈哈哈', position: '项目经理', company: '徐州星跃联动网络科技有限公司' },
          { img: 'https://admin.bdhuoke.com//upload/20220808/687f5fda3f9928dd941c0409dad7270a.png', name: '哈哈哈', position: '项目经理', company: '徐州星跃联动网络科技有限公司' },
          { img: 'https://admin.bdhuoke.com//upload/20220808/687f5fda3f9928dd941c0409dad7270a.png', name: '哈哈哈', position: '项目经理', company: '徐州星跃联动网络科技有限公司' },
          { img: 'https://admin.bdhuoke.com//upload/20220808/687f5fda3f9928dd941c0409dad7270a.png', name: '哈哈哈', position: '项目经理', company: '徐州星跃联动网络科技有限公司' },
        ],
      ],
    };
  },
  methods: {
    // 前往添加好友
    goAddFriend() {
      uni.navigateTo({
        url: '/pages/contacts/addFriend',
      });
    },
  },
  components: { Head },
};
</script>

<style lang="scss" scoped>
@import './buddyList.scss';
</style>
