<template>
  <view>
    <view class="content">
      <view class="content_1" v-for="(item, index) in list" :key="index" @click="goProject(item.id)">
        <!-- 置顶盒子 -->
        <view class="content_1_2">
          <!-- 置顶图标 -->
          <image class="content_1_2_1" src="http://39.106.208.234/pic/img_/cjzd.png" />
        </view>
        <!-- 信息盒子 -->
        <view class="content_1_1">
          <!-- 头部信息 -->
          <view class="content_1_1_1">
            <!-- 头像 -->
            <image class="content_1_1_1_1" :src="item.head" />
            <!-- 名称 -->
            <view class="content_1_1_1_2">{{ item.nick_name }}</view>
            <!-- 分割线 -->
            <view class="content_1_1_1_3" />
            <!-- 职位 -->
            <view class="content_1_1_1_4">{{ item.position }}</view>
          </view>
          <!-- 项目标题 -->
          <view class="content_1_1_2"> {{ item.title }}</view>
          <view class="content_1_1_3">{{ item.addtime }}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{ item.company }}</view>
          <view class="content_1_1_4">
            <view class="content_1_1_4_1">
              <view class="content_1_1_4_1_1" v-for="(v, i) in item.k" :key="i">{{ v }}</view>
            </view>
            <view class="content_1_1_4_2">{{ item.typeName }}</view>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  props: {
    list: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    // 前往项目详情
    goProject(id) {
      uni.navigateTo({
        url: `/pages/index/info?id=${id}`,
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.content {
  width: 710rpx;
  margin: 0 auto;
  .content_1 {
    background: #fff;
    margin-bottom: 15rpx;
      border-radius: 9rpx;
    .content_1_2 {
      height: 57rpx;
      background: #e1edff;
      border-radius: 9rpx 9rpx 0px 0px;
      padding-left: 22rpx;
      display: flex;
      align-items: center;

      .content_1_2_1 {
        width: 100rpx;
        height: 23rpx;
      }
    }

    .content_1_1 {
      padding: 13rpx 17rpx 18rpx 25rpx;

      .content_1_1_1 {
        display: flex;
        align-items: center;

        .content_1_1_1_1 {
          width: 40rpx;
          height: 40rpx;
          border-radius: 20rpx;
          margin-right: 11rpx;
        }

        .content_1_1_1_2 {
          font-size: 24rpx;
          font-family: PingFang SC;
          font-weight: 500;
          color: #b957fd;
          line-height: 1;
        }

        .content_1_1_1_3 {
          margin: 0 14rpx;
          width: 1rpx;
          height: 20rpx;
          background: #cfcfcf;
        }

        .content_1_1_1_4 {
          font-size: 24rpx;
          font-family: PingFang SC;
          font-weight: 500;
          color: #a4a4a4;
          line-height: 1;
        }
      }

      .content_1_1_2 {
        margin-top: 15rpx;
        font-size: 30rpx;
        font-family: PingFang SC;
        font-weight: 500;
        color: #1a1a1a;
        line-height: 40rpx;
        word-break: break-all;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
      }

      .content_1_1_3 {
        margin-top: 24rpx;
        font-size: 22rpx;
        font-family: PingFang SC;
        font-weight: 500;
        color: #a4a4a4;
        line-height: 1;
      }

      .content_1_1_4 {
        margin-top: 20rpx;
        display: flex;
        justify-content: space-between;
        align-items: center;

        .content_1_1_4_1 {
          display: flex;

          .content_1_1_4_1_1 {
            height: 31rpx;
            border: 1rpx solid #7c7c7c;
            border-radius: 3rpx;
            padding: 0 18rpx;
            font-size: 22rpx;
            font-family: PingFang SC;
            font-weight: 500;
            color: #7c7c7c;
            margin-right: 22rpx;
            display: flex;
            align-items: center;
            juccy-content: center;
          }
        }

        .content_1_1_4_2 {
          width: 113rpx;
          height: 38rpx;
          background: #ebf3ff;
          border: 1rpx solid #1f73f1;
          border-radius: 5rpx;
          text-align: center;
          line-height: 38rpx;
          font-size: 22rpx;
          font-family: PingFang SC;
          font-weight: 500;
          color: #1f73f1;
        }
      }
    }
  }
}
</style>
