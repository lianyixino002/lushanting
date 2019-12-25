// pages/bookDetail/bookDetail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    change: false,
    collection: true
  },
  goBack: function() {
    wx.navigateBack({
      delta: 2
    })
  },
  changeC: function() {
    if (this.data.change == true) {
      this.setData({
        change: false,
      })
      return 0;
    }
    if (this.data.change == false) {
      this.setData({
        change: true,
      })
      return 0;
    }

  },
  coll: function() {
    if (this.data.collection == true) {
      this.setData({
        collection: false,
      })
      return 0;
    }
    if (this.data.collection == false) {
      this.setData({
        collection: true,
      })
      return 0;
    }
    console.log(1);
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