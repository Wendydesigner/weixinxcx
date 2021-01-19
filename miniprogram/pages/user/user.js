const app = getApp();
Page({
    data: {
        avatarUrl: './user-unlogin.png',
        userInfo: {},
        logged: false,
        takeSession: false,
        requestResult: '',
        background:[
            'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1585222338879&di=0c92ffe5102172d2f79285a9f94891bf&imgtype=0&src=http%3A%2F%2Ft9.baidu.com%2Fit%2Fu%3D1307125826%2C3433407105%26fm%3D79%26app%3D86%26f%3DJPEG%3Fw%3D5760%26h%3D3240',
            'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1585222338879&di=d2b8260c92929e04590c623dd5801a21&imgtype=0&src=http%3A%2F%2Ft9.baidu.com%2Fit%2Fu%3D2268908537%2C2815455140%26fm%3D79%26app%3D86%26f%3DJPEG%3Fw%3D1280%26h%3D719',
            'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1585222338878&di=b0b390f7d394ebd51afbb92a432cdccc&imgtype=0&src=http%3A%2F%2Ft9.baidu.com%2Fit%2Fu%3D86853839%2C3576305254%26fm%3D79%26app%3D86%26f%3DJPEG%3Fw%3D750%26h%3D390'
        ],
        settingList: [
            {
                icon: 'pencil',
                text: '我的上传'
            },
            {
                icon: 'shop',
                text: '我的订单'
            },
            {
                icon: 'like',
                text: '我的收藏'
            },
            {
                icon: 'download',
                text: '我的下载'
            },
            {
                icon: 'setting',
                text: '设置'
            }
        ]
    },

    onLoad: function() {

        // 获取用户信息
        wx.getSetting({
            success: res => {
                if (res.authSetting['scope.userInfo']) {
                    // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
                    wx.getUserInfo({
                        success: res => {
                            this.setData({
                                avatarUrl: res.userInfo.avatarUrl,
                                userInfo: res.userInfo
                            });
                            console.log(res.userInfo);
                        }
                    });
                }
            }
        });
    },
    onGetUserInfo: function(e) {
        if (!this.data.logged && e.detail.userInfo) {
            this.setData({
                logged: true,
                avatarUrl: e.detail.userInfo.avatarUrl,
                userInfo: e.detail.userInfo
            });
        }
    }
});