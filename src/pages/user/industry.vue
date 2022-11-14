<template>
  <view>
    <Head title="选择行业" />
    <view class="content">
      <view class="content_1">
        <view class="content_1_1" v-for="(item, index) in industry" :key="index" @click="selectIndustry(item)" :style="`background:${item.isSelect ? '#fff' : '#f6f6f6'}`">{{ item.name }}</view>
      </view>
      <view class="content_2">
        <view class="content_2_1" v-for="(item, index) in industryTwo" :key="index" @click="selectIndustryTwo(item)">{{ item.name }}</view>
      </view>
    </view>
  </view>
</template>

<script>
import Head from '../../components/Head';
import { getIndustry, getIndustryTwo } from '../../utils/api';
export default {
  data() {
    return {
      // 行业
      industry: [],
      // 选中的行业
      selectIndustryData: [],
      // 二级行业
      industryTwo: [],
      // 二级行业参数
      industryTwoParams: {},
    };
  },
  methods: {
    // 获取一级行业
    getIndustry() {
      // 获取一级行业API
      getIndustry().then(res => {
        // 循环选中值为false
        res.data.forEach(item => {
          item.isSelect = false;
        });
        // 赋值
        this.industry = res.data;
        // 默认第一为选中
        this.industry[0].isSelect = true;
        // 赋值二级行业参数为默认第一个
        this.industryTwoParams = { id: res.data[0].id };
        // 获取二级行业
        this.getIndustryTwo();
      });
    },
    // 获取二级行业
    getIndustryTwo() {
      // 获取二级行业API
      getIndustryTwo(this.industryTwoParams).then(res => {
        // 赋值
        this.industryTwo = res.data;
      });
    },
    // 选择行业
    selectIndustry(item) {
      // 赋值所有选中为false
      this.industry.forEach(item => {
        item.isSelect = false;
      });
      // 单独赋值选中
      item.isSelect = true;
      // 保存选中的行业
      this.selectIndustryData = [
        { key: 'industry_one_name', value: item.name },
        { key: 'industry_one', value: item.id },
      ];
      // 赋值二级行业参数
      this.industryTwoParams = { id: item.id };
      // 获取二级行业
      this.getIndustryTwo();
    },
    // 选择二级行业
    selectIndustryTwo(item) {
      // 保存选中的行业
      this.selectIndustryData.push({ key: 'industry_tow_name', value: item.name });
      this.selectIndustryData.push({ key: 'industry_tow', value: item.id });
      // 更改信息
      uni.$emit('updateUserInfo', this.selectIndustryData);
      // 返回上一页
      uni.navigateBack();
    },
  },
  onLoad() {
    // 获取一级行业
    this.getIndustry();
  },
  components: { Head },
};
</script>

<style lang="scss" scoped>
@import './industry.scss';
</style>
