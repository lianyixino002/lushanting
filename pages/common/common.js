const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    comment: [{
        imgPath: '../../assets/images/bookDetailUser1.png',
        userName: '你个废物',
        content: '大刘塑造的女性都具有明显的圣母特质，但是本质，上弱爆了。叶是文革的毒瘤，庄是定制禁脔，程最经典站在圣母和傻逼的微笑曲线上。大刘塑造的男性都带有明显的缺陷但本质上极端人性化。-身痞气的小人物大史，最高情商让他活得最明白;罗辑的荒唐和不羁让他成了救世主，但也决定了他必不能善终;软弱怯懦固执的云天明，也并无理由因为慷慨和运气就得到爱啊。但我真心理解这样的人，这样的性格，这样的命运。',
        time: '12-04 21:20',
        xin: '134',
        ping: '89',
        dian: false,
      },
      {
        imgPath: '../../assets/images/bookDetailUser2.png',
        userName: '猪是糖缺死的',
        content: '鉴于这年头写书评是种费力不讨好一不小心就被客观被装逼被代表全亚洲的行为艺术，楼主在读完《三体3》(以 下省略书名号，以下所有提及的书刊杂志一律省略书名号，因为太麻烦)后，用了五秒钟做出重要决定: 老子只写读后感。所谓读后 感的意思就是，这是一个完全个人完全主观。',
        time: '12-04 21:20',
        xin: '134',
        ping: '89',
        dian: false,
      },
      {
        imgPath: '../../assets/images/bookDetailUser3.png',
        userName: '四肢发达头脑复杂',
        content: '刘慈欣写这个人就没想过让读者喜欢，这不是读者会喜欢的人。她其实很自私，但这种自私和普通的自私不一样，因为她自2党察不到。遵循道德的人其实很自私，因为他们除了道德和良心什么都不管，程心恰恰就是一个这样的人。她会认为自己很崇高，认为自己不自私，认为自己的价值观和道德准则是普世的正确的。',
        time: '12-04 21:20',
        xin: '134',
        ping: '89',
        dian: false,
      },
    ]
  },
  changeXin: function(e) {
    // console.log(e.currentTarget.dataset.index);
    let index = e.currentTarget.dataset.index;
    // console.log(e);
    let comments = this.data.comment;
    comments[index].dian = !comments[index].dian;
    this.setData({
      comment:comments,
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