<template>
  <view>
    <view class="head">
      <Fh_b />
      <view class="head_2">
        <view class="head_2_1" style="color:#fff">待使用</view>
        <view class="head_2_1" style="color:#2a2a2a">已使用</view>
        <view class="head_2_2" />
      </view>
      <view class="head_3" />
    </view>
    <view class="content">
      <Props :item="item" v-for="(item, index) in propsData" :key="index" :type="2" />
    </view>
  </view>
</template>

<script>
import Fh_b from '../../components/Fh_b'
import Props from '../../components/Props'
import { PROPS_IMG } from '../../utils/const'
export default {
  data() {
    return {
      propsData: []
    }
  },
  methods: {
    initParams() {
      this.propsData = PROPS_IMG
    }
  },
  onLoad() {
    this.initParams()
  },
  components: { Fh_b, Props }
}
</script>   
<style lang="scss" scoped>
@import './exchangeRecords.scss';
</style>