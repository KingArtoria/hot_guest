<template>
  <view class="fr" @click="click">
    <view class="fr_1">
      <image class="fr_1_1" :src="data.head" />
      <view class="fr_1_2">
        <view class="fr_1_2_1">好友请求：{{ data.nick_name }}</view>
        <view class="fr_1_2_2"
          >{{ data.company }}&nbsp;&nbsp;&nbsp;&nbsp;{{ data.position }}</view
        >
        <view class="fr_1_2_2">同行{{ data.count }}个共同好友</view>
      </view>
    </view>
    <view class="fr_2">
      <view
        class="fr_2_1"
        style="margin-right: 32rpx"
        @click.stop="handleFriend(2)"
      >
        <image
          class="fr_2_1_1"
          src="http://39.106.208.234/pic/img_/jujue.png"
        />
      </view>
      <view class="fr_2_1" @click.stop="handleFriend(1)">
        <image
          class="fr_2_1_2"
          src="http://39.106.208.234/pic/img_/tongyi.png"
        />
      </view>
    </view>
  </view>
</template>

<script>
import { showToast } from "../utils";
import { handleFriend } from "../utils/api";
export default {
  props: {
    data: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      // 加好友请求处理参数
      params: {},
    };
  },
  methods: {
    click() {
      this.$emit("click");
    },
    // 加好友请求处理
    handleFriend(status) {
      // 参数赋值
      this.params.status = status;
      this.params.toid = this.data.member_id;
      // 加好友请求处理API
      handleFriend(this.params).then((res) => {
        // 抛出异常
        if (res.code != 1) return showToast(res.msg);
        // 成功
        showToast("处理成功");
        // 刷新数据
        uni.$emit("refresh");
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.fr {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 170rpx;
  background: #ffffff;
  border-radius: 10rpx;
  padding: 0 32rpx;
  .fr_1 {
    display: flex;
    .fr_1_1 {
      width: 90rpx;
      height: 90rpx;
      border-radius: 45rpx;
      margin-right: 21rpx;
    }
    .fr_1_2 {
      .fr_1_2_1 {
        font-size: 28rpx;
        font-family: PingFang SC;
        font-weight: 500;
        color: #212121;
        line-height: 1;
        margin-bottom: 18rpx;
      }
      .fr_1_2_2 {
        font-size: 24rpx;
        font-family: PingFang SC;
        font-weight: 500;
        color: #8d8d8d;
        line-height: 35rpx;
        width: 286rpx;
      }
    }
  }
  .fr_2 {
    display: flex;
    .fr_2_1 {
      width: 79rpx;
      height: 52rpx;
      background: #f6f6f6;
      border-radius: 26rpx;
      display: flex;
      align-items: center;
      justify-content: center;
      .fr_2_1_1 {
        width: 20rpx;
        height: 20rpx;
      }
      .fr_2_1_2 {
        width: 26rpx;
        height: 20rpx;
      }
    }
  }
}
</style>
