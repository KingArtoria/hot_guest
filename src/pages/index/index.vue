<template>
  <view>
    <view class="head">
      <view class="head_1" @click="goSearch">
        <image
          class="head_1_1"
          src="http://39.106.208.234/pic/img_/sy_suo@2x.png"
        />
        <view class="head_1_2">地推 | 拉新 | 教育 | 跑量 | 阅读...</view>
      </view>
      <view class="head_2" @click="goCheck">
        <image
          class="head_2_1"
          src="http://39.106.208.234/pic/img_/qiandao.png"
        />
        <view class="head_2_2">签到</view>
      </view>
    </view>
    <view class="content">
      <!-- 轮播图 -->
      <view class="content_1">
        <u-swiper
          :list="swiperList"
          height="200rpx"
          keyName="src"
          @click="swiperClick"
        />
      </view>
      <!-- 功能区 -->
      <view class="content_2">
        <image
          class="content_2_1"
          v-for="(item, index) in advertisingImg"
          :key="index"
          :src="item"
          @click="goFunction(index)"
        />
      </view>
      <!-- 广告位入口 -->
      <image
        class="content_3"
        src="http://39.106.208.234/pic/img_/sy_ggtf@2x.png"
        @click="goAdvertisingSpaceRental"
      />
      <!-- 宫格 -->
      <view class="content_4">
        <swiper
          class="swiper"
          style="height: 370rpx"
          indicator-dots
          indicator-color="#E3E3E3"
          indicator-active-color="#1F73F1"
        >
          <swiper-item>
            <u-grid :border="false" col="5">
              <u-grid-item
                v-for="(item, index) in gridImg.slice(0, 10)"
                :key="index"
                style="margin-bottom: 35rpx"
                :name="item.url"
                @click="goGrid(item)"
              >
                <image class="content_4_1" :src="item.img" />
                <text class="content_4_2">{{ item.title }}</text>
              </u-grid-item>
            </u-grid>
          </swiper-item>
          <swiper-item>
            <u-grid :border="false" col="5">
              <u-grid-item
                v-for="(item, index) in gridImg.slice(10)"
                :key="index"
                style="margin-bottom: 35rpx"
                :name="item.url"
                @click="goGrid(item)"
              >
                <image class="content_4_1" :src="item.img" />
                <text class="content_4_2">{{ item.title }}</text>
              </u-grid-item>
            </u-grid>
          </swiper-item>
        </swiper>
      </view>
      <!-- 标签 -->
      <u-sticky
        bgColor="#fff"
        style="padding: 0 20rpx; margin-top: 20rpx"
        :customNavHeight="0"
        :offsetTop="0"
      >
        <u-tabs
          :list="categoryMenu"
          style="padding-bottom: 10rpx"
          :inactiveStyle="{
            'font-size': '28rpx',
            color: '#1A1A1A',
            'margin-bottom': '10rpx',
          }"
          :activeStyle="{
            'font-size': '28rpx',
            color: ' #1A1A1A',
            'margin-bottom': '10rpx',
            'font-weight': 'bold',
          }"
          lineWidth="42rpx"
          lineHeight="6rpx"
          @click="tagSelect"
        />
      </u-sticky>
      <!-- 内容 -->
      <view class="content_5">
        <Project :list="list" />
      </view>
    </view>
    <!-- 登录模态框 -->
    <u-modal
      showCancelButton
      :show="loginModal.show"
      :title="loginModal.title"
      :content="loginModal.content"
      @confirm="loginModal.confirm"
      @cancel="loginModal.cancel"
    />
    <!-- 首页弹窗模板1 -->
    <u-overlay :show="hm1.show" @click="modalClose">
      <image
        class="homeModal"
        :src="hm1.src"
        :style="hm1.style"
        @click.stop="modalClick"
      />
    </u-overlay>
    <!-- 首页弹窗模板2 -->
    <u-overlay :show="hm2.show" @click="modalClose">
      <!-- 盒子 -->
      <view class="hm2" :style="hm2.style">
        <!-- 二维码 -->
        <image class="hm2_1" :src="hm2.code" />
        <!-- 标题 -->
        <view class="hm2_2">{{ hm2.title }}</view>
        <!-- 详细文档 -->
        <view class="hm2_3">{{ hm2.text }}</view>
        <!-- 按钮 -->
        <view class="hm2_4" @click.stop="saveImg">保存客服二维码</view>
      </view>
    </u-overlay>
    <!-- 首页弹窗模板3 -->
    <u-overlay :show="hm3.show" @click="modalClose">
      <!-- 弹窗盒子 -->
      <view class="hm3" :style="hm3.style">
        <!-- 标题 -->
        <view class="hm3_1">{{ hm3.title }}</view>
        <!-- 二维码 -->
        <image class="hm3_2" :src="hm3.code" />
        <!-- 文案 -->
        <view class="hm3_3">{{ hm3.text }}</view>
        <!-- 按钮 -->
        <view class="hm3_4" @click.stop="saveImg">保存客服二维码</view>
      </view>
    </u-overlay>
    <!-- 版本更新模态框 -->
    <u-modal
      :show="versionModal.show"
      :title="versionModal.title"
      :content="versionModal.content"
      @confirm="versionModal.confirm"
    />
    <!-- 版本更新弹窗 -->
    <u-popup :show="versionShow" mode="center" style="padding-bottom: 30rpx">
      <u--text text="新版本下载中..." />
      <u-line-progress
        :percentage="downloadProgress"
        activeColor="rgb(25, 190, 107)"
      />
    </u-popup>
  </view>
</template>

<script>
import Project from "../../components/Project";
import { showToast } from "../../utils";
import {
  checkVersion,
  getActivityPopup,
  getBanner,
  getCategoryMenu,
  getHomeData,
  getThemeIcon,
} from "../../utils/api";
import { ADVERTISING_IMG } from "../../utils/const";
export default {
  data() {
    return {
      swiperList: [],
      advertisingImg: [],
      gridImg: [],
      labelImg: [],
      // 首页列表参数
      params: {
        page: 1,
        num: 10,
      },
      // 首页列表数据
      list: [],
      // 分类菜单
      categoryMenu: [],
      // 登录模态框
      loginModal: {
        title: "登录提示",
        content: "您还未登录，是否前往登录？",
        show: false,
        confirm: () => {
          this.loginModal.show = false;
          // 前往登录
          uni.navigateTo({
            url: "/pages/user/login",
          });
        },
        cancel: () => (this.loginModal.show = false),
      },
      // 版本更新模态框对象
      versionModal: {
        show: false,
        title: "版本更新",
        content: "发现新版本，是否立即更新？",
        confirm: () => {
          // 打开弹出层
          this.versionShow = true;
          // 开启下载
          this.downloadApp();
        },
      },
      // 版本更新弹窗
      versionShow: false,
      // 下载进度
      downloadProgress: 0,
      // 弹窗模板1
      hm1: {},
      // 弹窗模板2
      hm2: {},
      // 弹窗模板3
      hm3: {},
      // 当前弹窗进度
      currentProgress: 1,
      // 活动弹窗
      activityPopup: [],
    };
  },
  methods: {
    /* 初始化参数 */
    initParams() {
      this.advertisingImg = ADVERTISING_IMG;
    },
    /* 前往搜索 */
    goSearch() {
      // 判断是否登录
      if (!uni.getStorageSync("token")) return (this.loginModal.show = true);
      // 路由跳转
      uni.navigateTo({
        url: "/pages/index/search",
      });
    },
    /* 前往签到 */
    goCheck() {
      // 判断是否登录
      if (!uni.getStorageSync("token")) return (this.loginModal.show = true);
      uni.navigateTo({
        url: "/pages/index/check",
      });
    },
    // 前往功能区
    goFunction(index) {
      // 是否登录
      if (!uni.getStorageSync("token")) return (this.loginModal.show = true);
      switch (index) {
        case 0:
          uni.navigateTo({
            url: "/pages/index/platformTransaction",
          });
          break;
        case 1:
          uni.navigateTo({
            url: "/pages/enterprise/index",
          });
          break;
        case 2:
          uni.navigateTo({
            url: "/pages/index/qualification",
          });
          break;
      }
    },
    // 前往广告位招租
    goAdvertisingSpaceRental() {
      // 是否登录
      if (!uni.getStorageSync("token")) return (this.loginModal.show = true);
      uni.navigateTo({
        url: "/pages/index/advertisingSpaceRental",
      });
    },
    // 首页数据
    getHomeData() {
      getHomeData(this.params).then((res) => {
        // 当页码为1时，才执行
        if (this.params.page == 1) {
          // 广告置顶
          res.data.advert_top.forEach((item) => {
            // 数组追加
            this.list.push(item);
          });
          // 超级置顶
          res.data.super_top.forEach((item) => {
            // 数组追加
            this.list.push(item);
          });
          // 普通置顶
          res.data.ordinary_top.forEach((item) => {
            // 数组追加
            this.list.push(item);
          });
        }
        // 普通数据
        res.data.list.forEach((item) => {
          // 数组追加
          this.list.push(item);
        });
        // 格式化数据
        this.list.forEach((item) => {
          // 头像格式化
          if (item.head.indexOf("http") === -1) {
            item.head = `${this._avatarUrl}${item.head}`;
          }
          // 时间删除最后3位
          item.addtime = item.addtime.slice(0, -3);
          // 不同类型展示的tag不一样(字段, 标签)
          switch (item.type) {
            case 1:
              item.k = [
                item.settcycle_id,
                `结算方式:${item.settmod_id}`,
                item.promotion,
              ];
              item.typeName = "广告甲方";
              break;
            case 2:
              item.k = [
                item.settcycle_id,
                `结算方式:${item.settmod_id}`,
                item.promotion,
              ];
              item.typeName = "流量乙方";
              break;
            case 3:
              item.k = [item.product, item.source];
              item.typeName = "优质货源";
              break;
            case 4:
              item.k = [item.settcycle_id, item.source, item.product];
              item.typeName = "销售渠道";
              break;
            case 5:
              item.k = [`提供:${item.source}`, `需求:${item.comprehensive}`];
              item.typeName = "资源互换";
              break;
            case 6:
              item.k = [`提供:${item.source}`, `需求:${item.comprehensive}`];
              item.typeName = "流量互换";
              break;
            case 7:
              item.k = [item.product, item.comprehensive];
              item.typeName = "招商加盟";
              break;
            case 8:
              item.k = [item.product, `曝光：${item.user_number}`];
              item.typeName = "线下广告";
              break;
            case 9:
              item.k = [item.product, item.comprehensive];
              item.typeName = "线下场地";
              break;
            case 10:
              item.k = [item.product];
              item.typeName = "免费福利";
              break;
            case 11:
              item.k = [
                item.settcycle_id,
                `结算方式:${item.settmod_id}`,
                item.promotion,
              ];
              item.typeName = "海外项目";
              break;
          }
          // 会员变色
          if (item.is_super == 1) item.nameColor = "#B957FD";
          else if (item.is_firm == 1) item.nameColor = "#34A1FA";
          else if (item.is_vip == 1) item.nameColor = "red";
        });
      });
    },
    // 分类菜单
    getCategoryMenu() {
      // 分类菜单API
      getCategoryMenu().then((res) => {
        // 首条插入推荐
        res.data.unshift({
          id: 0,
          name: "推荐",
        });
        // 数据赋值
        this.categoryMenu = res.data;
      });
    },
    // 宫格跳转
    goGrid(item) {
      // 路由类型=2并且未登录
      if (item.routeType == 2 && !uni.getStorageSync("token"))
        return (this.loginModal.show = true);
      switch (item.routeType) {
        case 1:
          uni.navigateTo({
            url: `/pages/index/list?title=${item.title}&id=${item.type}`,
          });
          break;
        case 2:
          uni.navigateTo({
            url: item.route,
          });
          break;
      }
    },
    // 标签选中
    tagSelect(item) {
      // 数据清空
      this.list = [];
      // 选中的id赋值
      this.params.type = item.id;
      // 页码重置
      this.params.page = 1;
      // 获取首页数据
      this.getHomeData();
    },
    // 获取主题图标
    getThemeIcon() {
      // 获取主题图标API
      getThemeIcon({ themeType: 1 }).then((res) => {
        // 赋值
        this.gridImg = res.data;
      });
    },
    // 获取活动弹窗
    getActivityPopup() {
      // 苹果跳过版本检测
      if (this._type != "ios")
        // 检测版本
        checkVersion({ version: this._version }).then((res) => {
          // code==1为更新
          if (res.code == 1) {
            // 版本更新弹窗
            this.versionModal.show = true;
          }
        });
    },
    // 弹窗点击事件
    modalClick() {
      // 是否登录
      if (!uni.getStorageSync("token")) return (this.loginModal.show = true);
      // 跳转
      uni.navigateTo({
        url: `${this.hm1.url}&userId=${this._userInfo.id}`,
      });
    },
    // 下载APP
    downloadApp() {
      var downloadTask = uni.downloadFile({
        url: "http://dw.channel.bdhuoke.com/huoke.apk",
        success: (res) => {
          uni.openDocument({ filePath: res.tempFilePath });
        },
      });
      downloadTask.onProgressUpdate((res) => {
        this.downloadProgress = res.progress;
      });
    },
    // 活动弹窗
    getActivityPopup() {
      // 活动弹窗API
      getActivityPopup().then((res) => {
        // 弹窗赋值
        this[`hm${res.data[this.currentProgress - 1].code_type}`] =
          res.data[this.currentProgress - 1];
        // 弹窗显示
        this[`hm${res.data[this.currentProgress - 1].code_type}`].show = true;
        this.activityPopup = res.data;
      });
    },
    // 弹窗关闭回调
    modalClose() {
      // 关闭弹窗
      this[
        `hm${this.activityPopup[this.currentProgress - 1].code_type}`
      ].show = false;
      // 延迟拉取下一次弹窗
      setTimeout(() => {
        // 步骤加一
        this.currentProgress++;
        // 获取活动弹窗
        this.getActivityPopup();
      }, this[`hm${this.activityPopup[this.currentProgress - 1].code_type}`].time);
      // 更新数据
      this.$forceUpdate();
    },
    // 保存图片
    saveImg() {
      // 保存图片
      uni.saveImageToPhotosAlbum({
        filePath:
          this[`hm${this.activityPopup[this.currentProgress - 1].code_type}`]
            .code,
        success: (res) => {
          showToast("保存成功");
        },
      });
    },
    // 获取轮播
    getBanner() {
      // 获取轮播API
      getBanner().then((res) => {
        // 赋值
        this.swiperList = res.data;
      });
    },
    // 轮播点击
    swiperClick(index) {
      // 是否登录
      if (!uni.getStorageSync("token")) return (this.loginModal.show = true);
      // 跳转
      uni.navigateTo({
        url: `${this.swiperList[index].url}&userId=${this._userInfo.id}`,
      });
    },
  },
  onLoad() {
    /* 初始化参数 */
    this.initParams();
    // 首页数据
    this.getHomeData();
    // 分类菜单
    this.getCategoryMenu();
    // 获取主题图标
    this.getThemeIcon();
    // 获取活动弹窗
    this.getActivityPopup();
    // 获取轮播
    this.getBanner();
  },
  // 滚动到底部
  onReachBottom() {
    // 页码+1
    this.params.page++;
    // 获取首页数据
    this.getHomeData();
  },
  components: { Project },
};
</script>

<style lang="scss" scoped>
@import "./index.scss";
</style>
