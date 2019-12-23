<template>
	<!-- 状态栏 -->
	<view class="status">
	</view>
</template>

<script>
</script>

<style lang="scss">
	.status {
		position: fixed;
		width: 100%;
		top: 0;
		left: 0;
		z-index: 999;
		background-color: #FFFFFF;
		height: 0;
		/* #ifdef APP-PLUS */
		height: var(--status-bar-height);
		/* #endif */ 
	}
</style>
