<template>
	<view class="header">
		<view class="header-box">
			<view class="back">
				<view v-if="showBack" class="icon iconfont" @tap="back">
					&#xe679;
				</view>
			</view>
			<view class="shop-cart">
				<view class="icon iconfont">
					&#xe6af;
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				// #ifndef MP
				showBack: true
				// #endif
			}
		},
		methods: {
			back() {
				uni.navigateBack()
			}
		},
		onLoad() {
			// #ifndef MP
			this.showBack = false
			// #endif
		}
	}
</script>

<style lang="scss">
	.header {
		width: 100%;
		position: fixed;
		top: 0;
		left: 0;
		height: 100upx;
		z-index: 10;
		/* #ifdef APP-PLUS */
			top: var(--status-bar-height);
		/* #endif */

		.header-box {
			width: 92%;
			height: 100upx;
			padding: 0 4%;
			display: flex;
			justify-content: space-between;
			align-items: center;


			.icon {
				display: flex;
				justify-content: center;
				align-items: center;
				width: 60upx;
				height: 60upx;
				border-radius: 50%;
				background-color: rgba(0, 0, 0, 0.2);
				color: #FFFFFF;
				font-size: 42upx;
			}

		}
	}
</style>
