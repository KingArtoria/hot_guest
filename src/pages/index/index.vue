<template>
	<view>
		<view class="head">
			<view class="head_1" @click="goSearch">
				<image class="head_1_1" src="http://39.106.208.234/pic/img_/sy_suo@2x.png" />
				<view class="head_1_2">地推 | 拉新 | 教育 | 跑量 | 阅读...</view>
			</view>
			<view class="head_2" @click="goCheck">
				<image class="head_2_1" src="http://39.106.208.234/pic/img_/qiandao.png" />
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
				<image class="content_2_1" v-for="(item, index) in advertisingImg" :key="index" :src="item"
					@click="goFunction(index)" />
			</view>
			<!-- 广告位入口 -->
			<image class="content_3" src="http://39.106.208.234/pic/img_/sy_ggtf@2x.png" />
			<!-- 宫格 -->
			<view class="content_4">
				<u-grid :border="false" col="5">
					<u-grid-item v-for="(item, index) in gridImg" :key="index" style="margin-bottom: 35rpx;" :name="item.url">
						<image class="content_4_1" :src="item.src" />
						<text class="content_4_2">{{ item.text }}</text>
					</u-grid-item>
				</u-grid>
			</view>
			<!-- 标签 -->
			<u-sticky bgColor="#fff" style="padding:0 20rpx" :customNavHeight="0" :offsetTop="0">
				<u-tabs :list="labelImg" :activeStyle="{ color: '#303133', fontWeight: 'bold', transform: 'scale(1.05)' }"
					:inactiveStyle="{ color: '#606266', transform: 'scale(1)' }" />
			</u-sticky>
			<!-- 内容 -->
			<view class="content_5">
				<Project />
				<Project />
				<Project />
				<Project />
				<Project />
			</view>
		</view>
	</view>
</template>

<script>
import Project from '../../components/Project'
import { ADVERTISING_IMG, GRID_IMG, LABEL_IMG } from '../../utils/const'
export default {
	data() {
		return {
			swiperList: ['http://39.106.208.234/pic/img_/banner_3.png', 'http://39.106.208.234/pic/img_/banner_2.png', 'http://39.106.208.234/pic/img_/banner_1.png'],
			advertisingImg: [],
			gridImg: [],
			labelImg: [],
		}
	},
	methods: {
		/* 初始化参数 */
		initParams() {
			this.advertisingImg = ADVERTISING_IMG
			this.gridImg = GRID_IMG
			this.labelImg = LABEL_IMG
		},
		/* 前往搜索 */
		goSearch() {
			uni.navigateTo({
				url: '/pages/index/search'
			});
		},
		/* 前往签到 */
		goCheck() {
			uni.navigateTo({
				url: '/pages/index/check'
			});
		},
		// 前往功能区
		goFunction(index) {
			switch (index) {
				case 0:
					uni.navigateTo({
						url: '/pages/index/businessCard'
					});
					break;
			}
		},
	},
	onLoad() {
		/* 初始化参数 */ this.initParams()
	},
	components: { Project }
}
</script>

<style lang="scss" scoped>
@import './index.scss';
</style>