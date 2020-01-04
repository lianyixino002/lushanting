// pages/authorD/authorD.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    books: [{
        imgPath: '../../assets/images/authorD1.png',
        name: '鱼王',
        count: '5.0',
        short: '全书由十三个内容相对独立的“叙事短篇小说”组成，全部围绕着人与自然的关系...',
        reading: '366'
      },
      {
        imgPath: '../../assets/images/authorD2.png',
        name: '不可思议的朋友',
        count: '5.0',
        short: '全书由十三个内容相对独立的“叙事短篇小说”组成，全部围绕着人与自然的关系...',
        reading: '366'
      },
      {
        imgPath: '../../assets/images/authorD1.png',
        name: '步履不停',
        count: '5.0',
        short: '全书由十三个内容相对独立的“叙事短篇小说”组成，全部围绕着人与自然的关系...',
        reading: '366'
      }

    ],
    share:false,
  },
  jumpBD: app.jumpBD,
  showShare: function() {
    this.setData({
      share: !this.data.share,
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

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