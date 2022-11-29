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
        <u-swiper :list="swiperList" height="200rpx" />
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
        <swiper class="swiper" style="height: 358rpx" indicator-dots>
          <swiper-item>
            <u-grid :border="false" col="5">
              <u-grid-item
                v-for="(item, index) in gridImg.slice(0, 10)"
                :key="index"
                style="margin-bottom: 35rpx"
                :name="item.url"
                @click="goGrid(item)"
              >
                <image class="content_4_1" :src="item.src" />
                <text class="content_4_2">{{ item.text }}</text>
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
                <image class="content_4_1" :src="item.src" />
                <text class="content_4_2">{{ item.text }}</text>
              </u-grid-item>
            </u-grid>
          </swiper-item>
        </swiper>
      </view>
      <!-- 标签 -->
      <u-sticky
        bgColor="#fff"
        style="padding: 0 20rpx"
        :customNavHeight="0"
        :offsetTop="0"
      >
        <u-tabs
          :list="categoryMenu"
          style="padding-bottom: 10rpx"
          :inactiveStyle="{
            'font-size': '26rpx',
            color: '#515151',
            'margin-bottom': '10rpx',
          }"
          :activeStyle="{
            'font-size': '26rpx',
            color: ' #1F73F1',
            'margin-bottom': '10rpx',
          }"
          lineWidth="42rpx"
          lineHeight="4rpx"
          @click="tagSelect"
        />
      </u-sticky>
      <!-- 内容 -->
      <view class="content_5">
        <Project :list="list" />
      </view>
    </view>
  </view>
</template>

<script>
import Project from "../../components/Project";
import { getCategoryMenu, getHomeData } from "../../utils/api";
import { ADVERTISING_IMG, GRID_IMG } from "../../utils/const";
export default {
  data() {
    return {
      swiperList: [
        "http://39.106.208.234/pic/img_/banner_3.png",
        "http://39.106.208.234/pic/img_/banner_2.png",
        "http://39.106.208.234/pic/img_/banner_1.png",
      ],
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
    };
  },
  methods: {
    /* 初始化参数 */
    initParams() {
      this.advertisingImg = ADVERTISING_IMG;
      this.gridImg = GRID_IMG;
    },
    /* 前往搜索 */
    goSearch() {
      uni.navigateTo({
        url: "/pages/index/search",
      });
    },
    /* 前往签到 */
    goCheck() {
      uni.navigateTo({
        url: "/pages/index/check",
      });
    },
    // 前往功能区
    goFunction(index) {
      switch (index) {
        case 0:
          uni.navigateTo({
            url: "/pages/index/businessCard",
          });
          break;
        case 1:
          uni.navigateTo({
            url: "/pages/enterprise/index",
          });
          break;
        case 2:
          uni.navigateTo({
            url: "/pages/index/platformTransaction",
          });
          break;
      }
    },
    // 前往广告位招租
    goAdvertisingSpaceRental() {
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
      // 类型1:跳转项目列表
      if (item.type == 1) {
        // 路由跳转
        uni.navigateTo({
          url: `/pages/index/list?title=${item.text}&id=${item.id}`,
        });
      } else {
        // 类型2:跳转配置路由
        uni.navigateTo({
          url: item.url,
        });
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
  },
  onLoad() {
    /* 初始化参数 */ this.initParams();
    // 首页数据
    this.getHomeData();
    // 分类菜单
    this.getCategoryMenu();
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
