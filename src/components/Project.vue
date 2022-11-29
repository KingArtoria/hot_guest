<template>
  <view>
    <view class="content">
      <view
        class="content_1"
        v-for="(item, index) in list"
        :key="index"
        @click="goProject(item.id)"
      >
        <!-- 置顶盒子 -->
        <view class="content_1_2" v-if="item.supertoptime > 0">
          <!-- 置顶图标 -->
          <image
            class="content_1_2_1"
            src="http://39.106.208.234/pic/img_/cjzd.png"
          />
        </view>
        <!-- 信息盒子 -->
        <view class="content_1_1">
          <!-- 头部信息 -->
          <view class="content_1_1_1">
            <!-- 头像 -->
            <image class="content_1_1_1_1" :src="item.head" />
            <!-- 名称 -->
            <view class="content_1_1_1_2" :style="`color:${item.nameColor}`">{{
              item.nick_name
            }}</view>
            <!-- 分割线 -->
            <view class="content_1_1_1_3" />
            <!-- 职位 -->
            <view class="content_1_1_1_4">{{ item.position }}</view>
          </view>
          <!-- 项目标题 -->
          <view class="content_1_1_2"> {{ item.title }}</view>
          <!-- 添加日期 -->
          <view class="content_1_1_3"
            >{{ item.addtime }}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{
              item.company
            }}</view
          >
          <!-- 下部盒子 -->
          <view class="content_1_1_4">
            <!-- 标签 -->
            <view class="content_1_1_4_1">
              <!-- 单标签 -->
              <view
                class="content_1_1_4_1_1"
                v-for="(v, i) in item.k"
                :key="i"
                >{{ v }}</view
              >
            </view>
            <!-- 类型 -->
            <view class="content_1_1_4_2" v-if="!item.advertisement_time > 0">{{
              item.typeName
            }}</view>
            <!-- 广告置顶 -->
            <view class="content_1_1_4_3" v-if="item.advertisement_time > 0"
              >广告</view
            >
          </view>
        </view>
        <!-- 普通置顶 -->
        <image
          class="content_1_3"
          src="http://39.106.208.234/pic/img_/sy_zd@2x.png"
          v-if="item.toptime > 0"
        />
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
    position: relative;
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
            justify-content: center;
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
        .content_1_1_4_3 {
          width: 70rpx;
          height: 30rpx;
          background: #f6f6f6;
          border-radius: 5rpx;
          text-align: center;
          line-height: 30rpx;
          font-size: 24rpx;
          font-family: PingFang SC;
          font-weight: 500;
          color: #bbbbbb;
        }
      }
    }
    .content_1_3 {
      position: absolute;
      right: 0;
      top: 0;
      z-index: 3;
      width: 58rpx;
      height: 58rpx;
    }
  }
}
</style>
