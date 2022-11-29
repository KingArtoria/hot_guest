<template>
  <view>
    <!-- 内容盒子 -->
    <view
      class="contacts"
      v-for="(item, index) in data"
      :key="index"
      @click="goPersonal(item.id)"
    >
      <!-- 头像 -->
      <image class="contacts_1" :src="item.head" />
      <!-- 信息盒子 -->
      <view class="contacts_2">
        <!-- 个人信息 -->
        <view class="contacts_2_1">
          <!-- 信息 -->
          <view class="contacts_2_1_1">
            <text class="contacts_2_1_1_1">{{ item.nick_name }}</text>
            <text class="contacts_2_1_1_2"
              >{{ item.company }}&nbsp;{{ item.position }}</text
            >
          </view>
          <!-- 按钮 -->
          <view class="contacts_2_1_2" @click="addFriend(item.id)">
            <image
              class="contacts_2_1_2_1"
              src="http://39.106.208.234/pic/img_/haoyou.png"
            />
            <view class="contacts_2_1_2_2">好友</view>
          </view>
        </view>
        <!-- 项目信息 -->
        <view class="contacts_2_2">
          <!-- 总数 -->
          <view class="contacts_2_2_1">{{ item.count }}条合作信息</view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
import { showToast } from "../utils";
import { addFriend } from "../utils/api";
export default {
  props: {
    data: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {};
  },
  methods: {
    // 添加好友
    addFriend(toid) {
      // 加载中
      uni.showLoading({ title: "加载中" });
      addFriend({ toid }).then((res) => {
        // 抛出异常
        if (res.code != 1) return showToast(res.msg);
        // 提示
        showToast("申请发送成功");
      });
    },
    // 跳转到个人中心
    goPersonal(id) {
      uni.navigateTo({ url: `/pages/contacts/personal?id=${id}` });
    },
  },
};
</script>

<style lang="scss" scoped>
.contacts {
  width: 750rpx;
  background: #ffffff;
  padding: 25rpx 31rpx 33rpx 33rpx;
  display: flex;
  .contacts_1 {
    width: 90rpx;
    height: 90rpx;
    border-radius: 45rpx;
    margin-right: 21rpx;
    flex-shrink: 0;
  }
  .contacts_2 {
    flex: 1;
    .contacts_2_1 {
      display: flex;
      align-items: center;
      justify-content: space-between;
      .contacts_2_1_1 {
        display: flex;
        align-items: center;
        width: 350rpx;
        .contacts_2_1_1_1 {
          font-size: 28rpx;
          font-family: PingFang SC;
          font-weight: 500;
          color: #303030;
          margin-right: 9rpx;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .contacts_2_1_1_2 {
          font-size: 24rpx;
          font-family: PingFang SC;
          font-weight: 500;
          color: #8d8d8d;
          line-height: 1;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
      }
      .contacts_2_1_2 {
        width: 142rpx;
        height: 52rpx;
        background: #1f73f1;
        border: 2rpx solid #0078ff;
        border-radius: 26rpx;
        display: flex;
        align-items: center;
        justify-content: center;
        .contacts_2_1_2_1 {
          width: 24rpx;
          height: 24rpx;
          margin-right: 8rpx;
        }
        .contacts_2_1_2_2 {
          font-size: 26rpx;
          font-family: PingFang SC;
          font-weight: 500;
          color: #ffffff;
        }
      }
    }
    .contacts_2_2 {
      // width: 554rpx;
      .contacts_2_2_1 {
        width: 163rpx;
        height: 42rpx;
        background: #f7f7f7;
        text-align: center;
        line-height: 42rpx;
        font-size: 24rpx;
        font-family: PingFang SC;
        font-weight: 500;
        color: #56689b;
        margin-bottom: 16rpx;
      }
      .contacts_2_2_2 {
        font-size: 24rpx;
        font-family: PingFang SC;
        font-weight: 400;
        color: #303030;
        line-height: 40rpx;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
      }
    }
  }
}
</style>
