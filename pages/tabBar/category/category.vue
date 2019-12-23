<template>
	<view>
		<!-- 状态栏 -->
		<page-status></page-status>
		<!-- 自定义导航栏 -->
		<page-header></page-header>
		<!-- 分类页面 -->
		<view class="category-box">
			<view class="category__left">
				<scroll-view show-scrollbar='false' :scroll-y="true" class="category__navigation">
					<view class="category__navigation-item" @click="handleCategory(index)" :class="{on: currentNavigation == index}"
					 v-for="(category, index) in categoryList" :key="index">
						<view class="item__text">
							<view class="block"></view>
							{{category.title}}
						</view>
					</view>
				</scroll-view>
			</view>
			<scroll-view :scroll-y="true" class="category__right">
				<view class="category__content" v-show="currentNavigation == index" v-for="(category, index) in categoryList" :key="index">
					<!-- banner -->
					<view class="banner">
						<image :src="category.banner"></image>
					</view>
					<!-- 分类 -->
					<view class="category-list">
						<view @tap="handleCategoryList(item)" class="category-item" v-for="(item,i) in category.list" :key="i">
							<image :src="'/static/img/category/list/' + item.img"></image>
							<view class="text">{{item.name}}</view>
						</view>
					</view>
				</view>
			</scroll-view>
		</view>
	</view>
</template>

<script>
	import interfaces from '../../../utils/interfaces.js';
	export default {
		data() {
			return {
				categoryList: [],
				currentNavigation: 0
			}
		},
		onLoad() {
			this.initData()
		},
		methods: {
			handleCategory(index) {
				this.currentNavigation = index
			},
			handleCategoryList(item) {
		
				uni.navigateTo({
					url: '../../goods/goodsList?name=' + item.name
				})
			},
			initData() {
				this.request({
					url: interfaces.getCategory,
					success: (res) => {
						this.categoryList = res.data;
					}
				})
			}
		}
	}
</script>

<style lang="scss">
	.category-box {
		width: 100%;
		position: relative;
		background-color: #FFFFFF;
		display: flex;
		max-height: calc(100vh - 100upx - 50px);
		/* #ifdef APP-PLUS */
		max-height: calc(100vh - 100upx - var(--status-bar-height));
		/* #endif */
		/* #ifdef MP */
		max-height: calc(100vh - 100upx);
		/* #endif */

		
		&::after {
			content: '';
			display: block;
			clear: both;
		}

		.category__left {
			width: 24%;
			background-color: #f2f2f2;

			.category__navigation {
				max-height: calc(100vh - 100upx - 50px);
				/* #ifdef APP-PLUS */
				max-height: calc(100vh - 100upx - var(--status-bar-height));
				/* #endif*/

				/* #ifdef MP */
				max-height: calc(100vh - 100upx);
				/* #endif */
				overflow: hidden;
			}

			.category__navigation-item {
				width: 100%;
				height: 90upx;
				display: flex;
				align-items: center;

				.item__text {
					width: 100%;
					position: relative;
					display: flex;
					justify-content: center;
					font-size: 28upx;
					color: #3c3c3c;

					.block {
						position: absolute;
						left: 0;
						height: 0;
					}
				}

				&.on {
					height: 100upx;
					background-color: #FFFFFF;

					.item__text {
						font-size: 30upx;
						font-weight: 600;
						color: #2d2d2d;

						.block {
							width: 10upx;
							height: 80%;
							top: 10%;
							background-color: #f06c7a;
						}
					}
				}
			}
		}

		.category__right {
			position: absolute;
			left: 24%;
			width: 76%;
			max-height: calc(100vh - 100upx - 50px);
			/* #ifdef APP-PLUS */
			max-height: calc(100vh - 100upx - var(--status-bar-height));
			/* #endif*/
			
			/* #ifdef MP */
			max-height: calc(100vh - 100upx);
			/* #endif */
			
			.category__content {
				width: 94%;
				padding: 20upx 3%;
				.banner {
					width: 100%;
					height: 28vw;
					border-radius: 10upx;
					overflow: hidden;
					box-shadow: 0upx 5upx 20upx rgba(0, 0, 0, 0.3);
					
					image {
						width: 100%;
						height: 100%;
					}
				}
			
				.category-list {
					margin-top: 40upx;
					width: 100%;
					display: flex;
					flex-wrap: wrap;
					
					.category-item {
						width: calc(71.44vw / 3);
						margin-bottom: 30upx;
						display: flex;
						justify-content: center;
						align-items: center;
						flex-wrap: wrap;
						image {
							width: 60%;
							height: calc(71.44vw / 3 * 0.6);
						}
						.text {
							margin-top: 5upx;
							width: 100%;
							display: flex;
							justify-content: center;
							font-size: 26upx;
						}
					}
				}
			}
		}
	}
</style>
