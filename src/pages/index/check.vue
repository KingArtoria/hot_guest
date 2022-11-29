<template>
  <view>
    <Head title="签到中心" />
    <view class="content">
      <!-- 签到信息 -->
      <view class="content_1">
        <!-- <view class="content_1_1">签到规则</view> -->
        <view class="content_1_2">2022年已连续签到</view>
        <view class="content_1_3">
          <view class="content_1_3_1">
            <view
              class="content_1_3_1_1"
              v-for="(item, index) in signInfo.days"
              :key="index"
              >{{ item }}</view
            >
          </view>
          <view class="content_1_3_2">天</view>
        </view>
        <view class="content_1_4">总积分：{{ signInfo.integral }}</view>
      </view>
      <!-- 签到天数 -->
      <view class="content_2">
        <view class="content_2_1">
          <!-- <view
            class="content_2_1_1"
            v-for="(item, index) in signInfo.integrallsst"
            :key="index"
          >
            <view class="content_2_1_1_1">
              <image
                class="content_2_1_1_1_1"
                src="http://39.106.208.234/pic/img_/xz_w_g.png"
              />
            </view>
            <view class="content_2_1_1_2">第{{ index + 1 }}天</view>
          </view>
          <view class="content_2_1_1">
            <view class="content_2_1_1_1">
              <image
                class="content_2_1_1_1_1"
                src="http://39.106.208.234/pic/img_/xz_w_g.png"
              />
            </view>
            <view class="content_2_1_1_2">第2天</view>
          </view>
          <view class="content_2_1_1">
            <view class="content_2_1_1_1">+100</view>
            <view class="content_2_1_1_2">第3天</view>
          </view>
          <view class="content_2_1_1">
            <view class="content_2_1_1_3">+88</view>
            <view class="content_2_1_1_2">第4天</view>
          </view>
          <view class="content_2_1_1">
            <view class="content_2_1_1_3">+88</view>
            <view class="content_2_1_1_2">第5天</view>
          </view> -->
          <view
            class="content_2_1_1"
            v-for="(item, index) in signInfo.integrallsst"
            :key="index"
          >
            <view class="content_2_1_1_3">{{ item.number }}</view>
            <view class="content_2_1_1_2">第{{ item.id }}天</view>
          </view>
          <!-- <view class="content_2_1_1">
            <view class="content_2_1_1_4">
              <image
                class="content_2_1_1_4_1"
                src="http://39.106.208.234/pic/img_/libao.png"
              />
            </view>
            <view class="content_2_1_1_2">第7天</view>
          </view> -->
        </view>
        <view class="content_2_2" @click="sign">签到</view>
      </view>
      <!-- 积分兑换 -->
      <view class="content_3">
        <view class="content_3_1">
          <view class="content_3_1_1">积分兑换</view>
          <view class="content_3_1_2" @click="goExchangeRecords">
            <view class="content_3_1_2_1">兑换记录</view>
            <image
              class="content_3_1_2_2"
              src="http://39.106.208.234/pic/img_/jinr.png"
            />
          </view>
        </view>
        <view class="content_3_2">
          <Props
            v-for="(item, index) in exchangeList"
            :key="index"
            :item="item"
            :type="3"
          />
        </view>
      </view>
    </view>
  </view>
</template>

<script>
import Head from "../../components/Head";
import Props from "../../components/Props";
import { showToast } from "../../utils";
import { getExchangeList, getSignInfo, sign } from "../../utils/api";
import { PROPS_IMG } from "../../utils/const";
export default {
  data() {
    return {
      // 道具卡
      props: [],
      // 签到信息
      signInfo: {},
      // 兑换列表
      exchangeList: [],
    };
  },
  methods: {
    // 初始化参数
    initParams() {
      this.props = PROPS_IMG;
    },
    // 前往兑换记录
    goExchangeRecords() {
      uni.navigateTo({
        url: "/pages/index/exchangeRecords",
      });
    },
    // 签到信息
    getSignInfo() {
      // 签到信息API
      getSignInfo().then((res) => {
        // 签到天数改为3个数
        let days = res.data.days.toString();
        if (days.length === 1) {
          days = "00" + days;
        } else if (days.length === 2) {
          days = "0" + days;
        }
        // 签到天数分为数组
        let daysArr = days.split("");
        // 初始化完成赋值
        res.data.days = daysArr;
        console.log(res.data.days);
        // 签到信息赋值
        this.signInfo = res.data;
      });
    },
    // 签到
    sign() {
      // 签到API
      sign().then((res) => {
        // 抛出异常
        if (res.code != 1) return showToast(res.msg);
        // 签到成功
        showToast("签到成功");
      });
    },
    // 兑换列表
    getExchangeList() {
      // 兑换列表API
      getExchangeList().then((res) => {
        // 初始化数据
        res.data.forEach((item) => {
          // 初始化道具图片
          item.image = `http://39.106.208.234${item.image}`;
        });
        // 兑换列表赋值
        this.exchangeList = res.data;
      });
    },
  },
  onLoad() {
    // 初始化参数
    this.initParams();
    // 签到信息
    this.getSignInfo();
    // 兑换列表
    this.getExchangeList();
  },
  components: { Head, Props },
};
</script>
<style lang="scss" scoped>
@import "./check.scss";
</style>