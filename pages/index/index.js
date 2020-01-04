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
    kind: [{
        imgPath: '../../assets/images/kind1.png',
        text: '科幻'
      },
      {
        imgPath: '../../assets/images/kind2.png',
        text: '生活'
      },
      {
        imgPath: '../../assets/images/kind3.png',
        text: '露营'
      },
      {
        imgPath: '../../assets/images/kind2.png',
        text: '职场'
      },
      {
        imgPath: '../../assets/images/kind1.png',
        text: '江湖'
      },

    ],
    authors: [{
        imgPath: '../../assets/images/kind5.png',
        text: '刘慈欣'
      },
      {
        imgPath: '../../assets/images/kind6.png',
        text: '田小花'
      },
      {
        imgPath: '../../assets/images/kind7.png',
        text: '马尔克斯'
      },
      {
        imgPath: '../../assets/images/kind6.png',
        text: '余秋生'
      },
      {
        imgPath: '../../assets/images/kind8.png',
        text: '刘睿'
      },

    ],

    reading: app.globalData.reading,
    books: app.globalData.books,
    indicatorDots: false, //是否显示面板指示点
    indicatorColor: "rgba(0, 0, 0, .3)", //指示点颜色
    indicatorActiveColor: "#007aff", //当前选中的指示点颜色
    autoplay: false, //是否自动切换
    interval: 5000, //自动切换时间间隔
    duration: 1000, //滑动动画时长
    circular: false, //是否采用衔接滑动
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
  jumpAD: app.jumpAD,
  jumpAS: app.jumpAS,
  //事件处理函数
  onReady: function() {
    let borders = this.data.border;
    for (let i = 0; i < 5; i++) {
      let a = this.rundomcolor();
      borders[i].color = a;
      this.setData({
        border: borders,
      })
    }
  },
  getUserInfo: function() {}
})