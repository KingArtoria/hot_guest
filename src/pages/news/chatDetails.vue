<template>
  <view>
    <!-- 头部 -->
    <Head title="聊天详情" style="background-color: #f6f6f6" />
    <!-- 内容 -->
    <view class="content">
      <!-- 个人页 -->
      <view class="content_1" @click="goPerson">
        <!-- 左盒子 -->
        <view class="content_1_1">个人页</view>
        <!-- 右盒子 -->
        <image
          class="content_1_2"
          src="http://39.106.208.234/pic/img_/jinr.png"
        />
      </view>
      <!-- 修改备注 -->
      <view class="content_1" @click="bottomPopupShow = true">
        <!-- 左盒子 -->
        <view class="content_1_1">修改备注</view>
        <!-- 右盒子 -->
        <image
          class="content_1_2"
          src="http://39.106.208.234/pic/img_/jinr.png"
        />
      </view>
      <!-- 删除好友 -->
      <view class="content_2" @click="delFriendModal.show = true"
        >删除好友</view
      >
    </view>
    <!-- 删除好友 -->
    <u-modal
      :show="delFriendModal.show"
      :title="delFriendModal.title"
      :content="delFriendModal.content"
      showCancelButton
      @cancel="delFriendModal.cancel"
      @confirm="delFriendModal.confirm"
    />
    <!-- 删除成功 -->
    <u-modal
      :show="delSuccessModal.show"
      :title="delSuccessModal.title"
      :content="delSuccessModal.content"
      @confirm="delSuccessModal.confirm"
    />
    <!-- 底部弹出层 -->
    <u-popup
      :show="bottomPopupShow"
      closeable
      @close="bottomPopupShow = false"
      round="20rpx"
    >
      <view class="bottomPopup">
        <!-- 标题 -->
        <view class="bottomPopup_1">输入好友备注</view>
        <!-- 输入框 -->
        <view class="bottomPopup_2">
          <u-input
            placeholder="请输入备注"
            fontSize="24rpx"
            border="none"
            :customStyle="{ height: '90rpx', 'padding-left': '61rpx' }"
            v-model="remark"
          />
        </view>
        <!-- 按钮 -->
        <view class="bottomPopup_3" @click="editRemark">提交</view>
      </view>
    </u-popup>
  </view>
</template>

<script>
import Head from "../../components/Head";
import { showToast } from "../../utils";
import { deleteFriend, editRemark } from "../../utils/api";
export default {
  data() {
    return {
      // op
      op: "",
      // 删除好友模态框对象
      delFriendModal: {
        show: false,
        title: "删除好友",
        content: "确定删除好友吗？",
        cancel: () => {
          this.delFriendModal.show = false;
        },
        confirm: () => {
          this.delFriendModal.show = false;
          this.delFriend();
        },
      },
      // 删除成功模态框对象
      delSuccessModal: {
        show: false,
        title: "删除成功",
        content: "删除成功",
        confirm: () => {
          this.delSuccessModal.show = false;
          // 返回上一页
          uni.navigateBack({
            delta: 2,
          });
        },
      },
      // 底部弹出层
      bottomPopupShow: false,
      // 备注
      remark: "",
    };
  },
  methods: {
    // 前往个人
    goPerson() {
      // 路由跳转
      uni.navigateTo({
        url: `/pages/contacts/personal?id=${this.op.id}`,
      });
    },
    // 删除好友
    delFriend() {
      deleteFriend({ toid: this.op.id }).then((res) => {
        // 抛出异常
        if (res.code != 1) return showToast(res.msg);
        // 删除成功
        this.delSuccessModal.show = true;
      });
    },
    // 修改备注
    editRemark() {
      editRemark({ toid: this.op.id, remark: this.remark }).then((res) => {
        // 抛出异常
        if (res.code != 1) return showToast(res.msg);
        // 修改成功
        showToast("修改成功");
        // 关闭遮罩
        this.bottomPopupShow = false;
      });
    },
  },
  onLoad(op) {
    // op赋值
    this.op = op;
  },
  components: { Head },
};
</script>

<style lang="scss" scoped>
@import "./chatDetails.scss";
</style>