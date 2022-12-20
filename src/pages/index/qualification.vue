<template>
  <view>
    <!-- 头部 -->
    <Head title="办证服务" />
    <!-- 内容 -->
    <view class="content">
      <!-- 大图 -->
      <view class="content_1">
        <view class="content_1_1">知识产权一站式平台</view>
        <view class="content_1_2">专注知识产权6年，13万+客户的选择</view>
      </view>
      <!-- 内容 -->
      <view class="content_2">
        <!-- 左列表 -->
        <view class="content_2_1">
          <!-- 单个内容 -->
          <view
            class="content_2_1_1"
            v-for="(item, index) in serviceList"
            :key="index"
            :style="`background:${item.isSelect ? '#FFF' : '#F5F5F5'}`"
            @click="selectService(index)"
            >{{ item.text }}</view
          >
        </view>
        <!-- 右列表 -->
        <view class="content_2_2">
          <!-- 单个内容 -->
          <view
            class="content_2_2_1"
            v-for="(item, index) in showChildList"
            :key="index"
          >
            <!-- 图标 -->
            <image class="content_2_2_1_1" :src="item.icon" />
            <!-- 信息盒子 -->
            <view class="content_2_2_1_2">
              <!-- 标题 -->
              <view class="content_2_2_1_2_1">{{ item.text }}</view>
              <!-- 信息 -->
              <view class="content_2_2_1_2_2">{{ item.info }}</view>
            </view>
          </view>
        </view>
      </view>
    </view>
    <!-- 联系客服 -->
    <view class="contact" @click="callPhone">
      <!-- 联系方式 -->
      <view class="contact_1">
        <view class="contact_1_1">全国服务热线：</view>
        <view class="contact_1_2">18511169119</view>
      </view>
      <!-- 图标 -->
      <image
        class="contact_2"
        src="http://39.106.208.234/pic/img_/dianhua@2x.png"
      />
    </view>
  </view>
</template>

<script>
import Head from "../../components/Head";
import { SERVICE_CHILD_LIST, SERVICE_LIST } from "../../utils/const";
export default {
  data() {
    return {
      // 服务列表
      serviceList: [],
      // 服务子列表
      serviceChildList: [],
      // 展示的子列表
      showChildList: [],
    };
  },
  methods: {
    // 选择服务
    selectService(index) {
      // 重置服务列表
      this.serviceList.forEach((item) => {
        item.isSelect = false;
      });
      // 选中当前服务
      this.serviceList[index].isSelect = true;
      // 重置展示的子列表
      this.showChildList = this.serviceChildList[index].list;
    },
    // 拨打电话
    callPhone() {
      // 拨打电话
      uni.makePhoneCall({
        phoneNumber: "18511169119", //仅为示例
      });
    },
  },
  onLoad() {
    // 获取服务列表
    this.serviceList = SERVICE_LIST;
    // 获取服务子列表
    this.serviceChildList = SERVICE_CHILD_LIST;
    // 获取展示的服务子列表
    this.showChildList = this.serviceChildList[0].list;
  },
  components: { Head },
};
</script>

<style lang="scss" scoped>
@import "./qualification.scss";
</style>