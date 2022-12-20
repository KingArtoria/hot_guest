<template>
  <view>
    <!-- 返回 -->
    <image
      class="head"
      src="http://39.106.208.234/pic/img_/black_icon_w.png"
      @click="back"
    />
    <!-- 内容 -->
    <view class="content">
      <!-- 轮播 -->
      <view class="content_1">
        <u-notice-bar
          :text="notice"
          direction="column"
          color="#004194"
          bgColor="rgba(255,255,255,0.5)"
          fontSize="22rpx"
          style="border-radius: 24rpx"
        />
      </view>
      <!-- 二维码 -->
      <image class="content_2" src="http://39.106.208.234/pic/img_/terwm.png" />
      <!-- 排行榜盒子 -->
      <view class="content_3">
        <!-- 头部 -->
        <view class="content_3_1">
          <!-- 左侧图标 -->
          <image
            class="content_3_1_1"
            src="http://39.106.208.234/pic/img_/shouyiph.png"
          />
          <!-- 提示 -->
          <view class="content_3_1_2">只显示排名前10的用户</view>
        </view>
        <!-- 列表 -->
        <view class="content_3_2">
          <!-- 标题 -->
          <view class="content_3_2_1">
            <!-- 左侧盒子 -->
            <view class="content_3_2_1_1">
              <!-- 排名 -->
              <view class="content_3_2_1_1_1">排名</view>
              <!-- 用户ID -->
              <view class="content_3_2_1_1_2">用户ID</view>
            </view>
            <!-- 右侧盒子 -->
            <view class="content_3_2_1_2">已赚取金额</view>
          </view>
          <!-- 单个列表 -->
          <view
            class="content_3_2_2"
            v-for="(item, index) in rank"
            :key="index"
          >
            <!-- 左侧盒子 -->
            <view class="content_3_2_2_1">
              <!-- 排名 -->
              <view class="content_3_2_2_1_1">
                <!-- 图标 -->
                <image
                  class="content_3_2_2_1_1_1"
                  :src="`http://39.106.208.234/pic/img_/${index + 1}.png`"
                  v-if="index < 3"
                />
                <!-- 排名 -->
                <view class="content_3_2_2_1_1_2" v-else>{{ index + 1 }}</view>
              </view>
              <!-- 用户 -->
              <view class="content_3_2_2_1_2">
                <!-- 头像 -->
                <image class="content_3_2_2_1_2_1" :src="item.head" />
                <!-- 名字 -->
                <view class="content_3_2_2_1_2_2">{{ item.real_name }}</view>
                <!-- 职位 -->
                <view class="content_3_2_2_1_2_3">{{ item.position }}</view>
              </view>
            </view>
            <!-- 右侧盒子 -->
            <view class="content_3_2_2_2">￥{{ item.num }}</view>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
import { getRank } from "../../utils/api";
export default {
  data() {
    return {
      // 排行榜
      rank: [],
      // 轮播数据
      notice: [],
    };
  },
  methods: {
    // 获取排行榜
    getRank() {
      // 获取排行榜API
      getRank().then((res) => {
        // 接口赋值
        this.rank = res.data;
        this.rank.forEach((item) => {
          // 头像格式化
          if (item.head.indexOf("http") === -1) {
            item.head = `${this._avatarUrl}${item.head}`;
          }
          // 添加轮播数据
          this.notice.push(`用户${item.real_name}已累计赚取现金${item.num}元`);
        });
        // 根据num降序排序
        this.rank.sort((a, b) => {
          return b.num - a.num;
        });
      });
    },
    // 返回上一页
    back() {
      uni.navigateBack();
    },
  },
  onLoad() {
    // 获取排行榜
    this.getRank();
  },
};
</script>

<style lang="scss" scoped>
@import "./commissionRanking.scss";
</style>