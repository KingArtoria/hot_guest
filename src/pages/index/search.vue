<template>
  <view>
    <!-- Head头 -->
    <view class="head">
      <!-- 返回 -->
      <Fh_b />
      <!-- 搜索框盒子 -->
      <view class="head_2">
        <!-- 输入框 -->
        <u--input
          placeholder="输入关键词进行搜索"
          border="none"
          prefixIcon="search"
          prefixIconStyle="font-size: 32rpx;color: #BCBCBC"
          clearable
          v-model="params.title"
          confirmType="search"
          @confirm="search"
          fontSize="26rpx"
        />
      </view>
      <!-- 搜索按钮 -->
      <view class="head_3" @click="search('')">搜索</view>
    </view>
    <view class="content">
      <!-- 历史搜索 -->
      <view class="content_1" v-show="params.title == ''">
        <!-- 头部盒子 -->
        <view class="content_1_1">
          <!-- 标题 -->
          <view class="content_1_1_1">历史搜索</view>
          <!-- 删除图标 -->
          <image
            class="content_1_1_2"
            src="http://39.106.208.234/pic/img_/shanchu2.png"
            @click="clear"
          />
        </view>
        <!-- 内容盒子 -->
        <view class="content_1_2">
          <!-- 单个内容 -->
          <view
            class="content_1_2_1"
            v-for="(item, index) in history"
            :key="index"
            @click="search(item)"
          >
            {{ item }}
          </view>
        </view>
      </view>
      <!-- 内容列表 -->
      <view class="content_2" v-show="params.title != ''">
        <!-- 项目组件 -->
        <ProjectB v-for="(item, index) in list" :key="index" :item="item" />    
      </view>
    </view>
  </view>
</template>

<script>
import Fh_b from "../../components/Fh_b";
import ProjectB from "../../components/ProjectB";
import { showToast } from "../../utils";
import { search } from "../../utils/api";
import { LABEL_IMG } from "../../utils/const";
export default {
  data() {
    return {
      // 标签
      labelImg: [],
      // 历史记录
      history: [],
      // 搜索参数
      params: {
        page: 1,
        num: 10,
        title: "",
      },
      // 搜索列表
      list: [],
    };
  },
  methods: {
    // 搜索
    search(title = "") {
      // 有参数则赋值
      if (title != "") this.params.title = title;
      // 标题是否未空
      if (this.params.title == "") return showToast("请输入搜索内容");
      // 保存搜索内容到历史记录
      this.history.push(this.params.title);
      // 搜索API
      search(this.params).then((res) => {
        // res.data.list是否为空数组
        if (res.data.list.length == 0) return showToast("暂无数据");
        // 保存搜索列表到缓存
        uni.setStorageSync("_history", this.history);
        // 初始化列表数据
        res.data.list.forEach((item) => {
          // 初始化项目标签
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
          // 初始化用户头像
          if (item.head.indexOf("http") === -1) {
            item.head = `${this._avatarUrl}${item.head}`;
          }
        });
        // 列表赋值
        this.list = res.data.list;
      });
    },
    // 清空搜索记录
    clear() {
      this.history = [];
      uni.removeStorageSync("_history");
    },
  },
  onLoad() {
    // 标签常量
    this.labelImg = LABEL_IMG;
    // 获取历史记录
    this.history = uni.getStorageSync("_history") || [];
  },
  components: { Fh_b, ProjectB },
};
</script>

<style lang="scss" scoped>
@import "./search.scss";
</style>