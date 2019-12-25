<template>
	<view class="popup" @tap.self="hide" v-show="spaceInfo.showSpace">
		<view class="layer">
			<view class="layer__content">


				<view class="layer__title">
					选择规格：
				</view>
				<view class="layer__spec-list">
					<view @tap="handleSelect(spec)" :class="{on: goodsInfo.spec == spec}" class="spec-item" v-for="(spec, index) in goodsData.spec"
					 :key="index">
						{{spec}}
					</view>
				</view>
				<!-- 数量 -->
				<view class="number">
					<view class="number__text">数量</view>
					<counter @sub="sub" @add="add" :goodsInfo="goodsInfo"></counter>
				</view>
			</view>
			<!-- 确定按钮 -->
			<view class="btn">
				<view @tap="hide" class="button">确定</view>
			</view>
		</view>
	</view>
</template>

<script>
	import counter from './counter.vue';
	export default {
		components: {
			counter
		},
		props: {
			spaceInfo: Object,
			goodsInfo: Object,
			goodsData: Object
		},
		methods: {
			handleSelect(spec) {
				this.$emit('select-spec', spec)
			},
			hide() {
				this.$emit('hide-pop');
			},
			sub() {
				this.$emit('sub')
			},
			add() {
				this.$emit('add')
			}
		}
	}
</script>

<style lang="scss">
	.popup {
		position: fixed;
		z-index: 20;
		top: 0;
		left: 0;
		height: 100%;
		width: 100%;
		background-color: rgba($color: #000000, $alpha: .6);

		// backdrop-filter: blur(10px);
		.layer {
			position: fixed;
			bottom: 0;
			width: 92%;
			padding: 0 4%;
			height: 72%;
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			border-radius: 20upx 20upx 0 0;
			background-color: #FFFFFF;
			
			.layer__content {
				padding: 20upx 0;
			}

			.layer__title {
				margin: 30upx 0;
				font-size: 30upx;
			}

			.layer__spec-list {
				display: flex;
				align-items: center;


				.spec-item {
					padding: 4upx 20upx;
					margin-bottom: 20upx;
					border-radius: 10upx;
					font-size: 28upx;
					background-color: #f6f6f6;

					&:not(:last-child) {
						margin-right: 30upx;
					}

					&.on {
						border: 2upx solid #f47925;
					}
				}
			}

			.number {
				margin-top: 30upx;
				padding-top: 20upx;
				border-top: solid 1upx #aaa;
				display: flex;
				align-items: center;
				justify-content: space-between;
				.number__text {
					font-size: 30upx;
				}
			}

			.btn {
				width: 100%;
				height: 100upx;

				.button {
					width: 100%;
					height: 80upx;
					border-radius: 40upx;
					color: #fff;
					display: flex;
					align-items: center;
					justify-content: center;
					background-color: #f47952;
					font-size: 28upx;
				}
			}
		}
	}
</style>
