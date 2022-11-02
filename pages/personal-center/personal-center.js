var app=getApp()
import config from '../../config.js';

Page(
  {
    
    data: {
      flag:'false',
      nickname:'微信用户',
      tempFilePaths:'https://s2.loli.net/2022/07/25/ZvwmpN5XcizshI4.png',
      sexurl:'',
      list:[{
        url:'https://s2.loli.net/2022/07/25/Rhv3Ug6leXKcmL5.jpg',
        url2:'https://s2.loli.net/2022/07/25/gvfNMO9A1DLcoXW.jpg',
        name:'疾病情况',
        nav:'../../moduleC/pages/disease-situation/disease-situation'
      },
      {
        url:'https://s2.loli.net/2022/07/25/oLNXDImAsrjchUY.jpg',
        url2:'https://s2.loli.net/2022/07/25/gvfNMO9A1DLcoXW.jpg',
        name:'偏好忌口',
        nav:'../../moduleC/pages/liking-taboos/liking-taboos'
      },{
        url:'https://s2.loli.net/2022/07/25/FeMpfo2WJwSQvXs.jpg',
        url2:'https://s2.loli.net/2022/07/25/gvfNMO9A1DLcoXW.jpg',
        name:'健康记录',
        nav:'../../moduleC/pages/health-record/health-record'
      },
      {
        url:'https://s2.loli.net/2022/07/25/c7NSm92avC415Dw.jpg',
        url2:'https://s2.loli.net/2022/07/25/gvfNMO9A1DLcoXW.jpg',
        name:'服药习惯',
        nav:''
      }],
      age:'68'
    },
    onShow() {
      wx.request({
        url: config.url + 'api/user/info',
        method:'GET',
        header:{
        'content-type':'application/json',
        'Cookie':wx.getStorageSync('cookieKey')},
        success: (res)=>{
          console.log(res)
          var code=res.data.code
          var Data=res.data.data
          if (code==200){
            console.log(Data)
            if (Data.nickname==''||Data.profile=='')
            {
              this.setData({
                nickname:app.globalData.username,
                age:Data.age,
                tempFilePaths:app.globalData.path
              })
            }
            else
            {
              this.setData({
                nickname:Data.username,
                age:Data.age,
                tempFilePaths:Data.profile
              })
            }
            if(Data.sex=='男'){
              this.setData({
                sexurl:'https://s2.loli.net/2022/07/25/zXoZ3CI9nlEs24m.jpg'
              })
            }
            else{
              this.setData({
                sexurl:'https://s2.loli.net/2022/07/25/aUgOpfJwm1seQSx.jpg'
              })
            }
          }
        }
  })
  },
  } )