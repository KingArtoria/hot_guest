<template>
  <view>
    <!-- 头部 -->
    <Head title="合作地区" />
    <!-- 内容 -->
    <view class="content">
      <!-- 头部选择预留位置 -->
      <view class="content_2">
        <!-- 单个选中 -->
        <view
          class="content_2_1"
          v-for="(item, index) in selectProvince"
          :key="index"
        >
          <!-- 地区名称 -->
          <text style="margin-right: 29rpx; display: block">
            {{ item.name }}
          </text>
          <!-- 删除 -->
          <text>X</text>
        </view>
      </view>
      <!-- 选择盒子 -->
      <view class="content_1">
        <!-- 左侧盒子 -->
        <view class="content_1_1">
          <!-- 单个数据 -->
          <view
            class="content_1_1_1"
            v-for="(item, index) in province"
            :key="index"
            :style="`background:${item.checked ? '#FFFFFF' : '#f5f5f5'};
            color:${item.checked ? '#317AF6' : '#414141'}`"
            @click="selectProvinceFn(item)"
            >{{ item.name }}
          </view>
        </view>
        <!-- 右侧盒子 -->
        <view class="content_1_2">
          <!-- 单个数据 -->
          <view
            class="content_1_2_1"
            v-for="(item, index) in city"
            :key="index"
            :style="`color:${item.checked ? '#317AF6' : '#414141'}`"
            @click="selectCityFn(item)"
            >{{ item.id == 0 ? item.pName : item.name }}
          </view>
          <!-- 确定按钮 -->
          <view class="content_1_2_2">
            <!-- 重置 -->
            <view
              class="content_1_2_2_1"
              @click="resetFn"
              style="border-right: 1rpx solid #fff"
              >重置</view
            >
            <!-- 确定 -->
            <view class="content_1_2_2_2" @click="saveFn">确定</view>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
import Head from "../../components/Head.vue";
import { getCity, getProvince } from "../../utils/api";
export default {
  data() {
    return {
      // 省
      province: [],
      // 市
      city: [],
      // 选择的省市
      selectProvince: [],
    };
  },
  methods: {
    // 获取省
    getProvince() {
      // 获取省API
      getProvince().then((res) => {
        // 开头加上全国
        res.data.unshift({ id: 0, name: "全国" });
        // 格式化数据
        res.data.forEach((item) => {
          // 添加父级id为0
          item.pid = 0;
          // 添加选中
          item.checked = false;
          // 删除所有省和自治区
          item.name = item.name.replace(/省|自治区/g, "");
        });
        // 默认选中第二个
        res.data[1].checked = true;
        // 数据赋值
        this.province = res.data;
        // 获取市
        this.getCity(this.province[1]);
      });
    },
    // 获取市
    getCity(item) {
      let id = item.id;
      // 打开加载
      uni.showLoading({ title: "加载中" });
      // 获取市API
      getCity({ id: item.id }).then((res) => {
        // 添加全选当第一
        res.data.unshift({ id: 0, name: item.name, pName: "全选" });
        // 格式化数据
        res.data.forEach((item) => {
          // 添加父级id
          item.pid = id;
          item.checked = false;
          // 数据如果出现在选中里,则选中
          this.selectProvince.forEach((item2) => {
            if (item2.id == item.id) item.checked = true;
          });
          // 添加选中
          // 删除所有市和自治州
          item.name = item.name.replace(/市|自治州/g, "");
        });
        // 数据赋值
        this.city = res.data;
        // 关闭加载
        uni.hideLoading();
      });
    },
    // 选中省
    selectProvinceFn(item) {
      // 取消所有选中
      this.province.forEach((item) => {
        item.checked = false;
      });
      // 选中当前
      item.checked = true;
      // 如果为0则全选
      if (item.id == 0) {
        // 重新赋值
        this.selectProvince = [{ name: "全国", id: 0 }];
        // 清空市
        this.city = [];
        return;
      }
      // 获取省
      this.getCity(item);
    },
    // 选中市
    selectCityFn(item) {
      // 删除全国
      this.selectProvince = this.selectProvince.filter(
        (item) => item.name != "全国"
      );
      // 全选
      if (item.id == 0) return this.selectAllFn(item);
      // 普通
      this.selectFn(item);
    },
    // 普通选中
    selectFn(data) {
      // 是否已被选中,如果被选中则删除
      let index = this.selectProvince.findIndex((item) => item.id == data.id);
      if (index != -1) {
        // 删除选中
        this.selectProvince.splice(index, 1);
        // 取消选中
        data.checked = false;
        return;
      }
      // 添加到数据
      this.selectProvince.push(data);
      // 添加选中
      data.checked = true;
      // 删除pid相同并且id为0的数据
      this.selectProvince = this.selectProvince.filter(
        (item) => item.pid != data.pid || item.id != 0
      );
      // 取消全选
      this.city[0].checked = false;
    },
    // 全选
    selectAllFn(data) {
      // 删除所有pid相同的选中数据
      this.selectProvince = this.selectProvince.filter(
        (item) => item.pid != data.pid
      );
      // 取消所有pid相同的选中
      this.city.forEach((item) => {
        if (item.pid == data.pid) item.checked = false;
      });
      // 添加数据
      this.selectProvince.push(data);
      // 添加选中
      data.checked = true;
    },
    // 重置
    resetFn() {
      // 取消所有选中
      this.province.forEach((item) => {
        item.checked = false;
      });
      // 取消所有选中
      this.city.forEach((item) => {
        item.checked = false;
      });
      // 清空数据
      this.selectProvince = [];
      // 默认选中第二个
      this.province[1].checked = true;
      // 获取市
      this.getCity(this.province[1]);
    },
    // 保存选中
    saveFn() {
      // 保存数据
      uni.setStorageSync("fn", JSON.stringify(this.selectProvince));
      // 返回上一页
      uni.navigateBack();
    },
  },
  onLoad() {
    // 获取省
    this.getProvince();
  },
  components: { Head },
};
</script>

<style lang="scss" scoped>
@import "./cooperativeArea.scss";
</style>