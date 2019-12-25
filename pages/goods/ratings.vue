<template>
	<view class="content">
		<view class="label">
			<view @tap="handleLabel(index)" v-for="(item,index) in labelList" :class="{on: index == labelIndex}" :key="index">
				{{item.name}}({{item.number}})
			</view>
		</view>
		<view class="comment-list">
			<view class="comment__content">
				
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				ratingsList: [],
				labelList: [{
						name: '全部',
						number: 25,
						type: 'all'
					},
					{
						name: '好评',
						number: 23,
						type: 'good'
					},
					{
						name: '中评',
						number: 1,
						type: 'secondary'
					},
					{
						name: '差评',
						number: 1,
						type: 'poor'
					},
					{
						name: '有图',
						number: 12,
						type: 'img'
					},
					{
						name: '视频',
						number: 2,
						type: 'video'
					},
					{
						name: '追加',
						number: 2,
						type: 'append'
					}
				],
				labelIndex: 0, // 当前评论的下标
			}
		},
		onLoad() {
			try {
				const comments = uni.getStorageSync('comments');
				if (comments) {
					this.ratingsList = comments
					console.log(this.ratingsList);
				}
			} catch (e) {
				//TODO handle the exception
				console.log(e);
			}
		},
		methods: {
			handleLabel(index) {
				this.labelIndex = index
			}
		}
	}
</script>

<style lang="scss">
	.content {
			view {
				display: flex;
			}
	
			width: 94%;
			padding: 0 3%;
	
			.label {
				width: 100%;
				flex-wrap: wrap;
	
				view {
					padding: 0 20upx;
					height: 50upx;
					border-radius: 40upx;
					border: solid 1upx #ddd;
					align-items: center;
					color: #555;
					font-size: 26upx;
					background-color: #f9f9f9;
					margin: 10upx 20upx 10upx 0;
	
					&.on {
						border: solid 1upx #f06c7a;
						color: #f06c7a;
					}
				}
			}
		}
</style>
