<template>
	<view class="counter">
		<view class="sub" @tap.stop="sub">
			<view class="icon iconfont">&#xe768;</view>
		</view>
		<view class="input">
			<input type="text" @tap.stop @change="change" v-model="goodsInfo.number" />
		</view>
		<view class="add" @tap.stop="add">
			<view class="icon iconfont">&#xe767;</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			goodsInfo: Object
		},
		methods: {
			sub() {
				this.$emit('sub')
			},
			add() {
				this.$emit('add')
			},
			change(e) {
				this.$emit('change')
				this.$parent.$emit('change', e.target.value)
			}
		}
	}
</script>

<style lang="scss">
	.counter {
		display: flex;
		justify-content: center;
		align-items: center;

		.input {
			width: 80upx;
			height: 60upx;
			margin: 0 10upx;
			background-color: #f3f3f3;
			display: flex;
			justify-content: center;
			align-items: center;
			text-align: center;

			input {
				width: 100%;
				height: 100%;
				display: flex;
				justify-content: center;
				align-items: center;
				text-align: center;
				font-size: 26upx;
			}
		}

		.sub,
		.add {
			width: 60upx;
			height: 60upx;
			background-color: #f3f3f3;
			border-radius: 5upx;

			.icon {
				font-size: 30upx;
				width: 60upx;
				height: 60upx;
				display: flex;
				justify-content: center;
				align-items: center;
			}
		}
	}
</style>
