// pages/pianhaojikou/pianhaojikou.js
import config from '../../../config.js';
Page({

  /**
   * 页面的初始数据
   */
  data: {
    array1:[
    {name:'酸味',checked:false},
    {name:'甜味',checked:false},
    {name:'苦味',checked:false},
    {name:'辣味',checked:false},
    {name:'咸味',checked:false},
    {name:'清淡',checked:false},
    {name:'五香',checked:false},
    {name:'葱香',checked:false},
    {name:'蒜香',checked:false},
    {name:'奶香',checked:false},
    {name:'酱香',checked:false},
    {name:'咖喱',checked:false},
    {name:'孜然',checked:false},
    {name:'果味',checked:false},
    {name:'香草',checked:false},
    {name:'甜香',checked:false}
  ], 
  array2:[
    {name:'乳制品过敏',checked:false},
    {name:'蛋白质过敏',checked:false},
    {name:'坚果过敏',checked:false},
    {name:'海鲜过敏',checked:false},
    {name:'大豆过敏',checked:false},
    {name:'小麦过敏',checked:false},
    {name:'花生过敏',checked:false}  
    ]
  },

  checkboxChange1(e){
    const item1=this.data.array1
    const value1=e.detail.value
    for (var i=0;i<16;i++)
    {
     item1[i].checked=false
      for (var j=0;j<e.detail.value.length;j++)
      {
      if (value1[j]==item1[i].name){
        item1[i].checked=true
        break
      }
     }
    }
   },
   checkboxChange2(e){
    const item2=this.data.array2
    const value2=e.detail.value
    for (var i=0;i<7;i++)
    {
      item2[i].checked=false
      for (var j=0;j<e.detail.value.length;j++)
      {
      if (value2[j]==item2[i].name){
        item2[i].checked=true
        break
      }
     }
    }
   },

   save(){
    const arr1=this.data.array1
    const arr2=this.data.array2
    var data={}
    data.sour=arr1[0].checked
    data.sweet=arr1[1].checked
    data.bitterness=arr1[2].checked
    data.spicy=arr1[3].checked
    data.salty=arr1[4].checked
    data.light=arr1[5].checked
    data.fiveSpice=arr1[6].checked
    data.scallion=arr1[7].checked
    data.garlic=arr1[8].checked
    data.milkFragrance=arr1[9].checked
    data.soySauce=arr1[10].checked
    data.curry=arr1[11].checked
    data.cumin=arr1[12].checked
    data.fruity=arr1[13].checked
    data.vanilla=arr1[14].checked
    data.sweetFragrance=arr1[15].checked
    data.dairyAllergy=arr2[0].checked
    data.proteinAllergy=arr2[1].checked
    data.nutAllergy=arr2[2].checked
    data.seafoodAllergy=arr2[3].checked
    data.soyAllergy=arr2[4].checked
    data.wheatAllergy=arr2[5].checked
    data.peanutAllergy=arr2[6].checked
    console.log(wx.getStorageSync('cookieKey'))
        wx.request({
          url: config.url + 'api/user/submitPersonalTaste',
          method:'POST',
          data:data,
          header:{
          'content-type':'application/json',
          'Cookie':wx.getStorageSync('cookieKey')},
          success: (res)=>{
            console.log(res)
            var code=res.data.code
            if (code==200){
              console.log("保存成功")
              wx.showToast({
                title: '保存成功',
              })
            }
          }
    })
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    const arr0='array1[0].checked'
    const arr1='array1[1].checked'
    const arr2='array1[2].checked'
    const arr3='array1[3].checked'
    const arr4='array1[4].checked'
    const arr5='array1[5].checked'
    const arr6='array1[6].checked'
    const arr7='array1[7].checked'
    const arr8='array1[8].checked'
    const arr9='array1[9].checked'
    const arr10='array1[10].checked'
    const arr11='array1[11].checked'
    const arr12='array1[12].checked'
    const arr13='array1[13].checked'
    const arr14='array1[14].checked'
    const arr15='array1[15].checked'
    const arr16='array2[0].checked'
    const arr17='array2[1].checked'
    const arr18='array2[2].checked'
    const arr19='array2[3].checked'
    const arr20='array2[4].checked'
    const arr21='array2[5].checked'
    const arr22='array2[6].checked'
    wx.request({
      url: config.url+'api/user/getPersonalTaste',
      method:'GET',
      header:{
        'content-type':'application/json',
        'Cookie':wx.getStorageSync('cookieKey')},
      success:(res)=>{
        console.log(res)
        this.setData({
          [arr0]:res.data.data.sour,
          [arr1]:res.data.data.sweet,
          [arr2]:res.data.data.bitterness,
          [arr3]:res.data.data.spicy,
          [arr4]:res.data.data.salty,
          [arr5]:res.data.data.light,
          [arr6]:res.data.data.fiveSpice,
          [arr7]:res.data.data.scallion,
          [arr8]:res.data.data.garlic,
          [arr9]:res.data.data.milkFragrance,
          [arr10]:res.data.data.soySauce,
          [arr11]:res.data.data.curry,
          [arr12]:res.data.data.cumin,
          [arr13]:res.data.data.fruity,
          [arr14]:res.data.data.vanilla,
          [arr15]:res.data.data.sweetFragrance,
          [arr16]:res.data.data.dairyAllergy,
          [arr17]:res.data.data.proteinAllergy,
          [arr18]:res.data.data.nutAllergy,
          [arr19]:res.data.data.seafoodAllergy,
          [arr20]:res.data.data.soyAllergy,
          [arr21]:res.data.data.wheatAllergy,
          [arr22]:res.data.data.peanutAllergy
        })
      }
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