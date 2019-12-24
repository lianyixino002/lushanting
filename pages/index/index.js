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
        color: '#f54d82'
      },
      {
        text: "职场热门",
        color: '#59b080'
      }, {
        text: "都市言情",
        color: '#ec575e'
      }, {
        text: "哈弗大学经济管理类",
        color: '#9060e8'
      }, {
        text: "领导才能",
        color: '#ded658'
      },
    ],
  },
  rundomcolor: function() {
    var r = parseInt(Math.floor(Math.random() * 255), 10).toString(16);
    r = r.length == 2 ? r = r : r = '0' + r;
    var g = parseInt(Math.floor(Math.random() * 255), 10).toString(16);
    g = g.length == 2 ? g = g : g = '0' + g;
    var b = parseInt(Math.floor(Math.random() * 255), 10).toString(16);
    b = b.length == 2 ? b = b : b = '0' + b;
    // var rgb = 'rgb(' + r + ',' + g + ',' + b + ')';
    return '#' + r + g + b;
    // console.log('#' + r + g + b);
  },


  //事件处理函数
  onLoad: function() {
    // function rundomcolor() {
    //   var r = parseInt(Math.floor(Math.random() * 255), 10).toString(16);
    //   r = r.length == 2 ? r = r : r = '0' + r;
    //   var g = parseInt(Math.floor(Math.random() * 255), 10).toString(16);
    //   g = g.length == 2 ? g = g : g = '0' + g;
    //   var b = parseInt(Math.floor(Math.random() * 255), 10).toString(16);
    //   b = b.length == 2 ? b = b : b = '0' + b;
    //   // var rgb = 'rgb(' + r + ',' + g + ',' + b + ')';
    //   return r + g + b;
    //   // console.log('#' + r + g + b);
    // };
    // this.setData({
    //   color:rundomcolor(),
    // })
    // console.log(this.color);
  },
  getUserInfo: function() {}
})