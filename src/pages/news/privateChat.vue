<template>
  <view>
    <!-- 头部 -->
    <view class="head">
      <!-- 盒子 -->
      <view class="head_1">
        <!-- 返回 -->
        <view class="head_1_1" @click="back">
          <!-- 图标 -->
          <image class="head_1_1_1" src="http://39.106.208.234/pic/img_/black_ss.png" />
        </view>
        <!-- 信息 -->
        <view class="head_1_2">
          <!-- 名字 -->
          <view class="head_1_2_1">{{ info.nick_name }}</view>
          <!-- 公司 -->
          <view class="head_1_2_2">{{ info.company }}</view>
        </view>
        <!-- 更多 -->
        <view class="head_1_3" @click="goChatDetail">
          <!-- 图标 -->
          <image class="head_1_3_1" src="http://39.106.208.234/pic/img_/diandiandian.png" />
        </view>
      </view>
    </view>
    <!-- 内容 -->
    <view class="content">
      <!-- 联系方式 -->
      <view class="content_1">
        <!-- 单个盒子 -->
        <view class="content_1_1" @click="call">
          <!-- 图标 -->
          <image class="content_1_1_1" src="http://39.106.208.234/pic/img_/dadianh@2x.png" />
          <!-- 文案 -->
          <view class="content_1_1_2">打电话</view>
        </view>
        <!-- 单个盒子 -->
        <view class="content_1_1" @click="copy">
          <!-- 图标 -->
          <image class="content_1_1_1" src="http://39.106.208.234/pic/img_/jiaweixin@2x.png" />
          <!-- 文案 -->
          <view class="content_1_1_2">加微信</view>
        </view>
        <!-- 单个盒子 -->
        <view class="content_1_1" @click="goTrade">
          <!-- 图标 -->
          <image class="content_1_1_1" src="http://39.106.208.234/pic/img_/pingtjy@2x.png" />
          <!-- 文案 -->
          <view class="content_1_1_2">平台交易</view>
        </view>
      </view>
      <!-- 友情提示 -->
      <view class="content_2" v-if="tip == true">
        <!-- 左侧盒子 -->
        <view class="content_2_1">
          <!-- icon -->
          <image class="content_2_1_1" src="http://39.106.208.234/pic/img_/anquan@2x.png" />
          <!-- 文案 -->
          <view class="content_2_1_2">在聊天过程中若发布违规内容，请举报。</view>
        </view>
        <!-- 叉号 -->
        <view class="content_2_2" @click="tip = false">x</view>
      </view>
      <!-- 聊天界面 -->
      <view class="content_3" style="padding-bottom: 150rpx">
        <view v-for="(item, index) in list" :key="index">
          <!-- 左 -->
          <view class="content_3_1" style="justify-content: flex-start" v-if="item.typeText == 2">
            <!-- 头像 -->
            <image class="content_3_1_1" :src="info.head" />
            <!-- 信息 -->
            <view class="content_3_1_2">{{ item.payload.text }}</view>
          </view>
          <!-- 右 -->
          <view class="content_3_1" style="justify-content: flex-end" v-if="item.typeText == 1">
            <!-- 信息 -->
            <view class="content_3_1_2">{{ item.payload.text }}</view>
            <!-- 头像 -->
            <image class="content_3_1_1" :src="_userInfo.head" />
          </view>
        </view>
      </view>
    </view>
    <!-- 输入框 -->
    <view class="input">
      <!-- 输入 -->
      <view class="input_1">
        <!-- 常用语 -->
        <view class="input_1_1" @click="openCommon">常用语</view>
        <!-- 输入框盒子 -->
        <view class="input_1_2">
          <!-- 输入框 -->
          <u-input placeholder="新信息" border="none" fontSize="28rpx" style="height: 70rpx" v-model="text"
            confirmType="send" @confirm="privateChat" />
        </view>
        <!-- 更多 -->
        <image class="input_1_3" src="http://39.106.208.234/pic/img_/jianhao.png" @click="openMore" :style="`
        transform: rotate(${offset});`" />
      </view>
      <!-- 更多 -->
      <view class="input_2" v-show="moreOpen">
        <!-- 拍摄 -->
        <view class="input_2_1" @click="openAlbum">
          <!-- 图标 -->
          <image class="input_2_1_1" src="http://39.106.208.234/pic/img_/paishe.png" />
          <!-- 文本 -->
          <view class="input_2_1_2">拍摄</view>
        </view>
        <!-- 照片 -->
        <view class="input_2_1" @click="openAlbum">
          <!-- 图标 -->
          <image class="input_2_1_1" src="http://39.106.208.234/pic/img_/zhaopian.png" />
          <!-- 文本 -->
          <view class="input_2_1_2">照片</view>
        </view>
      </view>
      <!-- 常用语 -->
      <view class="input_3" v-show="commonOpen">
        <!-- 列表 -->
        <view class="input_3_1">
          <!-- 单个常用语 -->
          <view class="input_3_1_1" v-for="(item, index) in common" :key="index" @click="selectCommon(item)">
            {{ item }}
          </view>
        </view>
        <!-- 功能区 -->
        <view class="input_3_2">
          <!-- 添加 -->
          <view class="input_3_2_1" @click="goAddCommon">
            <!-- 图标 -->
            <image class="input_3_2_1_1" src="http://39.106.208.234/pic/img_/tianjai@2x.png" />
            <!-- 添加 -->
            <view class="input_3_2_1_2">添加</view>
          </view>
          <!-- 管理 -->
          <view class="input_3_2_1" @click="editCommon">
            <!-- 图标 -->
            <image class="input_3_2_1_1" src="http://39.106.208.234/pic/img_/guanli.png" />
            <!-- 添加 -->
            <view class="input_3_2_1_2">管理</view>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
import GoEasy from "goeasy";
import { getOtherUserInfo } from "../../utils/api";
import { showToast } from "../../utils";
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
      // 滚动位置
      scrollTop: 10000,
      // 常用语
      common: [],
      // 常用语是否打开
      commonOpen: false,
      // 更多是否打开
      moreOpen: false,
      // 偏移度
      offset: '0deg',
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
      // 微信是否为空
      if (this.info.wechat_name == "") {
        showToast("对方暂未填写微信");
        return;
      }
      // 复制微信
      uni.setClipboardData({
        data: this.info.wechat_name,
        success: () => {
          showToast("复制成功");
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
    // 前往平台交易
    goTrade() {
      uni.navigateTo({
        url: "/pages/index/platformTransaction",
      });
    },
    // 前往聊天详情
    goChatDetail() {
      uni.navigateTo({
        url: `/pages/news/chatDetails?id=${this.id}`,
      });
    },
    // 获取历史消息
    getHistory() {
      this.goeasy.im.history({
        userId: this.id + "",
        lastTimestamp: null,
        limit: 30,
        onSuccess: (result) => {
          // 初始化数据
          result.content.forEach((item) => {
            // 判断发送人是否为自己
            if (item.senderId == this._userInfo.id) item.typeText = 1;
            else item.typeText = 2;
          });
          // 赋值
          this.list = result.content;
        },
        onFailed: (error) => console.log(`获取失败${error.content}`),
      });
    },
    // 发送消息
    privateChat() {
      var im = this.goeasy.im;
      let textMessage = im.createTextMessage({
        text: this.text,
        to: {
          type: GoEasy.IM_SCENE.PRIVATE,
          id: this.id + "",
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
      // 清空输入框
      this.text = "";
      //发送消息
      im.sendMessage({
        message: textMessage,
        onSuccess: (message) => {
          // 添加消息
          message.typeText = 1;
          this.list.push(message);
          // 滚动到页面底部
          this.scrollTop += 1000;
          setTimeout(() => {
            uni.pageScrollTo({ scrollTop: this.scrollTop, duration: 0 });
          }, 50);
        },
        onFailed: (error) => console.log(`发送失败${error.content}`),
      });
    },
    // 接收私聊消息
    receivePrivateChat() {
      var onPrivateMessageReceived = (message) => {
        // 如果接受的id和当前聊天人id一样就添加到数组
        if (message.senderId == this.id) {
          // 添加消息
          message.typeText = 2;
          this.list.push(message);
          // 滚动到页面底部
          this.scrollTop += 1000;
          setTimeout(() => {
            uni.pageScrollTo({ scrollTop: this.scrollTop, duration: 0 });
          }, 50);
        }
      };
      //监听和接收单聊消息
      this.goeasy.im.on(
        GoEasy.IM_EVENT.PRIVATE_MESSAGE_RECEIVED,
        onPrivateMessageReceived
      );
    },
    // 已读消息
    readMessage() {
      this.goeasy.im.markMessageAsRead({
        id: this.id + "",
        type: GoEasy.IM_SCENE.PRIVATE,
        onSuccess: function () {
          console.log("标记私聊已读成功");
        },
        onFailed: function (error) {
          console.log("标记私聊已读失败", error);
        },
      });
    },
    // 前往添加常用语
    goAddCommon() {
      uni.navigateTo({
        url: "/pages/news/addPhrases",
      });
    },
    // 编辑常用语
    editCommon() {
      uni.navigateTo({
        url: "/pages/news/managementIdioms",
      });
    },
    // 打开常用语
    openCommon() {
      // 清除旋转
      this.offset = '45deg'
      // 打开常用语
      this.commonOpen = !this.commonOpen;
      // 关闭更多
      this.moreOpen = false;
    },
    // 打开更多
    openMore() {
      // 旋转
      this.offset = this.offset == '0deg' ? '45deg' : '0deg'
      // 打开更多
      this.moreOpen = !this.moreOpen;
      // 关闭常用语
      this.commonOpen = false;
    },
    // 选中常用语
    selectCommon(item) {
      // 添加到输入框
      this.text += item;
      // 发送私信
      this.privateChat();
      // 关闭常用语
      this.commonOpen = false;
    },
    // 打开相册
    openAlbum() {
      // 关闭更多
      this.moreOpen = false;
      // 打开相册
      uni.chooseImage({
        count: 1,
        sizeType: ["original", "compressed"],
        sourceType: ["album"],
        success: (res) => {
          let im = this.goeasy.im;
          console.log(res, "选中图片");
          //图片消息
          let message = im.createImageMessage({
            file: res.tempFilePaths,
            to: {
              type: GoEasy.IM_SCENE.PRIVATE,
              id: this.id + "",
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
          //发送单聊消息
          im.sendMessage({
            message,
            onSuccess: (message) => {
              //发送成功
              console.log("Message sent successfully.", message);
            },
          });
        },
      });
    },
  },
  onLoad(op) {
    // 获取id
    this.id = op.id;
    // 他人个人信息
    this.getOtherUserInfo();
    // 获取历史消息
    this.getHistory();
    // 接收私聊消息
    this.receivePrivateChat();
    // 已读
    this.readMessage();
    // 滚动到页面底部
    setTimeout(() => {
      uni.pageScrollTo({ scrollTop: this.scrollTop, duration: 0 });
    }, 50);
  },
  onShow() {
    // 获取常用语
    this.common = uni.getStorageSync("common");
  },
  // 页面卸载
  onUnload() {
    // 已读
    this.readMessage();
  },
};
</script>

<style lang="scss" scoped>
@import "./privateChat.scss";
</style>
