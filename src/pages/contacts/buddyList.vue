<template>
  <view>
    <Head title="好友列表" style="background: #f6f6f6">
      <image
        slot="head_3_1"
        src="http://39.106.208.234/pic/img_/jiahaoy.png"
        :style="slotStyle"
        @click="goAddFriend"
      />
    </Head>
    <view class="content">
      <!-- 搜索框 -->
      <view class="content_1">
        <image
          class="content_1_1"
          src="http://39.106.208.234/pic/img_/sousuo_rm.png"
        />
        <u-input border="none" fontSize="28rpx" placeholder="搜索人脉" />
      </view>
      <!-- 索引列表 -->
      <u-index-list :index-list="indexList">
        <u-index-item v-for="(item, index) in itemArr" :key="index">
          <u-index-anchor
            :text="indexList[index]"
            color="#2a2a2a"
            size="22rpx"
            bgColor="#f6f6f6"
            height="65rpx"
          />
          <view v-for="(cell, index) in item" :key="index" class="content_2">
            <image class="content_2_1" :src="cell.head" />
            <view class="content_2_2">
              <view class="content_2_2_1">{{ cell.nick_name }}</view>
              <view class="content_2_2_2"
                >{{ cell.position }}&nbsp;&nbsp;&nbsp;&nbsp;{{
                  cell.company
                }}</view
              >
            </view>
          </view>
        </u-index-item>
      </u-index-list>
    </view>
  </view>
</template>

<script>
import Head from "@/components/Head";
import { getMyFriend } from "../../utils/api";
export default {
  data() {
    return {
      // 插槽样式对象
      slotStyle: { width: "80rpx", height: "80rpx" },
      // 索引数组
      indexList: [],
      // 好友数组
      itemArr: [],
    };
  },
  methods: {
    // 前往添加好友
    goAddFriend() {
      uni.navigateTo({
        url: "/pages/contacts/addFriend",
      });
    },
    // 我的好友
    goMyFriend() {
      // 我的好友API
      getMyFriend().then((res) => {
        // 初始化数据
        res.data.list.forEach((item) => {
          // 添加索引
          this.indexList.push(item.chart);
          // 添加数据
          this.itemArr.push(item.data);
        });
        // 初始化头像
        this.itemArr.forEach((item) => {
          item.forEach((item2) => {
            // 头像格式化
            if (item2.head.indexOf("http") === -1) {
              item2.head = `${this._avatarUrl}${item2.head}`;
            }
          });
        });
      });
    },
  },
  onLoad() {
    // 我的好友
    this.goMyFriend();
  },
  components: { Head },
};
</script>

<style lang="scss" scoped>
@import "./buddyList.scss";
</style>
