<template>
	<view>
		<view class="head">
			<view class="head_1">
				<image class="head_1_1" src="http://39.106.208.234/pic/img_/sy_suo@2x.png" />
				<view class="head_1_2">地推 | 拉新 | 教育 | 跑量 | 阅读...</view>
			</view>
			<view class="head_2">
				<image class="head_2_1" src="http://39.106.208.234/pic/img_/qiandao.png" />
				<view class="head_2_2">签到</view>
			</view>
		</view>
		<view class="content">
			<view class="content_1">
				<u-swiper :list="swiperList" height="200rpx" />
			</view>
			<view class="content_2">
				<image class="content_2_1"/>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			swiperList: ['http://39.106.208.234/pic/img_/banner_3.png', 'http://39.106.208.234/pic/img_/banner_2.png', 'http://39.106.208.234/pic/img_/banner_1.png'],
		}
	},
	onLoad() {

	},
	methods: {

	}
}
</script>

<style lang="scss" scoped>
@import './index.scss';
</style>
