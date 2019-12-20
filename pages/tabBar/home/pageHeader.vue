<template>
	<view>

		<view class="header">
			<!-- 地址 -->
			<view class="address-box">
				<view class="icon iconfont">
					&#xe650;
				</view>
				<text>{{city}}</text>
			</view>
			<!-- 搜索框 -->
			<view class="input-box">
				<input type="text" placeholder="some words..." placeholder-style="color: #c0c0c0" />
				<view class="icon iconfont">
					&#xe65c;
				</view>
			</view>
			<!-- 提示 -->
			<view class="notice">
				<view class="icon iconfont">
					&#xe70a;
				</view>
			</view>
		</view>
		<!-- 占位 -->
		<view class="place">
			
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				city: '北京'
			}
		}
	}
</script>

<style lang="scss">
	.header {
		width: 92%;
		padding: 0 4%;
		height: 100upx;
		display: flex;
		align-items: center;
		position: fixed;
		top: 0;
		z-index: 10;
		background-color: #FFFFFF;
		// 条件编译，设置距离顶部的高度
		/* #ifdef APP-PLUS */
		top: var(--status-bar-height);

		/* #endif */
		.address-box {
			display: flex;
			align-items: center;
			width: 120upx;
			height: 60upx;
			flex-shrink: 0;
			font-size: 25upx;

			.icon {
				height: 60upx;
				margin-right: 5upx;
				display: flex;
				align-items: center;
				font-size: 42upx;
				color: #ffc50a;
			}
		}

		.input-box {
			width: 100%;
			height: 60upx;
			display: flex;
			align-items: center;
			position: relative;
			border-radius: 30upx;
			background-color: #f5f5f5;

			.icon {
				position: absolute;
				right: 0;
				top: 0;
				display: flex;
				align-items: center;
				width: 60upx;
				height: 60upx;
				font-size: 34upx;
				color: #c0c0c0;
			}

			input {
				padding-left: 28upx;
				height: 28upx;
				font-size: 28upx;
			}
		}

		.notice {
			width: 60upx;
			height: 60upx;
			flex-shrink: 0;
			display: flex;

			.icon {
				width: 60upx;
				height: 60upx;
				display: flex;
				justify-content: flex-end;
				align-items: center;
				font-size: 42upx;
			}
		}

	}
	
	.place {
		height: 100upx;
		background-color: #FFFFFF;
		/* #ifdef APP-PLUS */
		margin-top: var(--status-bar-height);
		/* #endif */
	}
</style>
