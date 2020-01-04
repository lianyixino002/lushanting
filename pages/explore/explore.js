// pages/explore/explore.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    explores:[
      {
        imgPath:'../../assets/images/explore21.png',
        bName:'三体：死神永生',
        aName:'刘慈欣'
      },
      {
        imgPath: '../../assets/images/explore22.png',
        bName: '百年孤独',
        aName: '加西亚·马尔克斯'

      },
      {
        imgPath: '../../assets/images/explore23.png',
        bName: '平凡的世界',
        aName: '路遥'

      },
      {
        imgPath: '../../assets/images/explore24.png',
        bName: '未来简史',
        aName: '尤瓦尔·赫拉利'

      },

    ],
    ex1Show: true,
    ex2Show: false,
  },
  showEx2: function() {
    this.setData({
      ex1Show: false,
      ex2Show: true,
    })
  },
  showEx1: function() {
    this.setData({
      ex1Show: true,
      ex2Show: false,
    })
  },
  jumpBD:app.jumpBD,
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