<template>
	<view>
		<view class="block"></view>
		<view class="QR">
			<image src="../../../static/img/qrcode.jpg"></image>
		</view>
		<view class="title">
			欢迎扫码添加, 技术交流, 感情沟通.
		</view>
		<view class="btn" v-show="showBtn" @tap="handleSavePhotos">
			{{savePhotos}}
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				showBtn: false,
				savePhotos: "保存图片"
			}
		},
		onShow() {
			//#ifdef APP-PLUS
				this.showBtn = true;
			//#endif
		},
		methods: {
			handleSavePhotos() {
				this.showBtn = false;
				let wv = this.$mp.page.$getAppWebview();
				let bitMap = new plus.nativeObj.Bitmap();
				this.$nextTick(() => {
					setTimeout(() => {
						wv.draw(bitMap, (succ) => {
							bitMap.save('_doc/Qr.jpg', {
								overwrite: true,
								quality: 100
							}, succ => {
								plus.gallery.save(succ.target, res => {
									uni.showToast({
										title: "保存成功"
									})
									this.showBtn = true;
									bitMap.clear();
								})
							})
						}, err => {
							uni.showToast({
								icon: 'none',
								title: "保存失败"
							})
						}, option => {
							uni.showToast({
								icon: 'none',
								title: "绘制图片失败"
							})
						})
					}, 200)
				})
			}
		}
	}
</script>

<style lang="scss">
	page {
		background-color: #f06c7a;
	}
	
	.block {
		width: 100%;
		height: 30vh;
		background-color: #fff;
		display: flex;
		justify-content: center;
	}
	
	.QR {
		width: 60vw;
		height: 80vw;
		margin: -40vw auto 0 auto;
		background-color: #fff;
		display: flex;
		justify-content: center;
		align-items: center;
	
		image {
			width: 50vw;
			height: 50vw;
		}
	}
	
	.title {
		width: 100%;
		margin-top: 50upx;
		display: flex;
		justify-content: center;
		font-size: 36upx;
		color: #fff;
	}
	
	.btn {
		width: 50%;
		height: 80upx;
		border-radius: 80upx;
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 0 20upx;
		margin: 0 auto;
		margin-top: 50upx;
		background-color: rgba(255, 255, 255, .8);
	}
</style>
