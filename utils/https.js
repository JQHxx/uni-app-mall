module.exports = (params) => {
	let url = params.url;
	let method = params.method;
	let header = params.header || {};
	let data = params.data || {};

	// 请求方式 GET POST
	if (method) {
		method = method.toUpperCase();
		if (method == "POST") {
			header = {
				"content-type": "application/x-www-form-urlencoded"
			}
		}
	}

	// 网络请求动画
	if (!params.hideLoading) {
		uni.showLoading({
			title: "加载中"
		})
	}

	// 发起请求
	uni.request({
		url: url,
		method: method || "GET",
		header: header,
		data: data,
		success: (res) => {
			if (res.statusCode && res.statusCode != 200) {
				//api错误
				uni.showModal({
					content: res.msg
				});
				return;
			}
			typeof params.success == "function" && params.success(res.data);
		},
		fail: (e) => {
			uni.showModal({
				content: e.msg
			})
			typeof params.fail == 'function' && params.fail(e.data);
			return;
		},
		complete: (res) => {
			uni.hideLoading();
			typeof params.complete == "function" && params.complete(res.data);
			return;
		}
	})
}
