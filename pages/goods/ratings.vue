<template>
	<view class="content">
		<video v-show="showVideo" :src="videoSrc" @fullscreenchange="videoControl" class="myVideo" id="myVideo"></video>
		<view class="label">
			<view @tap="handleLabel(index)" v-for="(item,index) in labelList" :class="{on: index == labelIndex}" :key="index">
				{{item.name}}({{item.number}})
			</view>
		</view>
		<view class="comment-list">
			<view class="comment__content" v-for="(rating, index) in ratingsList" :key="index">
				<view class="comment__left">
					<view class="comment__figure">
						<image :src="rating.face"></image>
					</view>
				</view>
				<view class="comment__right">
					<view class="name-date">
						<view class="username">
							{{rating.username}}
						</view>
						<view class="date">
							{{rating.date}}
						</view>
					</view>
					<view class="spec">
						{{rating.spec}}
					</view>
					<view class="medias">
						<view class="medias__content">
							{{rating.content}}
						</view>
						<view class="img-video">
							<view @tap="playVideo(video.path)" class="box" v-for="video in rating.video" :key="video.path">
								<image mode="aspectFill" :src="video.img"></image>
								<view class="playbtn">
									<view class="icon iconfont">&#xe7e9;</view>
								</view>
							</view>
							<view @tap="showBigImg(image,rating.img)" class="box" v-for="(image,i) in rating.img" :key="i">
								<image mode="aspectFill" :src="image"></image>
							</view>
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				showVideo: true,
				videoSrc: "",
				videoContext: null,
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
			// #ifdef MP
			this.showVideo = false;
			// #endif
			try {
				const comments = uni.getStorageSync('comments');
				if (comments) {
					this.ratingsList = comments
					// console.log(this.ratingsList);
				}
			} catch (e) {
				//TODO handle the exception
				console.log(e);
			}
		},
		methods: {
			handleLabel(index) {
				this.labelIndex = index
			},
			showBigImg(img, images) {
				uni.previewImage({
					current: img,
					urls: images
				})
			},
			playVideo(path) {
				this.videoSrc = path;
				this.$nextTick(() => {
					this.videoContext.requestFullScreen({
						direction: 0
					})
				})
			},
			videoControl(e) {
				if (e.detail.fullScreen) {
					this.videoContext.play()
				} else {
					// 停止播放
					// #ifdef APP-PLUS
					this.videoContext.stop()
					// #endif
					this.videoPause()
				}
			},
			videoPause() {
				this.videoSrc = "";

				// #ifdef MP
				this.showVideo = false;
				// #endif
			}
		},
		onReady() {
			this.videoContext = uni.createVideoContext('myVideo');
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

		.comment-list {
			width: 100%;
			flex-wrap: wrap;
			padding: 20upx 0;

			.comment__content {
				width: 100%;
				margin-top: 30upx;

				.comment__left {
					width: 10vw;
					flex-shrink: 0;
					margin-right: 10upx;

					.comment__figure {
						width: 100%;

						image {
							width: 10vw;
							height: 10vw;
							border-radius: 100%;
						}

					}
				}

				.comment__right {
					width: 100%;
					flex-wrap: wrap;

					.name-date {
						width: 100%;
						justify-content: space-between;
						align-items: baseline;

						.username {
							font-size: 32upx;
							color: #555;
						}

						.date {
							font-size: 28upx;
							color: #aaa;
						}
					}

					.spec {
						width: 100%;
						color: #aaa;
						font-size: 26upx;
					}

					.medias {
						width: 100%;
						flex-wrap: wrap;

						.medias__content {
							width: 94%;
							padding: 0 3%;
							font-size: 30upx;
						}

						.img-video {
							width: 100%;
							flex-wrap: wrap;

							.box {
								width: calc((84.6vw - 50upx)/4);
								height: calc((84.6vw - 50upx)/4);
								margin: 5upx 5upx;
								position: relative;
								justify-content: center;
								align-items: center;

								image {
									position: absolute;
									width: 100%;
									height: 100%;
									border-radius: 10upx;
								}

								.playbtn {
									position: absolute;

									.icon {
										font-size: 80upx;
										color: rgba(255, 255, 255, .9)
									}
								}
							}
						}
					}
				}
			}
		}

		.myVideo {
			position: fixed;
			top: 50%;
			right: 100%;
			// #ifdef  MP
			top: 0;
			right: 0;
			z-index: 99;
			width: 100%;
			height: 100%;
			// #endif
		}
	}
</style>
