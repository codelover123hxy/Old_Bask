import config from '../../config.js';

var app=getApp()
Page(
{
  data: {
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    isExist:false,
    username:'',
    path:'',
    code:''
  },
  onLoad: function onLoad() {
    this.setData({
      isExist:false
    })
    var that=this
    wx.login({
      success(res){
        if(res.code!=''){
          wx.request({
            url: config.url+'api/user/wechat/login?code='+res.code,
            method:'GET',
            header:{
              'content-type':'application/json',
              'Cookie':wx.getStorageSync('cookiekey')
            },
            success:(r) =>{
              console.log(r)
              var code=r.data.code
              if (code==200){
                console.log("登录成功")
                wx.showToast({
                  title: '登录成功',
                })
                wx.setStorageSync('cookieKey', r.header["Set-Cookie"])
              }
              else if (code==30002){
                console.log("openId异常")
              }
              else if(code==20000){
                console.log("用户未登录")
                wx.showToast({
                  title: '用户未登录',
                  icon:'error'
                })
              }
              else if (code==20001){
                console.log("用户不存在")
                wx.showToast({
                  title:'用户不存在',
                  icon:'error'
                })
               that.setData({
                  isExist:true
                })  
              }
              else if(code==20002){
                console.log("用户已注册")
                wx.showToast({
                  title: '用户已注册',
                  icon:'error'
                })
              }
              else if(code==40004){
                console.log("未知错误")
                wx.showToast({
                  title: '未知错误',
                  icon:'error'
                })
              }
            }
          })
         }
        else {
          console.log("登录失败")
        }
      }
    })
  },
  cancelLogin(){
    this.setData({
      isExist:false
    })
  },

  navtoReminder() {
    wx.navigateTo({
      url: "/moduleA/pages/medicine-reminder/medicine-reminder" });
  },
  navtoVoice(){
    wx.navigateTo({
      url:"/moduleA/pages/voice/voice"
    });
  },
  navto1(){
    wx.navigateTo({
      url: '/moduleB/pages/ad1/ad1',
    })
  },
  navto2(){
    wx.navigateTo({
      url: '/moduleB/pages/ad2/ad2',
    })
  },
  navto3(){
    wx.navigateTo({
      url: '/moduleB/pages/ad3/ad3',
    })
  },
  navto4(){
    wx.navigateTo({
      url: '/moduleB/pages/ad4/ad4',
    })
  },
  navtoRecipes(){
    wx.navigateTo({
      url: '/moduleA/pages/recipes/recipes',
    })
  },   
  async getUserProfile(e){
    var that=this;
    const res=await wx.getUserProfile({
      desc: '用于完善资料',
    });
    this.setData({
      username:res.userInfo.nickName,
      path:res.userInfo.avatarUrl,
    })    
    app.globalData.username=this.data.username,
    app.globalData.path=this.data.path
    const database={}
    database.username=this.data.username
    database.profile=this.data.path
    wx.login({
      success(res){
        if(res.code!=''){
          database.code=String(res.code)
          console.log(database)
          wx.request({
            url: config.url+'api/user/wechat/register',
            method:'POST',
            data:database,
            success:(r)=>{
              console.log(r)
              wx.setStorageSync('cookieKey', r.header["Set-Cookie"])
            }
          })
        }
      }
    })
    this.setData({
      isExist:false
    })
  },
})