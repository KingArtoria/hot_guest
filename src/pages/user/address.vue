<template>
  <view>
    <Head title="选择地区" />
    <view class="content">
      <view class="content_1">
        <view class="content_1_1" :style="`background:${item.isSelect ? '#fff' : '#f6f6f6'}`" v-for="(item, index) in province" :key="index" @click="selectProvince(item)">{{ item.name }}</view>
      </view>
      <view class="content_2">
        <view class="content_2_1" v-for="(item, index) in city" :key="index" @click="selectCity(item)">{{ item.name }}</view>
      </view>
    </view>
  </view>
</template>

<script>
import Head from '../../components/Head';
import { getCity, getProvince } from '../../utils/api';
export default {
  data() {
    return {
      // 省份
      province: [],
      // 城市
      city: [],
      // 城市参数
      cityParams: {},
      // 选中的省
      selectProvinceData: [],
    };
  },
  methods: {
    // 获取省
    getProvince() {
      getProvince().then(res => {
        // 是否包含自治区或省,有则删除
        res.data.forEach(item => {
          item.isSelect = false;
          if (item.name.indexOf('省') !== -1 || item.name.indexOf('自治区') !== -1) {
            item.name = item.name.replace('省', '').replace('自治区', '');
          }
        });
        this.province = res.data;
        this.cityParams.id = res.data[0].id;
        res.data[0].isSelect = true;
        this.getCity();
      });
    },
    // 获取市
    getCity() {
      getCity(this.cityParams).then(res => {
        this.city = res.data;
      });
    },
    // 选择省
    selectProvince(item) {
      // 循环赋值为未选中
      this.province.forEach(item => {
        item.isSelect = false;
      });
      // 单个选中
      item.isSelect = true;
      // 赋值参数id
      this.cityParams.id = item.id;
      // 调用获取市
      this.getCity();
      // 添加数据到选中的省,用来做回调更改数据
      this.selectProvinceData = [
        { key: 'province_name', value: item.name },
        { key: 'province', value: item.id },
      ];
    },
    // 选择市
    selectCity(item) {
      // 添加数据到选中的市,用来做回调更改数据
      this.selectProvinceData.push({ key: 'city_name', value: item.name });
      this.selectProvinceData.push({ key: 'city', value: item.id });
      // 调用回调
      uni.$emit('updateUserInfo', this.selectProvinceData);
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
@import './address.scss';
</style>
