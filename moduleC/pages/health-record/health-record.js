// pages/jiankangjilu/jiankangjilu.js
const app=getApp();

const ajax=app.myRequest();
import config from '../../../config.js';
Page({

  /**
   * 页面的初始数据
   */
  data: {
    breathRate:'',heartRate:''
  },

  breathInput(e){
    this.setData({
      breathRate:e.detail.value
    })
  },

  heartInput(e){
    this.setData({
      heartRate:e.detail.value
    })
  },
  save(){
    const data={}
    data.breath=Number(this.data.breathRate)
    data.heartRate=Number(this.data.heartRate)
    ajax.postRequest('/api/user/submitHealth',data).then((res)=>{
      console.log(res);
      wx.showToast({
        title: '保存成功',
      })
    }).catch((err)=>{
      wx.showToast({
        title: '保存失败',
      })
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.getData();
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  getData(){
    ajax.getRequest('/api/user/getHealth',{}).then((res)=>{
      var data=res.data.data
      this.setData({
        breathRate:String(data.breath),
        heartRate:String(data.heartRate)
      })
    }).catch((err)=>{
      console.log(err);
    })
  },
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

  }
})