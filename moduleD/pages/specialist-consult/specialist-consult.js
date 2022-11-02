// moduleD/pages/specialistConsult/specialistConsult.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    specialists:[{
      name:'荷花医生',
      place:'浙江人民医院',
      job:'五官科专家',
      imgurl:'https://s2.loli.net/2022/08/01/y76Jmbs2awtNlzA.jpg',
      url:'/moduleD/pages/consultroom/consultroom'
    },
   {
      name:'李华医生',
      place:'浙江人民医院',
      job:'骨科专家',
      imgurl:'https://s2.loli.net/2022/08/01/y76Jmbs2awtNlzA.jpg',
      url:'/moduleD/pages/consultroom/consultroom'
    }
  ]
  },
  returnBack(){
    wx.navigateBack();
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  },

})