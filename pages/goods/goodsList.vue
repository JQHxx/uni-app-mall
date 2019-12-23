<template>
	<view>
		<!-- 选项卡 -->
		<view class="header">
			<view class="target" @tap="handleSelect(index)" :class="{on: target.selected}" v-for="(target, index) in filterByList"
			 :key="index">
				{{target.title}}
			</view>
		</view>
		<!-- 占位 -->
		<view class="place"></view>
		<!-- 商品列表 -->
		<view class="goods-list">
			<view class="product-list">
				<view class="product" v-for="(goods, index) in goodsList" :key="index">
					<image mode="widthFix" :src="goods.img"></image>
					<view class="product__name">{{goods.name}}</view>
					<view class="product__info">
						<view class="product__price">
							<text>￥</text>
							{{goods.price}}
						</view>
						<view class="product__slogan">{{goods.slogan}}<text>人付款</text></view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import interfaces from '../../utils/interfaces.js';
	export default {
		data() {
			return {
				goodsList: [],
				page: 1,
				size: 6,
				filterby: 'all',
				filterByList: [{
						title: "全部",
						selected: true,
						filterby: 'all'
					},
					{
						title: "口碑",
						selected: false,
						filterby: 'public'
					},
					{
						title: "热门",
						selected: false,
						filterby: 'hot'
					}
				]
			}
		},
		onLoad(option) {
			uni.setNavigationBarTitle({
				title: option.name
			})

			this.initData()
		},
		methods: {
			handleSelect(index) {
				this.filterByList[index].selected = true;
				this.filterByList.forEach((item, i) => {
					if (i != index) {
						this.filterByList[i].selected = false
					}
				})
			},
			initData() {
				this.request({
					url: `${interfaces.getGoodsList}/${this.filterby}/${this.page}/${this.size}`,
					success: (res) => {
						this.goodsList = res.data
					}
				})
			}
		}
	}
</script>

<style lang="scss">
	.header {
		width: 92%;
		padding: 0 4%;
		height: 79upx;
		display: flex;
		justify-content: space-around;
		align-items: flex-end;
		position: fixed;
		z-index: 10;
		background-color: #fff;
		border-bottom: solid 1upx #eee;

		.target {
			width: 20%;
			height: 60upx;
			display: flex;
			justify-content: center;
			align-items: center;
			font-size: 28upx;
			margin-bottom: -2upx;
			color: #aaa;

			&.on {
				color: #555;
				border-bottom: 4upx solid #f06c7a;
				font-weight: 600;
				font-size: 30upx;
			}
		}
	}

	.place {
		background-color: #ffffff;
		height: 100upx;
	}
	
	.goods-list {
		width: 100%;
		
		.product-list {
			width: 92%;
			padding: 0 4% 3vw 4%;
			column-count: 2;
			column-gap: 1em;
			.product {
				break-inside: avoid;
				border-radius: 20upx;
				background-color: #fff;
				margin: 0 0 15upx 0;
				box-shadow: 0upx 5upx 25upx rgba(0, 0, 0, 0.1);
				image {
					width: 100%;
					border-radius: 20upx 20upx 0 0;
				}
				.product__name {
					width: 92%;
					padding: 6upx 4%;
					display: -webkit-box;
					-webkit-box-orient: vertical;
					-webkit-line-clamp: 2;
					text-align: justify;
					overflow: hidden;
					font-size: 30upx;
				}
			}
		}
	}
</style>
