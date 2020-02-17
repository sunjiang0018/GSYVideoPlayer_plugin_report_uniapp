<template>
	<view class="content">
		<image class="logo" src="/static/logo.png"></image>
		<view class="text-area">
			<text class="title">{{message}}</text>
			<div>
				<button class="btn" @click="openVideo">视频播放</button>
			</div>
			<video src="https://sightpvideo-cdn.sightp.com/sdkvideo/EasyARSDKShow201520.mp4"></video>
		</view>
	</view>
</template>

<script>
	export default {
		onLoad() {

		},
		methods: {

			openVideo() {
				const videoPlayer = uni.requireNativePlugin('gsyvideoplayer-plugin');
				videoPlayer.open(callback);

				function callback(res) {
					console.log("callback")
					uni.showModal({
						title: "test",
						content: JSON.stringify(res)
					});
				}

			}


		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>
