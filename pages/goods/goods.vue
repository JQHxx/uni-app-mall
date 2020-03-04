<template>
	<view>
		<page-status></page-status>
		<goodsHeader></goodsHeader>
		<!-- 轮播图 -->
		<view class="swiper-box">
			<swiper @change="handleSwiper" autoplay="true" circular="true">
				<swiper-item v-for="(swiper, index) in goodsData.swiperList" :key="index">
					<image :src="swiper.img"></image>
				</swiper-item>
			</swiper>
			<view class="indicator">
				{{swiperIndex + 1}}/{{goodsData.swiperList.length}}
			</view>
		</view>

		<!-- 商品信息 -->
		<view class="goods-info">
			<view class="goods__price">
				￥{{goodsInfo.price}}
			</view>
			<view class="goods__name">
				{{goodsInfo.name}}
			</view>
		</view>

		<!-- 规格 -->
		<view class="spec-box">
			<view class="row" @tap="showPopSpec">
				<text>选择</text>
				<view class="spec__content">
					<view class="spec__title">选择规格:</view>
					<view class="spec__info">
						<view :class="{on: goodsInfo.spec == spec}" v-for="(spec, index) in goodsData.spec" :key="index">
							{{ spec }}
						</view>
					</view>
				</view>
				<!-- 箭头 -->
				<view class="arrow">
					<view class="icon iconfont">&#xe6a3;</view>
				</view>
			</view>
		</view>
		<!-- 模态框 -->
		<popSpec @select-spec="handleSelectSpec" @sub="sub" @add="add" @hide-pop="hidePopSpec" :goodsData="goodsData"
		 :goodsInfo="goodsInfo" :spaceInfo="spaceInfo"></popSpec>
		<!-- 评价 -->
		<view class="comment">
			<view class="row">
				<view class="text">
					评论详情({{goodsData.comment.length}})
				</view>
				<view class="show" @tap="showAllComment">
					查看全部
					<view class="icon iconfont">
						&#xe6a3;
					</view>
				</view>
			</view>
			<view class="comment__info">
				<view class="user__info">
					<image :src="goodsData.comment[0].face" class="user__profile"></image>
					<view class="user__name">
						{{goodsData.comment[0].username}}
					</view>
				</view>
				<view class="comment__content">
					{{goodsData.comment[0].content}}
				</view>
			</view>
		</view>
		<!-- 商品详情 -->
		<view class="goods-detail">
			<view class="title">———— 商品详情 ————</view>
			<view class="content">
				<rich-text :nodes="goodsData.descriptionStr"></rich-text>
			</view>
		</view>

		<!-- 底部菜单 -->
		<view class="footer">
			<view class="icons">
				<view class="box">
					<view class="icon iconfont">&#xe7e0;</view>
					<view class="text">分享</view>
				</view>
				<view class="box" @tap="keep">
					<view class="icon iconfont" v-if="isKeep">&#xe64b;</view>
					<view class="icon iconfont" v-else>&#xe64c;</view>
					<view class="text">{{isKeep?"已":''}}收藏</view>
				</view>
			</view>
			<view class="btns">
				<view class="joinCart" @tap="joinCart">
					加入购物车
				</view>
				<view class="buy" @tap="handleCheck">
					立即购买
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import popSpec from '../../components/popSpec.vue';
	import goodsHeader from './goodHeader.vue';
	import interfaces from '../../utils/interfaces.js';
	export default {
		components: {
			goodsHeader,
			popSpec
		},
		data() {
			return {
				isKeep: false,
				swiperIndex: 0,
				goodsData: {
					swiperList: [],
					spec: [],
					comment: [{
						face: "",
						content: "",
						username: ""
					}]
				},
				goodsInfo: {
					name: '',
					price: 0,
					number: 0,
					spec: ""
				},
				spaceInfo: {
					showSpace: false
				}
			}
		},
		onLoad(option) {
			this.goodsInfo = JSON.parse(option.goodsInfo)
			// console.log(this.goodsInfo);
			this.initData()
		},
		methods: {
			initData() {
				this.request({
					url: interfaces.getGoods,
					success: res => {
						// console.log(res.data, 'data');
						this.goodsData = res.data
					}
				})
			},
			handleSwiper(e) {
				this.swiperIndex = e.detail.current;
			},
			showPopSpec() {
				this.spaceInfo.showSpace = true
			},
			hidePopSpec() {
				this.spaceInfo.showSpace = false
			},
			handleSelectSpec(spec) {
				this.goodsInfo.spec = spec
			},
			handleCheck() {
				let tempList = [];
				tempList.push(this.goodsInfo);
				uni.setStorage({
					key: "checkList",
					data: tempList,
					success: () => {
						uni.navigateTo({
							url: "../orders/order"
						})
					}
				})
			},
			sub() {
				if (this.goodsInfo.number <= 1) {
					return
				}
				this.goodsInfo.number--
			},
			add() {
				this.goodsInfo.number++;
			},
			showAllComment() {
				try {
					uni.setStorageSync('comments', this.goodsData.comment)
					uni.navigateTo({
						url: './ratings'
					})
				} catch (e) {
					//TODO handle the exception
					console.log(e);
				}
			},
			keep() {
				this.isKeep = !this.isKeep;
			},
			joinCart() {
				// console.log(this.goodsInfo);

				uni.getStorage({
					key: "goodsList",
					success: res => {
						let goodsList = res.data;
						// console.log(goodsList);
						let isExist = false;

						goodsList.forEach(goods => {
							if (goods.goods_id == this.goodsInfo.goods_id && goods.spec == this.goodsInfo.spec) {
								goods.number = parseInt(goods.number) + parseInt(this.goodsInfo.number);
								isExist = true
							}
						})
						
						if(!isExist) {
							goodsList.push(this.goodsInfo);
						}
						this.setGoodsList(goodsList);
					},
					fail: (err) => {
						let goodsList = [];
						goodsList.push(this.goodsInfo);
						this.setGoodsList(goodsList);
					}
				})
			},
			setGoodsList(goodsList) {
				uni.setStorage({
					key: "goodsList",
					data: goodsList,
					success() {
						uni.showToast({
							icon: "success",
							title: "添加购物车成功"
						})
					}
				})
			}
		}
	}
</script>

<style lang="scss">
	.status {
		/* #ifdef APP-PLUS */
		opacity: 0;
		/* #endif */
	}

	.swiper-box {
		position: relative;
		width: 100%;
		height: 100vw;

		swiper {
			width: 100%;
			height: 100vw;

			image {
				width: 100%;
				height: 100vw;
			}
		}

		.indicator {
			display: flex;
			justify-content: center;
			align-items: center;
			position: absolute;
			right: 20upx;
			bottom: 20upx;
			height: 40upx;
			padding: 0 25upx;
			border-radius: 40upx;

			background-color: rgba($color: #000000, $alpha: .2);
			font-size: 22upx;
			color: #FFFFFF;
		}
	}

	.goods-info {
		width: 92%;
		padding: 20upx 4%;
		margin-bottom: 20upx;

		.goods__price {
			font-size: 46upx;
			color: #f47925;
			font-weight: 600;
		}

		.goods__name {
			font-size: 30upx;
		}
	}

	.spec-box {
		width: 92%;
		padding: 20upx 4%;
		margin-bottom: 20upx;
		position: relative;

		.row {
			display: flex;
			align-items: center;
			font-size: 28upx;

			text {
				margin-right: 20upx;
				font-size: 28upx;
				color: #a2a2a2;
			}

			.spec__info {
				display: flex;

				view {
					margin-top: 2upx;
					padding: 10upx;
					font-size: 20upx;
					color: #999999;
					border-radius: 5upx;
					background-color: #f6f6f6;

					&:not(:last-child) {
						margin-right: 10upx;
					}

					&.on {
						border: 1upx solid #f47952;
					}
				}
			}

			.arrow {
				position: absolute;
				right: 4%;

				.icon {
					color: #ccc;
				}
			}
		}
	}

	.comment {
		width: 92%;
		margin-bottom: 20upx;
		padding: 20upx 4%;

		.row {
			display: flex;
			align-items: center;
			justify-content: space-between;
			margin-bottom: 30upx;

			.text {
				font-size: 30upx;
				color: #a2a2a2;
			}

			.show {
				font-size: 28upx;
				display: flex;
				align-items: center;
				color: #17e6a1;
			}
		}

		.comment__info {
			.user__info {
				display: flex;
				align-items: center;

				.user__profile {
					margin-right: 8upx;
					width: 40upx;
					height: 40upx;
					border-radius: 50%;
				}

				.user__name {
					color: #999999;
					font-size: 24upx;
				}
			}

			.comment__content {
				margin-top: 10upx;
				font-size: 26upx;
			}
		}
	}

	.goods-detail {
		.title {
			height: 80upx;
			width: 100%;
			display: flex;
			justify-content: center;
			align-items: center;
			font-size: 26upx;
			color: #999999;
		}
	}

	.footer {
		position: fixed;
		bottom: 0upx;
		width: 92%;
		padding: 0 4%;
		height: 99upx;
		border-top: solid 1upx #eee;
		background-color: #fff;
		z-index: 2;
		display: flex;
		justify-content: space-between;
		align-items: center;

		.icons {
			display: flex;
			height: 80upx;
			margin-left: -4%;

			.box {
				width: 80upx;
				height: 80upx;
				display: flex;
				justify-content: center;
				flex-wrap: wrap;

				.icon {
					font-size: 40upx;
					color: #828282;
				}

				.text {
					display: flex;
					justify-content: center;
					width: 100%;
					font-size: 22upx;
					color: #666;
				}
			}
		}

		.btns {
			height: 80upx;
			border-radius: 40upx;
			overflow: hidden;
			display: flex;
			margin-right: -2%;

			.joinCart,
			.buy {
				height: 80upx;
				padding: 0 40upx;
				color: #fff;
				display: flex;
				align-items: center;
				font-size: 28upx;
			}

			.joinCart {
				background-color: #f0b46c;
			}

			.buy {
				background-color: #f06c7a;
			}
		}
	}
</style>
