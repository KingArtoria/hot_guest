<template>
  <view>
    <!-- 头部 -->
    <view class="head">
      <!-- 盒子 -->
      <view class="head_1">
        <!-- 返回 -->
        <view class="head_1_1" @click="back">
          <!-- 图标 -->
          <image
            class="head_1_1_1"
            src="http://39.106.208.234/pic/img_/black_ss.png"
          />
        </view>
        <!-- 信息 -->
        <view class="head_1_2">
          <!-- 名字 -->
          <view class="head_1_2_1">{{ info.nick_name }}</view>
          <!-- 公司 -->
          <view class="head_1_2_2">{{ info.company }}</view>
        </view>
        <!-- 更多 -->
        <view class="head_1_3">
          <!-- 图标 -->
          <image
            class="head_1_3_1"
            src="http://39.106.208.234/pic/img_/diandiandian.png"
          />
        </view>
      </view>
    </view>
    <!-- 内容 -->
    <view class="content">
      <!-- 联系方式 -->
      <view class="content_1">
        <!-- 单个盒子 -->
        <view class="content_1_1">
          <!-- 图标 -->
          <image
            class="content_1_1_1"
            src="http://39.106.208.234/pic/img_/dadianh@2x.png"
          />
          <!-- 文案 -->
          <view class="content_1_1_2">打电话</view>
        </view>
        <!-- 单个盒子 -->
        <view class="content_1_1">
          <!-- 图标 -->
          <image
            class="content_1_1_1"
            src="http://39.106.208.234/pic/img_/jiaweixin@2x.png"
          />
          <!-- 文案 -->
          <view class="content_1_1_2">加微信</view>
        </view>
        <!-- 单个盒子 -->
        <view class="content_1_1">
          <!-- 图标 -->
          <image
            class="content_1_1_1"
            src="http://39.106.208.234/pic/img_/pingtjy@2x.png"
          />
          <!-- 文案 -->
          <view class="content_1_1_2">平台交易</view>
        </view>
      </view>
      <!-- 友情提示 -->
      <view class="content_2" v-if="tip == true">
        <!-- 左侧盒子 -->
        <view class="content_2_1">
          <!-- icon -->
          <image
            class="content_2_1_1"
            src="http://39.106.208.234/pic/img_/anquan@2x.png"
          />
          <!-- 文案 -->
          <view class="content_2_1_2"
            >在聊天过程中若发布违规内容，请举报。</view
          >
        </view>
        <!-- 叉号 -->
        <view class="content_2_2" @click="tip = false">x</view>
      </view>
      <!-- 聊天界面 -->
      <view class="content_3">
        <view v-for="(item, index) in list" :key="index">
          <!-- 左 -->
          <view
            class="content_3_1"
            style="justify-content: flex-start"
            v-if="item.type == 2"
          >
            <!-- 头像 -->
            <image class="content_3_1_1" :src="item.head" />
            <!-- 信息 -->
            <view class="content_3_1_2">{{ item.text }}</view>
          </view>
          <!-- 右 -->
          <view
            class="content_3_1"
            style="justify-content: flex-end"
            v-if="item.type == 1"
          >
            <!-- 信息 -->
            <view class="content_3_1_2">{{ item.text }}</view>
            <!-- 头像 -->
            <image class="content_3_1_1" :src="item.head" />
          </view>
        </view>
      </view>
    </view>
    <!-- 输入框 -->
    <view class="input">
      <!-- 常用语 -->
      <view class="input_1">常用语</view>
      <!-- 输入框盒子 -->
      <view class="input_2">
        <!-- 输入框 -->
        <u-input
          placeholder="新信息"
          border="none"
          fontSize="28rpx"
          style="height: 70rpx"
          v-model="text"
          confirmType="send"
          @confirm="privateChat"
        />
      </view>
      <!-- 更多 -->
      <image class="input_3" src="http://39.106.208.234/pic/img_/jianhao.png" />
    </view>
  </view>
</template>

<script>
import GoEasy from "goeasy";
import { getOtherUserInfo } from "../../utils/api";
export default {
  data() {
    return {
      // id
      id: "",
      // 信息
      info: {},
      // 消息
      text: "",
      // 消息列表
      list: [],
      // 提示
      tip: true,
    };
  },
  methods: {
    // 返回上一页
    back() {
      uni.navigateBack();
    },
    // 拨打电话
    call() {
      // 拨打电话
      uni.makePhoneCall({
        phoneNumber: this.info.phone,
      });
    },
    // 复制微信
    copy() {
      // 复制微信
      uni.setClipboardData({
        data: this.info.wechat,
        success: function () {
          uni.showToast({
            title: "复制成功",
            icon: "none",
          });
        },
      });
    },
    // 他人个人信息
    getOtherUserInfo() {
      // 他人个人信息API
      getOtherUserInfo({ toid: this.id }).then((res) => {
        /// 头像格式化
        if (res.data.head.indexOf("http") === -1) {
          res.data.head = `${this._avatarUrl}${res.data.head}`;
        }
        // 赋值
        this.info = res.data;
      });
    },
    // 发送消息
    privateChat() {
      var im = this.goeasy.im;
      //创建消息, 内容最长不超过3K，可以发送字符串，对象和json格式字符串
      let textMessage = im.createTextMessage({
        //消息内容
        text: this.text,
        to: {
          //私聊还是群聊，群聊为GoEasy.IM_SCENE.GROUP
          type: GoEasy.IM_SCENE.PRIVATE,
          // 对方id
          id: this.id,
          //好友扩展数据, 任意格式的字符串或者对象，用于更新会话列表conversation.data
          data: {
            // 头像
            head: this.info.head,
            // 名字
            nickName: this.info.nick_name,
            // 公司
            company: this.info.company,
            // 职位
            position: this.info.position,
          },
        },
      });
      //发送消息
      im.sendMessage({
        message: textMessage,
        // 成功回调
        onSuccess: (message) => console.log(`发送成功${message}`),
        // 失败回调
        onFailed: (error) => console.log(`发送失败${error.content}`),
      });
      // 消息添加到列表
      this.list.push({
        text: this.text,
        type: 1,
        head: this._userInfo.head,
      });
      // 清空输入框
      this.text = "";
      // 保存聊天记录到缓存
      uni.setStorageSync(`chat${this.id}`, this.list);
    },
    // 消息已读
    read() {
      var im = this.goeasy.im;
      im.markPrivateMessageAsRead({
        userId: this.id, //聊天对象的userId
        onSuccess: () => console.log("已读成功"),
        onFailed: (error) => console.log(`已读失败:${error.content}`),
      });
    },
  },
  onLoad() {
    // 获取信息
    this.id = uni.getStorageSync("chat").id;
    // 他人个人信息
    this.getOtherUserInfo();
    // * 接收私聊消息
    let onPrivateMessageReceived = (message) => {
      console.log(message);
      // 判断发送人和当前聊天是不是为一个人
      if (message.senderId == this.id) {
        // 消息添加到列表
        this.list.push({
          text: message.payload.text,
          type: 2,
          head: this.info.head,
        });
        // 保存聊天记录到缓存
        uni.setStorageSync(`chat${this.id}`, this.list);
        console.log(uni.getStorageSync(`chat${this.id}`));
      }
    };
    this.goeasy.im.on(
      GoEasy.IM_EVENT.PRIVATE_MESSAGE_RECEIVED,
      onPrivateMessageReceived
    );
    // 获取聊天记录
    this.list = uni.getStorageSync(`chat${this.id}`) || [];
    // 消息已读
    this.read();
  },
  // 页面卸载
  onUnload() {
    // 消息已读
    this.read();
  },
};
</script>

<style lang="scss" scoped>
@import "./privateChat.scss";
</style>
