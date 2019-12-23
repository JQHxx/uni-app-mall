<template>
	<view>
		<!-- 状态栏 -->
		<page-status></page-status>
		<!-- 自定义顶部导航栏 -->
		<page-header />
		<!-- 轮播图 -->
		<view class="swiper">
			<view class="swiper-box">
				<swiper circular="true" autoplay="true" @change="chageSwiper">
					<swiper-item v-for="swiper in swiperList" :key="swiper.id">
						<image :src="swiper.img"></image>
					</swiper-item>
				</swiper>
				<view class="indicator">
					<view :class="{on: index <= currentSwiper}" class="dots" v-for="(swiper,index) in swiperList" :key="index"></view>
				</view>
			</view>
		</view>
		<!-- 分类 -->
		<view class="category">
			<view class="category-box">
				<view class="category-item" v-for="(item, index) in categoryList" :key="index">
					<view class="category__img">
						<image :src="item.img"></image>
					</view>
					<view class="category__name">
						{{item.name}}
					</view>
				</view>
			</view>
		</view>
		<!-- 广告banner -->
		<view class="banner" v-if="promotion.length > 0">
			<image src="/static/img/category/ad.jpg"></image>
		</view>
		<!-- 活动 -->
		<view class="promotion" v-if="promotion.length > 0">
			<view class="promotion-box">
				<view class="promotion__header-title">
					优惠活动
				</view>
				<view class="promotion__content">
					<view class="promotion__item" v-for="(item, index) in promotion" :key="index">
						<view class="promotion__title">
							{{item.title}}
						</view>
						<view class="promotion__info">
							<view class="promotion__info-left">
								<view class="promotion__ad">
									{{item.ad}}
								</view>
								<view class="btn">
									点击进入
								</view>
							</view>
							<view class="promotion__info-right">
								<image :src="item.img"></image>
							</view>
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import pageHeader from './pageHeader.vue';
	import interfaces from '../../../utils/interfaces.js';
	export default {
		components: {
			pageHeader
		},
		data() {
			return {
				swiperList: [], //轮播图
				categoryList: [], //分类
				promotion: [], //活动
				currentSwiper: 0
			}
		},
		onLoad() {
			this.initData()
		},
		methods: {
			initData() {
				this.request({
					url: interfaces.getMallData,
					success: (res) => {
						this.swiperList = res.data.swiperList;
						this.categoryList = res.data.categoryList;
						this.promotion = res.data.promotion;
					}
				})
			},
			dotWidth(len, index) {
				console.log(len, index);
			},
			chageSwiper(event) {
				this.currentSwiper = event.detail.current
			}
		}
	}
</script>

<style lang="scss">
	.swiper {
		width: 100%;
		margin-top: 10upx;
		display: flex;
		justify-content: center;

		.swiper-box {
			width: 92%;
			height: 30.7vw;
			border-radius: 15upx;
			box-shadow: 0 8upx 25upx rgba(0, 0, 0, .2);
			overflow: hidden;
			//兼容ios，微信小程序
			position: relative;
			z-index: 1;

			swiper {
				width: 100%;
				height: 30.7vw;

				swiper-item {
					image {
						width: 100%;
						height: 40vw;
					}
				}
			}

			.indicator {
				position: absolute;
				left: 20upx;
				bottom: 20upx;
				width: 150upx;
				height: 5upx;
				border-radius: 3upx;
				display: flex;
				overflow: hidden;

				background-color: rgba(255, 255, 255, 0.4);

				.dots {
					width: 0upx;
					background-color: rgba(255, 255, 255, 1);
					transition: all .3s ease-out;

					&.on {
						width: (100% / 3);
					}
				}
			}
		}
	}

	.category {
		width: 100%;
		display: flex;
		justify-content: center;

		.category-box {
			width: 92%;
			display: flex;
			flex-wrap: wrap;
			padding-bottom: 30upx;
			border-bottom: 1px solid #f6f6f6;

			.category-item {
				width: (100% / 4);
				margin-top: 50upx;

				.category__img {
					width: 100%;
					display: flex;
					justify-content: center;
					align-items: center;

					image {
						width: 11vw;
						height: 11vw;
					}
				}

				.category__name {
					display: flex;
					justify-content: center;
					margin-top: 16upx;
					font-size: 24upx;
					color: #3c3c3c;
				}
			}
		}
	}

	.banner {
		width: 92%;
		margin: 40upx 4%;

		image {
			width: 100%;
			height: 34vw;
			border-radius: 4upx;
			box-shadow: 0 5upx 25upx rgba(0, 0, 0, .3);
		}
	}

	.promotion {
		width: 100%;
		display: flex;
		justify-content: center;
		margin-bottom: 40upx;
		
		.promotion-box {
			width: 92%;
			
			.promotion__header-title {
				margin: 10upx 0;
				padding: 0 10upx;
				width: 100%;
				box-sizing: border-box;
				font-size: 34upx;
				font-weight: 700;
				overflow: hidden;
				white-space: nowrap;
				text-overflow: ellipsis;
			}
			
			.promotion__content {
				display: flex;
				justify-content: space-between;
				flex-wrap: wrap;
				
				.promotion__item {
					width: 43%;
					padding: 15upx 3%;
					background-color: #ebf9f9;
					border-radius: 10upx;
					overflow: hidden;
					display: flex;
					justify-content: space-between;
					flex-wrap: wrap;
					
					.promotion__title {
						margin-bottom: 4upx;
						height: 40upx;
						display: flex;
						align-items: center;
						font-size: 30upx;
					}
					
					.promotion__info {
						width: 100%;
						display: flex;
						
						.promotion__info-left {
							display: flex;
							flex-direction: column;
							justify-content: space-between;
							width: 50%;
							height: 18.86vw;
							flex-shrink: 0;
							
							.promotion__ad {
								margin-top: 4upx;
								font-size: 22upx;
								color: #acb0b0;
							}
							.btn {
								margin-bottom: 4upx;
								font-size: 24upx;
								color: #aaaaaa;
							}
						}
						
						.promotion__info-right {
							width: 18.86vw;
							height: 18.86vw;
							image {
								width: 18.86vw;
								height: 18.86vw;
							}
						}
					}
				}
			}
		}
	}
</style>
