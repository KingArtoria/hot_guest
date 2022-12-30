<template>
  <view>
    <view class="head">
      <image
        class="head_1"
        src="http://39.106.208.234/pic/img_/black_icon_w.png"
        @click="_back"
      />
      <view class="head_2">
        <u-tabs
          :list="memberType"
          lineColor="#FFDA92"
          lineWidth="23rpx"
          lineHeight="5rpx"
          :inactiveStyle="{
            'font-size': '30rpx',
            'font-weight': 'bold',
            color: '#FFF',
            padding: '0 20rpx',
          }"
          :activeStyle="{
            'font-size': '30rpx',
            'font-weight': 'bold',
            color: '#FFD587',
            padding: '0 20rpx',
          }"
          :itemStyle="{ height: '80rpx' }"
          @click="changeMember"
          :current="index"
        />
      </view>
    </view>
    <view class="content">
      <!-- 会员卡 -->
      <view class="content_1">
        <view
          class="content_1_1"
          :style="`background-image: url(${memberCard.url});background-size: 100%;background-repeat: no-repeat;`"
        >
          <view class="content_1_1_1" :style="`color:${memberCard.sizeColor}`">
            NO.{{ _userInfo.id }}
          </view>
          <view class="content_1_1_2">
            <view class="content_1_1_2_1">
              <image class="content_1_1_2_1_1" :src="_userInfo.head" />
              <view class="content_1_1_2_1_2">
                <view
                  class="content_1_1_2_1_2_1"
                  :style="`color:${memberCard.sizeColor}`"
                >
                  {{ _userInfo.nick_name }}
                </view>
                <view
                  class="content_1_1_2_1_2_1"
                  :style="`color:${memberCard.sizeColor}`"
                >
                  {{ _userInfo.maxvip_endtime }}
                </view>
              </view>
            </view>
            <view class="content_1_1_2_2">续费</view>
          </view>
        </view>
      </view>
      <!-- 分界线 -->
      <image
        class="content_2"
        src="http://39.106.208.234/pic/img_/fengx@2x.png"
      />
      <!-- 价格 -->
      <view class="content_3">
        <view class="content_3_1">{{ memberCard.tagText }}</view>
        <view class="content_3_2">
          <view class="content_3_2_1">{{ memberCard.name }}</view>
          <view class="content_3_2_2">
            <view class="content_3_2_2_1" v-if="!memberCard.discount > 0">{{
              memberCard.price
            }}</view>
            <view class="content_3_2_2_1" v-if="memberCard.discount > 0">{{
              memberCard.price - memberCard.discount
            }}</view>
            <view class="content_3_2_2_2">元</view>
          </view>
        </view>
        <view class="content_3_3">{{ memberCard.info }}</view>
        <!-- 原价 -->
        <view class="content_3_4" v-if="memberCard.discount > 0">
          原价：{{ memberCard.price }}元
        </view>
      </view>
      <!-- 支付方式 -->
      <view class="content_4">
        <view class="content_4_1" v-if="_type == 'and'">选择支付方式</view>
        <view class="content_4_2" @click="payType = 1" v-if="_type == 'and'">
          <view class="content_4_2_1">
            <image
              class="content_4_2_1_1"
              src="http://39.106.208.234/pic/img_/zk.png"
            />
            <view class="content_4_2_1_2">抵用券</view>
          </view>
          <view class="content_4_2_3">-￥{{memberCard.discount}}</view>
        </view>
        <view class="content_4_2" @click="payType = 1" v-if="_type == 'and'">
          <view class="content_4_2_1">
            <image
              class="content_4_2_1_1"
              src="http://39.106.208.234/pic/img_/wechat_pay.png"
            />
            <view class="content_4_2_1_2">微信支付</view>
          </view>
          <image
            class="content_4_2_2"
            src="http://39.106.208.234/pic/img_/bq_xz_b.png"
            v-show="payType == 1"
          />
          <image
            class="content_4_2_2"
            src="http://39.106.208.234/pic/img_/wx_kong.png"
            v-show="payType == 0"
          />
        </view>
        <view class="content_4_2" @click="payType = 0" v-if="_type == 'and'">
          <view class="content_4_2_1">
            <image
              class="content_4_2_1_1"
              src="http://39.106.208.234/pic/img_/apay.png"
            />
            <view class="content_4_2_1_2">支付宝支付</view>
          </view>
          <image
            class="content_4_2_2"
            src="http://39.106.208.234/pic/img_/bq_xz_b.png"
            v-show="payType == 0"
          />
          <image
            class="content_4_2_2"
            src="http://39.106.208.234/pic/img_/wx_kong.png"
            v-show="payType == 1"
          />
        </view>
        <view class="content_4_3" v-if="_type == 'ios'"
          >到期后自动续费，可随时取消</view
        >
        <view class="content_4_4" @click="createOrder">
          限时特惠{{ memberCard.price - memberCard.discount }}元开通
        </view>
        <view class="content_4_5">
          <!-- <u-checkbox-group activeColor="#C38E5B" inactiveColor="#C38E5B">
            <u-checkbox />
          </u-checkbox-group> -->
          <view class="content_4_5_1">
            <view class="content_4_5_1_1">我已阅读开通VIP的</view>
            <view class="content_4_5_1_2" @click="goMemberAgreement">
              相关协议
            </view>
          </view>
        </view>
      </view>
      <!-- 灰色分界线 -->
      <view class="content_5" />
      <!-- 特权 -->
      <image class="content_6" src="http://39.106.208.234/pic/img_/tq.png" />
    </view>
    <!-- 支付成功模态框 -->
    <u-modal
      :show="modal.show"
      :title="modal.title"
      :content="modal.content"
      @confirm="modal.confirm"
    />
  </view>
</template>

<script>
import { formatTime } from "../../utils";
import {
  aliPay,
  applePayCheck,
  createOrder,
  getInnerList,
  wxPay,
} from "../../utils/api";
import { MEMBER_CARD, MEMBER_TYPE } from "../../utils/const";
export default {
  data() {
    return {
      // 会员类型
      memberType: [],
      // 会员卡片
      memberCard: {},
      // 会员下标
      index: 0,
      // 内购列表
      innerList: [],
      // 支付方式
      payType: 1,
      // 支付sn
      order_sn: "",
      // 支付成功模态框
      modal: {
        show: false,
        title: "支付成功",
        content: "您已成功开通会员",
        confirm: () => {
          this.modal.show = false;
          uni.navigateBack();
        },
      },
    };
  },
  methods: {
    // 初始化参数
    initParams() {
      this.memberType = MEMBER_TYPE;
      // 默认赋值会员卡片
      this.memberCard = MEMBER_CARD[0];
    },
    // 内购列表
    getInnerList(op) {
      getInnerList({ type: "HY" }).then((res) => {
        // 内购列表赋值
        this.innerList = res.data;
        // 价格赋值
        this.memberCard.price = Number(res.data[this.index + 1].price);
        // 优惠价格赋值
        this.memberCard.discount = Number(res.data[this.index + 1].discount);
        // 会员id赋值
        this.memberCard.id = res.data[this.index + 1].id;
        // 会员key赋值
        this.memberCard.key = res.data[this.index + 1].key;
        // 调用切换列表
        op.index = op.index || 0;
        this.changeMember({ index: op.index });
        // 刷新数据
        this.$forceUpdate();
      });
    },
    // 切换会员
    changeMember(e) {
      // 赋值卡片
      this.memberCard = MEMBER_CARD[e.index];
      // 赋值价格
      this.memberCard.price = Number(this.innerList[Number(e.index) + 1].price);
      // 优惠价格赋值
      this.memberCard.discount = Number(
        this.innerList[Number(e.index) + 1].discount
      );
      // 会员id赋值
      this.memberCard.id = this.innerList[Number(e.index) + 1].id;
      // 会员key赋值
      this.memberCard.key = this.innerList[Number(e.index) + 1].key;
      // 赋值下标
      this.index = e.index;
    },
    // 前往会员协议
    goMemberAgreement() {
      plus.runtime.openURL("http://hyxy.bdhuoke.com/");
    },
    // 创建订单
    createOrder() {
      if (this._type == "ios") {
        this.iosPay();
        return;
      }
      uni.showLoading({ title: "加载中" });
      // 获取支付方式
      let paytype = this.payType == 0 ? "zfb" : "wx";
      // 获取商品id
      let goods_id = this.memberCard.id;
      // 创建订单API
      createOrder({ paytype, goods_id }).then((res) => {
        // sn赋值
        this.order_sn = res.data.sn;
        // 微信支付
        if (paytype == "wx") this.wxPay();
        // 支付宝支付
        else this.aliPay();
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
    // 支付宝支付
    aliPay() {
      // 支付宝支付API
      aliPay({ order_sn: this.order_sn }).then((res) => {
        uni.hideLoading();
        res = this.escape2Html(res);
        uni.requestPayment({
          provider: "alipay",
          orderInfo: res,
          success: () => {
            // 支付成功
            this.modal.show = true;
          },
        });
        console.log(res);
      });
    },
    // 支付宝转码
    escape2Html(str) {
      var arrEntities = { lt: "<", gt: ">", nbsp: " ", amp: "&", quot: '"' };
      return str.replace(/&(lt|gt|nbsp|amp|quot);/gi, function (all, t) {
        return arrEntities[t];
      });
    },
    /* 苹果支付 */ iosPay() {
      uni.showLoading({ title: "加载中" });
      plus.payment.getChannels((channels) => {
        channels.forEach((item) => {
          let ids = ["HY_PTHY_12", "HY_CJHY", "HY_QYHY"];
          if (item.id === "appleiap") {
            item.requestOrder(
              ids,
              () => {
                console.log("商品key", this.memberCard.key);
                let productid = this.memberCard.key;
                console.log("会员id", this._userInfo.id);
                plus.payment.request(
                  item,
                  {
                    productid,
                    username: this._userInfo.id,
                    optimize: false,
                  },
                  (result) => {
                    // 苹果支付校验API
                    applePayCheck({
                      receipt_data: JSON.stringify(result),
                      type: productid,
                    }).then((res) => {
                      console.log(res, "res");
                      // 抛出异常
                      if (res.code != 1) return showToast(res.msg);
                    });
                    console.log(result, "result");
                    uni.hideLoading();
                  },
                  () => showToast("支付失败,无法连接到 iTunes Store")
                );
              },
              () => showToast("获取订单失败")
            );
          }
        });
      });
    },
  },
  onLoad(op) {
    // 初始化参数
    this.initParams();
    // 内购列表
    this.getInnerList(op);
    // 初始化会员到期时间
    if (this._userInfo.maxvip_endtime != 0) {
      let end = this._userInfo.maxvip_endtime;
      this._userInfo.maxvip_endtime = `${formatTime(
        end * 1000,
        "yyyy-MM-dd"
      )}到期`;
    } else this._userInfo.maxvip_endtime = "未开通";
  },
};
</script>

<style lang="scss" scoped>
@import "./vip.scss";
</style>