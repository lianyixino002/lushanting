const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    reading: app.globalData.reading,
    list: [{
        text: '科幻',
        bShow: true
      },
      {
        text: '职场',
        bShow: false
      },
      {
        text: '言情',
        bShow: false
      },

      {
        text: '艺术',
        bShow: false
      },

      {
        text: '科学',
        bShow: false
      },
      {
        text: '军事',
        bShow: false
      },

    ],
    indicatorDots: false, //是否显示面板指示点
    indicatorColor: "rgba(0, 0, 0, .3)", //指示点颜色
    indicatorActiveColor: "#007aff", //当前选中的指示点颜色
    autoplay: false, //是否自动切换
    interval: 5000, //自动切换时间间隔
    duration: 1000, //滑动动画时长
    circular: false, //是否采用衔接滑动
  },
  cB: function(e) {
    let lists = this.data.list;
    let index = e.currentTarget.dataset.index;
    //标识符全部初始化成false
    lists.forEach(function(item, index) {
      item.bShow = false;
    })
    //控制当前index变
    lists[index].bShow = !lists[index].bShow;
    this.setData({
      list: lists,
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