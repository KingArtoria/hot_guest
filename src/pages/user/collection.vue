<template>
  <view>
    <!-- 头部 -->
    <Head title="我的收藏" style="background: #f6f6f6" />
    <!-- 内容 -->
    <view class="content">
      <u-tabs :list="labelImg" :activeStyle="tabsStyle[0]" :inactiveStyle="tabsStyle[1]" :itemStyle="tabsStyle[2]" lineColor="#3875E9" lineWidth="92rpx" lineHeight="4rpx" @click="tabsClick" />
      <!-- 列表 -->
      <view class="content_1">
        <Project :list="myCollect" />
      </view>
    </view>
  </view>
</template>

<script>
import Head from '../../components/Head';
import Project from '../../components/Project';
import { getMyCollect } from '../../utils/api';
import { LABEL_IMG } from '../../utils/const';
export default {
  data() {
    return {
      // 标签
      labelImg: [],
      // tabs样式
      tabsStyle: [{ color: '#1A1A1A', fontWeight: 'bold', 'font-size': '28rpx', padding: '0 20rpx' }, { color: '#1A1A1A', fontSize: '28rpx', padding: '0 20rpx' }, { height: '80rpx' }],
      // 我的收藏
      myCollect: [],
    };
  },
  methods: {
    // 我的收藏
    getMyCollect(type = 1) {
      // 我的收藏API
      getMyCollect({ type }).then(res => {
        // 赋值
        this.myCollect = res.data.list;
        // 格式化数据
        this.myCollect.forEach(item => {
          // 头像格式化
          if (item.head.indexOf('http') === -1) {
            item.head = `${this._avatarUrl}${item.head}`;
          }
          // 时间删除最后3位
          item.addtime = item.addtime.slice(0, -3);
          // 不同类型展示的tag不一样(字段, 标签)
          switch (item.type) {
            case 1:
              item.k = [item.settcycle_id, `结算方式:${item.settmod_id}`, item.promotion];
              item.typeName = '广告甲方';
              break;
            case 2:
              item.k = [item.settcycle_id, `结算方式:${item.settmod_id}`, item.promotion];
              item.typeName = '流量乙方';
              break;
            case 3:
              item.k = [item.product, item.source];
              item.typeName = '优质货源';
              break;
            case 4:
              item.k = [item.settcycle_id, item.source, item.product];
              item.typeName = '销售渠道';
              break;
            case 5:
              item.k = [`提供:${item.source}`, `需求:${item.comprehensive}`];
              item.typeName = '资源互换';
              break;
            case 6:
              item.k = [`提供:${item.source}`, `需求:${item.comprehensive}`];
              item.typeName = '流量互换';
              break;
            case 7:
              item.k = [item.product, item.comprehensive];
              item.typeName = '招商加盟';
              break;
            case 8:
              item.k = [item.product, `曝光：${item.user_number}`];
              item.typeName = '线下广告';
              break;
            case 9:
              item.k = [item.product, item.comprehensive];
              item.typeName = '线下场地';
              break;
            case 10:
              item.k = [item.product];
              item.typeName = '免费福利';
              break;
            case 11:
              item.k = [item.settcycle_id, `结算方式:${item.settmod_id}`, item.promotion];
              item.typeName = '海外项目';
              break;
          }
        });
      });
    },
    // tabs点击事件
    tabsClick(item) {
      this.getMyCollect(item.index + 1);
    },
  },
  onLoad() {
    // 标签赋值(转换地址)
    this.labelImg = JSON.parse(JSON.stringify(LABEL_IMG));
    // 删除第一个
    this.labelImg.shift();
    // 我的收藏
    this.getMyCollect();
  },
  components: { Head, Project },
};
</script>

<style lang="scss" scoped>
@import './collection.scss';
</style>
