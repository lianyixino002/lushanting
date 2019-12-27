//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    img1: [{
        path: "../../assets/images/kind1.png",
        text: "科幻",
      },
      {
        path: "../../assets/images/kind2.png",
        text: "生活",
      },
      {
        path: "../../assets/images/kind3.png",
        text: "露营",
      },
      {
        path: "../../assets/images/kind4.png",
        text: "职场",
      },

    ],
    border: [{
        text: "2018排行榜",
        color: ''
      },
      {
        text: "职场热门",
        color: ''
      }, {
        text: "都市言情",
        color: ''
      }, {
        text: "哈弗大学经济管理类",
        color: ''
      }, {
        text: "领导才能",
        color: ''
      },
    ],
    reading: app.globalData.reading,
    notRead: app.globalData.notRead,

  },
  rundomcolor: function() {
    var r = parseInt(Math.floor(Math.random() * 255), 10).toString(16);
    r = r.length == 2 ? r = r : r = '0' + r;
    var g = parseInt(Math.floor(Math.random() * 255), 10).toString(16);
    g = g.length == 2 ? g = g : g = '0' + g;
    var b = parseInt(Math.floor(Math.random() * 255), 10).toString(16);
    b = b.length == 2 ? b = b : b = '0' + b;
    return '#' + r + g + b;
  },
  jumpScience: function() {
    wx.navigateTo({
      url: '../science/science',
    });
  },
  jumpSearch: function() {
    wx.navigateTo({
      url: '../search/search',
    })
  },
  jumpBD: app.jumpBD,
  //事件处理函数
  onReady: function() {
    let borders = this.data.border;
    for (let i = 0; i < 5; i++) {
      let a = this.rundomcolor();
      console.log(a);
      borders[i].color = a;
      this.setData({
        border: borders,
      })
    }
  },
  getUserInfo: function() {}
})