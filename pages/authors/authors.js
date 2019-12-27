// pages/author/author.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    science: '作者',
    rank: '热门作者',
    rank1: '新晋作者',
    rank2: '其他作者',
    all: '查看全部',
    list1: [{
        touxiang: '../../assets/images/images/tansuo1_3.png',
        name: '李小军',
        follow: true
      },
      {
        touxiang: '../../assets/images/images/tansuo1_5.png',
        name: '李小军',
        follow: true
      },
      {
        touxiang: '../../assets/images/images/tansuo1_7.png',
        name: '李小军',
        follow: true
      },
      {
        touxiang: '../../assets/images/images/tansuo1_9.png',
        name: '李小军',
        follow: false,
      },
      {
        touxiang: '../../assets/images/images/tansuo1_9.png',
        name: '李小军',
        follow: false,
      },
      {
        touxiang: '../../assets/images/images/tansuo1_9.png',
        name: '李小军',
        follow: false,
      },
      {
        touxiang: '../../assets/images/images/tansuo1_9.png',
        name: '李小军',
        follow: false,
      }

    ],
    indicatorDots: false, //是否显示面板指示点
    indicatorColor: "rgba(0, 0, 0, .3)", //指示点颜色
    indicatorActiveColor: "#007aff", //当前选中的指示点颜色
    autoplay: false, //是否自动切换
    interval: 5000, //自动切换时间间隔
    duration: 1000, //滑动动画时长
    circular: true, //是否采用衔接滑动
    circular: true
  },
  jumpAD: app.jumpAD, 
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },
  already: function() {
    console.log(1)
    this.setData({
      follow: !this.data.follow
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})