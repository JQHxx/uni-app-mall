<template>
	<view>
		<!-- 购物列表 -->
		<view class="goods-list">
			<view class="empty" v-if="goodsList.length == 0">
				购物车空空如也~~
			</view>
			<view class="row" v-for="(goods, index) in goodsList" :key="index">
				<!-- 删除按钮 -->
				<view class="menu" @tap.stop="handleSingleDelete(goods)">
					<view class="icon iconfont">&#xe6a6;</view>
				</view>
				<!-- 商品 -->
				<view class="production"  @touchstart="handleTouchStart(index, $event)" @touchmove="handleTouchMove(index, $event)"
			 @touchend="handleTouchEnd(index, $event)" :class="[theIndex == index ? 'open' : oldIndex == index ? 'close' : '']">
					<!-- checkbox -->
					<view class="container">
						<view class="checkbox" @tap="handleCheckbox(goods)">
							<view :class="{'on': goods.selected}"></view>
						</view>
					</view>
					<!-- 商品详情 -->
					<view class="goods-info" @tap="handleGoodsInfo(goods)">
						<view class="img">
							<image :src="goods.img"></image>
						</view>
						<view class="info">
							<view class="title">
								{{goods.name}}
							</view>
							<view class="spec">
								{{goods.spec}}
							</view>
							<view class="price-number">
								<view class="price">
									￥{{goods.price}}
								</view>
								<Counter :goodsInfo="goods" @add="add(goods)" @sub="sub(goods)"></Counter>
							</view>
						</view>
					</view>
				</view>
			</view>
		</view>
		<!-- 底部菜单 -->
		<view class="footer">
			<view class="container" @tap="selectAll">
				<view class="checkbox">
					<view :class="{'on': isSelectedAll}"></view>
				</view>
				<view class="text">
					全选
				</view>
			</view>
			<view class="delBtn" v-if="selectedList.length > 0" @tap="handleMulDelete">删除</view>
			<view class="settlement">
				<view class="sum">
					合计:
					<view class="money">
						￥{{sumPrice}}
					</view>
				</view>
				<view class="btn" @tap="handleCheck">
					结算{{selectedList.length == 0 ? '':selectedList.length}}
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import Counter from "../../../components/counter.vue"
	export default {
		components: {
			Counter
		},
		data() {
			return {
				theIndex: null, //控制滑动效果 当前滑动下标
				oldIndex: null, //上一个左滑下表
				goodsList: [],
				isSelectedAll: false,
				selectedList: [],
				sumPrice: '0.00'
			}
		},
		methods: {
			initData() {
				uni.showLoading({
					title: "加载中..."
				})
				uni.getStorage({
					key: "goodsList",
					success: res => {
						for (let i = 0; i < res.data.length; i++) {
							res.data[i].selected = false;
						}
						this.goodsList = res.data;
					},
					complete() {
						uni.hideLoading()
					}
				})
			},
			changeStorage(goods) {
				uni.getStorage({
					key: "goodsList",
					success: res => {
						let goodsList = res.data;
						goodsList.some(item => {
							if (item.goods_id == goods.goods_id) {
								item.number = goods.number;
								return;
							}
						})

						uni.setStorage({
							key: "goodsList",
							data: goodsList
						})
					}
				})
			},
			add(goods) {
				goods.number++;
				this.changeStorage(goods);
				this.sum();
			},
			sub(goods) {
				if (goods.number <= 1) {
					return;
				}
				goods.number--;
				this.changeStorage(goods);
				this.sum();
			},
			handleCheckbox(goods) {
				goods.selected = !goods.selected;

				let isExist = this.selectedList.indexOf(goods);
				if (isExist > -1) {
					this.selectedList.splice(isExist, 1);
				} else {
					this.selectedList.push(goods)
				}
				
				if (this.goodsList.length == this.selectedList.length) {
					this.isSelectedAll = true;
				} else {
					this.isSelectedAll = false;
				}
				this.sum();
			},
			selectAll() {
				this.isSelectedAll = !this.isSelectedAll

				let arr = [];
				this.goodsList.forEach(goods => {
					goods.selected = this.isSelectedAll;
					arr.push(goods);
				})

				this.selectedList = this.isSelectedAll ? arr : [];
				this.sum();
			},
			handleMulDelete() {
				while(this.selectedList.length > 0) {
					this.handleSingleDelete(this.selectedList[0]);
				}
				
				this.selectedList = [];
				this.isSelectedAll = false;
				this.sum();
			},
			handleSingleDelete(goods) {
				this.goodsList.splice(this.goodsList.indexOf(goods), 1);
				
				let isExist = this.selectedList.indexOf(goods);
				if (isExist > -1) {
					this.selectedList.splice(isExist, 1);
				}
				
				uni.setStorage({
					key: "goodsList",
					data: this.goodsList
				})
			},
			handleCheck() {
				if (this.selectedList.length < 1) {
					uni.showToast({
						title: "请选择结算的商品",
						icon: "none"
					})
					return
				}
				
				uni.setStorage({
					key: "checkList",
					data: this.selectedList,
					success: () => {
						uni.navigateTo({
							url: "../../orders/order"
						})
					}
				})
			},
			handleGoodsInfo(goods) {
				uni.navigateTo({
					url: "../../goods/goods?goodsInfo=" + JSON.stringify(goods)
				})
			},
			handleTouchStart(index, event) {
				if (event.touches.length > 1) {
					return;
				}

				this.isFirstMove = true;
				this.oldIndex = this.theIndex;
				this.theIndex = null;

				this.initXY = [event.touches[0].pageX, event.touches[0].pageY];
			},
			handleTouchMove(index, event) {
				if (event.touches.length > 1) {
					return;
				}
				if (this.isFirstMove) {
					this.isFirstMove = false;
					let moveX = event.touches[0].pageX - this.initXY[0];
					let moveY = event.touches[0].pageY - this.initXY[1];

					if (Math.abs(moveX) < 5) {
						return;
					}

					if (Math.abs(moveY) > Math.abs(moveX)) {
						return;
					}
					if (moveX < 0) {
						this.theIndex = index;
					}

				}
			},
			handleTouchEnd(index, event) {
				if (event.touches.length > 1) {
					return;
				}
			},
			sum() {
				this.sumPrice = 0;
				this.goodsList.forEach(goods => {
					if (goods.selected) {
						this.sumPrice = this.sumPrice + (goods.number * goods.price);
					}
				})
				this.sumPrice = this.sumPrice.toFixed(2);
			}
		},
		onShow() {
			this.isSelectedAll = false;
			this.selectedList = [];
			this.sumPrice = '0.00';
			this.theIndex = null;
			this.oldIndex = null;
			this.initData()
		}
	}
</script>

<style lang="scss">
	.container {
		display: flex;
		align-items: center;
		padding-left: 20upx;
		height: 22vw;
		margin-right: 20upx;

		.checkbox {
			display: flex;
			align-items: center;
			justify-content: center;
			width: 35upx;
			height: 35upx;
			border-radius: 50%;
			border: 2upx solid #f06c7a;

			.on {
				width: 25upx;
				height: 25upx;
				border-radius: 50%;
				background-color: #f06c7a;
			}
		}
	}

	.goods-list {
		width: 100%;
		padding: 20upx 0 120upx 0;

		.empty {
			width: 100%;
			height: 60upx;
			display: flex;
			justify-content: center;
			align-items: center;
			font-size: 32upx;
			color: #a7a7a7;
		}


		.row {
			width: 92%;
			height: calc(22vw + 40upx);
			margin: 20upx auto;
			display: flex;
			align-items: center;
			position: relative;
			overflow: hidden;
			z-index: 4;
			border: 0;
			border-radius: 15upx;
			box-shadow: 0upx 5upx 20upx rgba(0, 0, 0, 0.1);



			.menu {
				position: absolute;
				width: 30%;
				height: 100%;
				right: 0;
				display: flex;
				justify-content: center;
				align-items: center;
				background: red;
				color: #FFFFFF;
				z-index: 2;

				.icon {
					color: #FFFFFF;
					font-size: 60upx;
				}
			}

			.production {
				display: flex;
				align-items: center;
				z-index: 3;
				position: absolute;
				width: 100%;
				padding: 0 0;
				height: 100%;
				background-color: #FFFFFF;

				@keyframes showMenu {
					0% {
						transform: translateX(0);
					}

					100% {
						transform: translateX(-30%);
					}
				}

				@keyframes closeMenu {
					0% {
						transform: translateX(-30%);
					}

					100% {
						transform: translateX(0);
					}
				}

				&.open {
					animation: showMenu 0.25s linear both;
				}

				&.close {
					animation: closeMenu 0.15s linear both;
				}

				.goods-info {
					width: 100%;
					display: flex;
					padding-right: 20upx;

					.img {
						width: 22vw;
						height: 22vw;
						margin-right: 10upx;
						border-radius: 10upx;
						overflow: hidden;
						flex-shrink: 0;


						image {
							width: 22vw;
							height: 22vw;
						}
					}

					.info {
						width: 100%;
						height: 22vw;
						display: flex;
						flex-wrap: wrap;
						position: relative;

						.title {
							display: -webkit-box;
							-webkit-box-orient: vertical;
							-webkit-line-clamp: 2;
							overflow: hidden;
							width: 100%;
							font-size: 28upx;
						}

						.spec {
							height: 30upx;
							display: flex;
							align-items: center;
							padding: 0 10upx;
							border-radius: 15upx;
							margin-bottom: 20vw;
							font-size: 20upx;
							color: #a7a7a7;
							background-color: #f3f3f3;
						}

						.price-number {
							position: absolute;
							width: 100%;
							bottom: 0upx;
							display: flex;
							justify-content: space-between;
							align-items: flex-end;
							font-size: 28upx;
							height: 60upx;
						}
					}
				}
			}
		}
	}

	.footer {
		width: 92%;
		padding: 0 4%;
		display: flex;
		position: fixed;
		height: 100upx;
		bottom: 50px;
		align-items: center;
		justify-content: space-between;
		font-size: 28rpx;
		background-color: #fbfbfb;
		/* #ifndef H5 */
		bottom: 0;
		/* #endif */
		z-index: 5;

		.delBtn {
			border: solid 1upx #f06c7a;
			color: #f06c7a;
			padding: 0 30upx;
			height: 50upx;
			border-radius: 30upx;
			display: flex;
			justify-content: center;
			align-items: center;
		}

		.container {
			display: flex;
			align-items: center;

			.text {
				font-size: 28upx;
				margin-left: 10upx;
			}
		}

		.settlement {
			display: flex;
			width: 60%;
			justify-content: flex-end;
			align-items: center;

			.sum {
				display: flex;
				width: 50%;
				font-size: 28upx;
				margin-right: 10upx;
				justify-content: flex-end;

				.money {
					font-weight: 600;
				}
			}

			.btn {
				display: flex;
				justify-content: center;
				align-items: center;
				padding: 0 30upx;
				height: 50upx;
				border-radius: 30upx;

				background-color: #f06c7a;
				color: #fff;

			}
		}
	}
</style>
