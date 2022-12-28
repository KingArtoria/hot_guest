<template>
  <view>

    <Head title="编辑资料" style="background: #f6f6f6" />
    <view class="content">
      <view class="content_1">
        <view class="content_1_1">
          <view class="content_1_1_1">头像</view>
          <view class="content_1_1_2" @click="uploadAvatar">
            <image class="content_1_1_2_1" :src="userInfo.head" />
            <image class="content_1_1_2_2" :src="`${_url}xiayiy.png`" />
          </view>
        </view>
        <view class="content_1_1">
          <view class="content_1_1_1">昵称</view>
          <view class="content_1_1_2">
            <u-input v-model="userInfo.nick_name" inputAlign="right" fontSize="32rpx" border="none" />
          </view>
        </view>
      </view>
      <view class="content_1">
        <view class="content_1_1">
          <view class="content_1_1_1">真实姓名</view>
          <view class="content_1_1_2">
            <u-input v-model="userInfo.real_name" inputAlign="right" fontSize="32rpx" border="none" />
          </view>
        </view>
        <view class="content_1_1" @click="goSchool">
          <view class="content_1_1_1">毕业学校</view>
          <view class="content_1_1_2">
            <view class="content_1_1_2_3">{{ userInfo.schoolname }}</view>
            <image class="content_1_1_2_2" :src="`${_url}xiayiy.png`" />
          </view>
        </view>
        <view class="content_1_1" @click="goAddress">
          <view class="content_1_1_1">所在省市</view>
          <view class="content_1_1_2">
            <view class="content_1_1_2_3">{{ userInfo.province_name }}{{ userInfo.city_name }}</view>
            <image class="content_1_1_2_2" :src="`${_url}xiayiy.png`" />
          </view>
        </view>
        <view class="content_1_1" @click="goIndustry">
          <view class="content_1_1_1">所属行业</view>
          <view class="content_1_1_2">
            <view class="content_1_1_2_3">{{ userInfo.industry_one_name }}/{{ userInfo.industry_tow_name }}</view>
            <image class="content_1_1_2_2" :src="`${_url}xiayiy.png`" />
          </view>
        </view>
        <view class="content_1_1">
          <view class="content_1_1_1">公司</view>
          <view class="content_1_1_2">
            <u-input v-model="userInfo.company" inputAlign="right" fontSize="32rpx" border="none" />
          </view>
        </view>
        <view class="content_1_1">
          <view class="content_1_1_1">职位</view>
          <view class="content_1_1_2">
            <u-input v-model="userInfo.position" inputAlign="right" fontSize="32rpx" border="none" />
          </view>
        </view>
      </view>
      <view class="content_1">
        <view class="content_1_1">
          <view class="content_1_1_1">邀请码</view>
          <view class="content_1_1_2">
            <view class="content_1_1_2_3">{{ userInfo.Invitation_code }}</view>
          </view>
        </view>
        <view class="content_1_1">
          <view class="content_1_1_1">手机</view>
          <view class="content_1_1_2">
            <u-input v-model="userInfo.phone" inputAlign="right" fontSize="32rpx" border="none" />
          </view>
        </view>
      </view>
    </view>
    <!-- 提交按钮 -->
    <view class="btn" @click="setUserInfo">保存信息</view>
    <!-- 修改完成提示 -->
    <u-modal :show="modal.show" :title="modal.title" :content="modal.content" @confirm="modal.confirm()" />
  </view>
</template>

<script>
import Head from '../../components/Head';
import { showToast } from '../../utils';
import { updateUserInfo } from '../../utils/api';
export default {
  data() {
    return {
      // 用户信息
      userInfo: { head: '' },
      // 修改完成提示
      modal: {
        show: false,
        title: '修改成功',
        content: '您的资料已修改成功',
        confirm: () => {
          this.modal.show = false;
          this.$router.back();
        },
      },
    };
  },
  methods: {
    // 前往选择学校
    goSchool() {
      uni.navigateTo({
        url: '/pages/user/school',
      });
    },
    // 前往选择省市
    goAddress() {
      uni.navigateTo({
        url: '/pages/user/address',
      });
    },
    // 获取用户信息
    updateUserInfo() {
      updateUserInfo({ type: 'get' }).then(res => {
        // head开始是否有http
        if (res.data.head.indexOf('http') === -1) {
          res.data.head = this._avatarUrl + res.data.head;
        }
        this.userInfo = res.data;
      });
    },
    // 上传头像
    uploadAvatar() {
      uni.chooseImage({
        count: 1,
        success: res => {
          const tempFilePaths = res.tempFilePaths;
          uni.uploadFile({
            url: 'http://appv5.bdhuoke.com/app_v5/member/upload',
            filePath: tempFilePaths[0],
            name: "file",
            success: res => {
              this.userInfo.head = JSON.parse(res.data).data;
            },
          });
        },
      });
    },
    // 前往选择行业
    goIndustry() {
      uni.navigateTo({
        url: '/pages/user/industry',
      });
    },
    // 更改用户信息
    setUserInfo() {
      this.userInfo.type = 'set';
      updateUserInfo(this.userInfo).then(res => {
        if (res.code != 1) return showToast(res.msg);
        uni.$emit('getUserInfo');
        this.modal.show = true;
      });
    },
  },
  onLoad() {
    // 获取用户信息
    this.updateUserInfo();
    // 创建监听用户信息更改
    uni.$on('updateUserInfo', data => {
      data.forEach(item => {
        this.userInfo[item.key] = item.value;
      });
    });
  },
  onUnload() {
    // 移除监听
    uni.$off('updateUserInfo');
  },
  components: { Head },
};
</script>

<style lang="scss" scoped>
@import './editData.scss';
</style>
