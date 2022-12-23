<template>
  <view>
    <Head title="合作信息" style="background: #f6f6f6">
      <image
        slot="head_3_1"
        :style="slotStyle"
        src="http://39.106.208.234/pic/img_/xiaoxi@2x.png"
        @click="toMyComment"
      />
    </Head>
    <view class="content">
      <u-tabs
        :list="labelImg"
        :activeStyle="tabsStyle[0]"
        :inactiveStyle="tabsStyle[1]"
        :itemStyle="tabsStyle[2]"
        lineColor="#3875E9"
        lineWidth="92rpx"
        lineHeight="4rpx"
        @click="tabsClick"
      />
      <view class="content_1">
        <ProjectB
          v-for="(item, index) in myRelease"
          :key="index"
          :item="item"
          :typeShow="false"
        />
      </view>
      <!-- 内容为空 -->
      <u-empty
        mode="list"
        textSize="24rpx"
        :show="myRelease.length == 0"
        iconSize="140rpx"
        marginTop="180rpx"
      />
    </view>
  </view>
</template>

<script>
import Head from "../../components/Head";
import ProjectB from "../../components/ProjectB";
import { getMyRelease } from "../../utils/api";
import { LABEL_IMG } from "../../utils/const";
export default {
  data() {
    return {
      // 插槽样式
      slotStyle: { width: "80rpx", height: "80rpx" },
      // tabs数值
      labelImg: [],
      // tabs样式
      tabsStyle: [
        {
          color: "#1A1A1A",
          fontWeight: "bold",
          "font-size": "28rpx",
          padding: "0 20rpx",
        },
        { color: "#1A1A1A", fontSize: "28rpx", padding: "0 20rpx" },
        { height: "80rpx" },
      ],
      // 我发布的
      myRelease: [],
    };
  },
  methods: {
    // 初始化参数
    initParams() {
      this.labelImg = JSON.parse(JSON.stringify(LABEL_IMG));
      // 删除第一个
      this.labelImg.shift();
      console.log(this.labelImg);
    },
    // 获取我发布的
    getMyRelease(type = 1) {
      // 获取我发布的API
      getMyRelease({ type }).then((res) => {
        // 初始化数据
        res.data.forEach((item) => {
          // 删除年份
          item.addtime = item.addtime.slice(5);
          // 删除秒
          item.addtime = item.addtime.slice(0, -3);
        });
        // 赋值
        this.myRelease = res.data;
      });
    },
    // tabs点击事件
    tabsClick(item) {
      this.getMyRelease(item.index + 1);
    },
    // 前往我的评论
    toMyComment() {
      uni.navigateTo({
        url: "/pages/user/collaborativeReview",
      });
    },
  },
  onLoad() {
    // 初始化参数
    this.initParams();
    // 获取我发布的
    this.getMyRelease();
  },
  components: { Head, ProjectB },
};
</script>

<style lang="scss" scoped>
@import "./myPost.scss";
</style>
