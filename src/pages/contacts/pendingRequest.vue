<template>
  <view>
    <!-- 头部 -->
    <view class="head">
      <!-- 返回盒子 -->
      <image
        class="head_1"
        src="http://39.106.208.234/pic/img_/black_ss.png"
        @click="back"
      />
      <!-- 按钮盒子 -->
      <view class="head_2">
        <!-- 待处理请求 -->
        <view
          class="head_2_1"
          @click="selectBtn(1)"
          :style="`color:${current == 1 ? '#fff' : '#2A2A2A'}`"
          >待处理请求</view
        >
        <!-- 已发出请求 -->
        <view
          class="head_2_1"
          @click="selectBtn(2)"
          :style="`color:${current == 2 ? '#fff' : '#2A2A2A'}`"
          >已发出请求</view
        >
        <!-- 选中层 -->
        <view
          class="head_2_2"
          :style="`${current == 1 ? 'left:0' : 'left:calc(422rpx - 211rpx)'}`"
        />
      </view>
    </view>
    <!-- 内容 -->
    <view class="content">
      <!-- 盒子 -->
      <view class="content_1">
        <!-- 单个数据 -->
        <view
          class="content_1_1"
          v-for="(item, index) in pendingRequest"
          :key="index"
        >
          <!-- 左侧盒子 -->
          <view class="content_1_1_1">
            <!-- 头像 -->
            <image class="content_1_1_1_1" :src="item.head" />
            <!-- 信息 -->
            <view class="content_1_1_1_2">
              <!-- 名字 -->
              <view class="content_1_1_1_2_1">{{ item.nick_name }}</view>
              <!-- 共同好友 -->
              <view class="content_1_1_1_2_2">{{ item.count }}个共同好友</view>
            </view>
          </view>
          <!-- 右侧盒子(待处理请求) -->
          <view class="content_1_1_2" v-show="current == 1">
            <!-- 拒绝按钮 -->
            <view
              class="content_1_1_2_1"
              style="margin-right: 32rpx"
              @click="handleFriend(item.member_id, 2)"
            >
              <!-- 图标 -->
              <image
                class="content_1_1_2_1_1"
                src="http://39.106.208.234/pic/img_/jujue.png"
              />
            </view>
            <!-- 同意按钮 -->
            <view
              class="content_1_1_2_1"
              @click="handleFriend(item.member_id, 1)"
            >
              <!-- 图标 -->
              <image
                class="content_1_1_2_1_2"
                src="http://39.106.208.234/pic/img_/tongyi.png"
              />
            </view>
          </view>
          <!-- 右侧盒子(好友) -->
          <view class="content_1_1_3" v-show="current == 2 && item.status == 1"
            >发消息</view
          >
          <!-- 右侧盒子(申请中) -->
          <view class="content_1_1_4" v-show="current == 2 && item.status == 0"
            >已申请</view
          >
        </view>
      </view>
    </view>
  </view>
</template>

<script>
import { showToast } from "../../utils";
import { getNotice, handleFriend } from "../../utils/api";
export default {
  data() {
    return {
      // 当前选中的按钮
      current: 1,
      // 待处理请求
      pendingRequest: [],
    };
  },
  methods: {
    // 选中按钮
    selectBtn(index) {
      // 赋值步骤
      this.current = index;
      // 数据清空
      this.pendingRequest = [];
      // 获取数据
      this.getNotice();
    },
    // 好友请求通知
    getNotice() {
      // 好友请求API
      getNotice({ type: this.current }).then((res) => {
        // 初始化数据
        res.data.forEach((item) => {
          // 初始化头像
          if (item.head.indexOf("http") === -1) {
            item.head = `${this._avatarUrl}${item.head}`;
          }
        });
        // 参数赋值
        this.pendingRequest = res.data;
      });
    },
    // 好友请求处理
    handleFriend(toid, status) {
      // 好友请求处理API
      handleFriend({ status, toid }).then((res) => {
        // 抛出异常
        if (res.code != 1) return showToast(res.msg);
        // 处理成功
        showToast("处理成功");
        // 重新获取数据
        this.getNotice();
      });
    },
    // 返回上一页
    back() {
      // 路由返回
      uni.navigateBack();
    },
  },
  onLoad() {
    // 好友请求通知
    this.getNotice();
  },
};
</script>

<style lang="scss" scoped>
@import "./pendingRequest.scss";
</style>