<template>
  <view>
    <Head title="查看更多" />
    <view class="content">
      <!-- 信息 -->
      <view class="content_1" v-for="(item, index) in visitors.slice(0, 1000)" :key="index" @click="goPersonal(item.member_id)">
        <!-- 头像 -->
        <image class="content_1_1" :src="item.head" />
        <!-- 文本信息 -->
        <view class="content_1_2">
          <!-- 上盒子 -->
          <view class="content_1_2_1">
            <!-- 名字 -->
            <view class="content_1_2_1_1">{{ item.nick_name }}</view>
          </view>
          <!-- 下盒子 -->
          <view class="content_1_2_2">
            <!-- 职位 -->
            <view class="content_1_2_2_1">{{ item.position }}{{ item.company }}</view>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
import Head from '../../components/Head';
export default {
  data() {
    return {
      // 浏览人
      visitors: [],
    };
  },
  methods: {
    // 前往个人页
    goPersonal(id) {
      uni.navigateTo({
        url: `/pages/contacts/personal?id=${id}`,
      });
    },
  },
  onLoad() {
    // 获取浏览人
    this.visitors = uni.getStorageSync('visitors');
  },
  components: { Head },
};
</script>

<style lang="scss" scoped>
@import './browse.scss';
</style>
