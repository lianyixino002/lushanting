//app.js
App({
  onLaunch: function() {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },
  globalData: {
    userInfo: null,
    reading: [{
        imgPath: "../../assets/images/book1.png",
        bN: '三体：死神永生',
        aN: '刘慈欣'
      },
      {
        imgPath: "../../assets/images/book2.png",
        bN: '人类简史',
        aN: '尤瓦尔·郝拉利'
      },
      {
        imgPath: "../../assets/images/book3.png",
        bN: '许三观卖血记',
        aN: '余华'
      },
    ],
    notRead: [{
        imgPath: "../../assets/images/book1.png",
        bN: '三体：死神永生',
        aN: '刘慈欣'
      },
      {
        imgPath: "../../assets/images/book2.png",
        bN: '人类简史',
        aN: '尤瓦尔·郝拉利'
      },
      {
        imgPath: "../../assets/images/book3.png",
        bN: '许三观卖血记',
        aN: '余华'
      }, {
        imgPath: "../../assets/images/book1.png",
        bN: '三体：死神永生',
        aN: '刘慈欣'
      },
      {
        imgPath: "../../assets/images/book2.png",
        bN: '人类简史',
        aN: '尤瓦尔·郝拉利'
      },
      {
        imgPath: "../../assets/images/book3.png",
        bN: '许三观卖血记',
        aN: '余华'
      },
    ],

  },
  jumpBD: function() {
    wx.navigateTo({
      url: '../bookDetail/bookDetail',
    })
  },
  jumpAD: function() {
    wx.navigateTo({
      url: '../authorD/authorD',
    })
  },
  jumpAS: function() {
    wx.navigateTo({
      url: '../authors/authors',
    })
  },


})