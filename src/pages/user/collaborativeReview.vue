<template>
  <view>
    <!-- 头部 -->
    <Head title="合作评论" style="background: #f6f6f6" />
    <!-- 内容 -->
    <view class="content">
      <!-- 选项 -->
      <view class="content_1">
        <!-- 单个内容 -->
        <view
          class="content_1_1"
          style="margin-right: 50rpx"
          :style="`color:${active == 1 ? '#1A1A1A' : '#7A7A7A'};font-weight:${
            active == 1 ? 'bold' : '500'
          }`"
          @click="getCooperationComment(1)"
          >我收到的</view
        >
        <!-- 单个内容 -->
        <view
          class="content_1_1"
          :style="`color:${active == 3 ? '#1A1A1A' : '#7A7A7A'};font-weight:${
            active == 3 ? 'bold' : '500'
          }`"
          @click="getCooperationComment(3)"
          >我发出的</view
        >
      </view>
      <!-- 列表 -->
      <view class="content_2">
        <!-- 单个列表 -->
        <view class="content_2_1" v-for="(item, index) in list" :key="index">
          <!-- 头部 -->
          <view class="content_2_1_1">
            <!-- 头像 -->
            <image class="content_2_1_1_1" :src="item.member.head" />
            <!-- 信息 -->
            <view class="content_2_1_1_2">
              <!-- 名字 -->
              <view class="content_2_1_1_2_1">{{ item.member.nick_name }}</view>
              <!-- 评论时间 -->
              <view class="content_2_1_1_2_2">{{ item.createtime }}</view>
            </view>
          </view>
          <!-- 评论内容 -->
          <view class="content_2_1_2">{{ item.content }}</view>
          <!-- 项目盒子 -->
          <view class="content_2_1_3" @click="goProjectDetail(item.article.id)">
            <!-- 项目标题 -->
            <view class="content_2_1_3_1">{{ item.article.title }}</view>
            <!-- 发布时间&地区 -->
            <view class="content_2_1_3_2">
              {{ item.article.addtime }}
              &nbsp;&nbsp;&nbsp;
              {{ item.article.area }}
            </view>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
import Head from "../../components/Head";
import { getCooperationComment } from "../../utils/api";
export default {
  data() {
    return {
      // 选项卡选中 1 3
      active: 1,
      // 内容列表
      list: [],
    };
  },
  methods: {
    // 获取合作评论
    getCooperationComment(type) {
      // 赋值
      this.active = type;
      // 合作评论API
      getCooperationComment({ type }).then((res) => {
        // 初始化数据
        res.data.forEach((item) => {
          // 头像格式化
          if (item.member.head.indexOf("http") === -1) {
            item.member.head = `${this._avatarUrl}${item.member.head}`;
          }
        });
        // 赋值
        this.list = res.data;
        console.log(res.data);
      });
    },
    // 前往项目详细
    goProjectDetail(id) {
      // 路由跳转
      uni.navigateTo({
        url: `/pages/index/info?id=${id}`,
      });
    },
  },
  onLoad() {
    // 获取合作评论
    this.getCooperationComment(1);
  },
  components: { Head },
};
</script>

<style lang="scss" scoped>
@import "./collaborativeReview.scss";
</style>