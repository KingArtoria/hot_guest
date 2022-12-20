<template>
  <view>
    <Head title="业务订阅" />
    <view class="content">
      <!-- 头部介绍 -->
      <view class="content_1">
        <view class="content_1_1">
          <view class="content_1_1_1" />
          <view class="content_1_1_2"
            >用户添加业务词，平台会第一时间根据您的业务词进行业务精准推送。会员用户更有每月免费短信推送服务，保障用户高效率合作。</view
          >
        </view>
        <view class="content_1_2" @click="show = true">添加业务词</view>
      </view>
      <!-- 已添加业务词 -->
      <view class="content_2">
        <Title title="已添加业务词" />
        <view class="content_2_1">
          <view
            class="content_2_1_1"
            v-for="(item, index) in userInfo.keywords"
            :key="index"
          >
            <view class="content_2_1_1_1">#{{ item }}</view>
            <image
              class="content_2_1_1_2"
              :src="`${_url}sahnchu.png`"
              @click="deleteKeyword(item)"
            />
          </view>
        </view>
      </view>
      <!-- 权益对比 -->
      <view class="content_3">
        <image
          class="content_3_1"
          src="http://39.106.208.234/pic/img_/dyqy.png"
        />
        <image
          class="content_3_2"
          src="http://39.106.208.234/pic/img_/huiyuanyh.png"
        />
        <image
          class="content_3_3"
          src="http://39.106.208.234/pic/img_/putongyonghu.png"
        />
        <view class="content_3_4" @click="buyVip">去开通</view>
        <view class="content_3_5" @click="createOrder">去购买</view>
      </view>
    </view>
    <!-- 关键词弹出层 -->
    <u-popup :show="show" mode="center" @close="show = false" round="20rpx">
      <!-- 遮罩盒子 -->
      <view class="keyWord">
        <!-- 标题 -->
        <view class="keyWord_1">添加业务词</view>
        <!-- 提示 -->
        <view class="keyWord_2">单个业务词最多可输入5个汉字</view>
        <!-- 输入框 -->
        <u-input
          v-model="params.keywords"
          clearable
          fontSize="28rpx"
          :customStyle="{ height: '90rpx', padding: '0 27rpx' }"
          placeholder="例：快应用"
        />
        <!-- 提交按钮 -->
        <view class="keyWord_3" @click="addKeyword">确认添加</view>
      </view>
    </u-popup>
    <!-- 购买成功 -->
    <u-modal :show="modal.show" :title="modal.title" :content="modal.content" />
  </view>
</template>

<script>
import Title from "../../components/Title";
import Head from "../../components/Head";
import {
  addKeyword,
  createOrder,
  deleteKeyword,
  getInnerList,
  getUserInfo,
  wxPay,
} from "../../utils/api";
import { showToast } from "../../utils";
export default {
  data() {
    return {
      // 添加关键词参数
      params: {},
      // 关键词弹出层
      show: false,
      // 用户信息
      userInfo: {},
      // 道具API
      innerList: {},
      // sn
      order_sn: "",
      // 模态框对象
      modal: {
        show: false,
        title: "支付成功",
        content: "您已成功开通短信推送服务",
        confirm: () => {
          // 关闭模态框
          this.modal.show = false;
          // 返回上一级
          uni.navigateBack();
        },
      },
    };
  },
  methods: {
    // 添加关键词
    addKeyword() {
      // 添加关键词API
      addKeyword(this.params).then((res) => {
        // 抛出异常
        if (res.code != 1) return showToast(res.msg);
        // 添加成功
        showToast("添加成功");
        // 关闭弹出层
        this.show = false;
        // 清除缓存
        this.params = {};
        // 获取用户信息
        this.getUserInfo();
      });
    },
    // 获取用户信息
    getUserInfo() {
      // 获取用户信息API
      getUserInfo().then((res) => {
        // 抛出异常
        if (res.code != 1) return showToast(res.msg);
        // 关键词更改为数组格式
        res.data.keywords = res.data.keywords.split(",");
        // 赋值
        this.userInfo = res.data;
      });
    },
    // 删除关键词
    deleteKeyword(keywords) {
      deleteKeyword({ keywords }).then((res) => {
        // 抛出异常
        if (res.code != 1) return showToast(res.msg);
        // 删除成功
        showToast("删除成功");
        // 获取用户信息
        this.getUserInfo();
      });
    },
    // 道具列表
    getInnerList() {
      // 道具列表API
      getInnerList({ type: "DX" }).then((res) => {
        // 数据赋值
        this.innerList = res.data[0];
      });
    },
    // 购买会员
    buyVip() {
      // 跳转到会员购买页面
      uni.navigateTo({
        url: "/pages/user/vip",
      });
    },
    // 创建订单
    createOrder() {
      uni.showLoading({ title: "加载中" });
      // 获取支付方式
      let paytype = "wx";
      // 获取商品id
      let goods_id = this.innerList.id;
      // 创建订单API
      createOrder({ paytype, goods_id }).then((res) => {
        // sn赋值
        this.order_sn = res.data.sn;
        // 微信支付
        this.wxPay();
      });
    },
    // 微信支付
    wxPay() {
      // 微信支付API
      wxPay({ order_sn: this.order_sn }).then((res) => {
        uni.hideLoading();
        uni.requestPayment({
          provider: "wxpay",
          orderInfo: res,
          success: () => {
            // 支付成功
            this.modal.show = true;
          },
        });
      });
    },
  },
  onLoad() {
    // 获取用户信息
    this.getUserInfo();
    // 道具列表
    this.getInnerList();
  },
  components: { Head, Title },
};
</script>

<style lang="scss" scoped>
@import "./businessSubscription.scss";
</style>
