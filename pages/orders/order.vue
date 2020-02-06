<template>
	<view>
		<view class="buy-list">
			<view class="row" v-for="(goods, index) in goodsList" :key="index">
				<view class="goods-info">
					<view class="img">
						<image :src="goods.img"></image>
					</view>
					<view class="info">
						<view class="title">
							{{goods.name}}
						</view>
						<view class="spec">
							选择：{{goods.spec}} 数量：{{goods.number}}
						</view>
						<view class="price-number">
							<view class="price">
								￥{{goods.price * goods.number | toFixed}}
							</view>
						</view>
					</view>
				</view>
			</view>
		</view>

		<!-- 金额 -->
		<view class="detail">
			<view class="row">
				<view class="amount">
					商品金额
				</view>
				<view class="content">
					￥{{goodsPrice | toFixed}}
				</view>
			</view>
			<view class="row">
				<view class="amount">
					运费
				</view>
				<view class="content">
					￥{{freight | toFixed}}
				</view>
			</view>
		</view>

		<!-- 占位 -->
		<view class="position"></view>

		<!-- 底部按钮 -->
		<view class="footer">
			<view class="total">
				合计：
				<view class="price">
					￥{{sumPrice | toFixed}}
				</view>
			</view>
			<view class="btn">
				提交订单
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				goodsList: [],
				freight: 12.0, //运费
				goodsPrice: 0.0, //商品价格
				sumPrice: 0.0 //用户支付价格
			}
		},
		onShow() {
			this.goodsPrice = 0.0;
			this.sumPrice = 0.0;
			uni.getStorage({
				key: "checkList",
				success: (res) => {
					this.goodsList = res.data;
					for (let i = 0; i < this.goodsList.length; i++) {
						this.goodsPrice = this.goodsPrice + (this.goodsList[i].price * this.goodsList[i].number)
					}
					this.sumPrice = this.goodsPrice + this.freight;
				}
			})
		},
		filters: {
			toFixed(x) {
				return parseFloat(x).toFixed(2);
			}
		},
		onBackPress() {
			this.clearOrder();
		},
		methods: {
			clearOrder() {
				uni.removeStorage({
					key: "checkList",
					success() {
						this.goodsList = [];
					}
				})
			}
		}
	}
</script>

<style lang="scss">
	.buy-list {
		width: 86%;
		padding: 10upx 3%;
		margin: 30upx auto 20upx auto;
		box-shadow: 0upx 5upx 20upx rgba(0, 0, 0, 0.1);
		border-radius: 20upx;

		.row {
			margin: 30upx 0;

			.goods-info {
				width: 100%;
				display: flex;

				.img {
					width: 22vw;
					height: 22vw;
					border-radius: 10upx;
					overflow: hidden;
					flex-shrink: 0;
					margin-right: 10upx;

					image {
						width: 22vw;
						height: 22vw;
					}
				}

				.info {
					width: 100%;
					height: 22vw;
					overflow: hidden;
					display: flex;
					flex-wrap: wrap;
					position: relative;

					.title {
						width: 100%;
						font-size: 28upx;
						display: -webkit-box;
						-webkit-box-orient: vertical;
						-webkit-line-clamp: 2;
						// text-align: justify;
						overflow: hidden;
					}

					.spec {
						font-size: 22upx;
						background-color: #f3f3f3;
						color: #a7a7a7;
						height: 40upx;
						display: flex;
						align-items: center;
						padding: 0 10upx;
						border-radius: 20upx;
						margin-bottom: 20vw;
					}

					.price-number {
						position: absolute;
						width: 100%;
						bottom: 0upx;
						display: flex;
						justify-content: space-between;
						align-items: flex-end;
						font-size: 28upx;
						height: 40upx;

						.price {
							color: #f06c7a;
						}

						.number {
							display: flex;
							justify-content: center;
							align-items: center;

						}
					}
				}
			}
		}
	}

	.detail {
		width: 86%;
		margin: 30upx auto 20upx;
		padding: 10upx 3%;
		box-shadow: 0 4upx 20upx rgba(0, 0, 0, 0.1);
		border-radius: 20upx;

		.row {
			display: flex;
			justify-content: space-between;
			align-items: center;
			height: 60upx;

			.amount {
				font-size: 28upx;
			}

			.content {
				font-size: 26upx;
				color: #f06c7a;
			}
		}
	}

	.position {
		width: 100%;
		height: 100upx;
	}

	.footer {
		position: fixed;
		z-index: 5;
		bottom: 0;
		width: 92%;
		padding: 0 4%;
		display: flex;
		justify-content: flex-end;
		align-items: center;
		height: 100upx;

		background-color: #fbfbfb;

		.total {
			display: flex;
			font-size: 28upx;
			margin-right: 10upx;

			.price {
				font-weight: 600;
			}
		}

		.btn {
			display: flex;
			justify-content: center;
			align-items: center;
			height: 60upx;
			padding: 0 30upx;
			border-radius: 40upx;

			font-size: 30upx;
			background-color: #f06c7a;
			color: #FFFFFF;
		}
	}
</style>
