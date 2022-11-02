// pages/jibingqingkuang/jibingqingkuang.js
const app=getApp();
const ajax=app.myRequest();
const diseaseList=['gastritis','asthma','hypertension','coronaryAtheroscleroticHeartDisease','hyperlipidemia','fattyLiverDisease','diabetes','gout']
import config from '../../../config.js';
Page({
  /**
   * 页面的初始数据
   */
  data: {
    array:
    [
      {name:'急慢性胃炎', checked:false,number:1},
      {name:'哮喘', checked:false,number:2},
      {name:'高血压', checked:false,number:3},
      {name:'冠心病', checked:false,number:4},
      {name:'高血脂', checked:false,number:5},
      {name:'脂肪肝', checked:false,number:6},
      {name:'糖尿病', checked:false,number:7},
      {name:'痛风', checked:false,number:8}],
  },
  checkboxChange(e){
    const item=this.data.array
    const value=e.detail.value
    for (let i=0;i<8;i++){
      item[i].checked=false
      for (let j=0;j<e.detail.value.length;j++){
        if (value[j]==item[i].name){
          item[i].checked=true
          break
        }
      }
    }
  },
 
  save(){
    const arr=this.data.array
    var data={}
    diseaseList.forEach(function(item,index){
      console.log(item,index);
      data[item]=arr[index].checked
    })
    ajax.postRequest('/api/user/submitDisease',data).then((res)=>{
      wx.showToast({
        title: '保存成功',
      })
    }).catch((err)=>{
      console.log(err);
   })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    const arr0='array[0].checked'
    const arr1='array[1].checked'
    const arr2='array[2].checked'
    const arr3='array[3].checked'
    const arr4='array[4].checked'
    const arr5='array[5].checked'
    const arr6='array[6].checked'
    const arr7='array[7].checked'
    ajax.getRequest('/api/user/getDisease',{}).then((res)=>{
      var data=res.data.data
      this.setData({
        [arr0]:res.data.data.gastritis,
        [arr1]:res.data.data.asthma,
        [arr2]:res.data.data.hypertension,
        [arr3]:res.data.data.coronaryAtheroscleroticHeartDisease,
        [arr4]:res.data.data.hyperlipidemia,
        [arr5]:res.data.data.fattyLiverDisease,
        [arr6]:res.data.data.diabetes,
        [arr7]:res.data.data.gout 
      })
    }).catch((err)=>{
      console.log(err);
    })
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

  }
})