// moduleA/pages/recipes/recipes.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    index:[],
    nameList:[
      {
        name:'慢病调理',
        color:'rgb(228,212,186)',
        id:'0',
        color2:'rgb(185,148,103)',
        flag:false
      },
      {
        name:'清淡健康',
        color:'rgb(246,234,215)',
        id:'1',
        color2:'rgb(246,234,215)',
        flag:false
      },
      {
        name:'每日食谱',
        color:'rgb(246,234,215)',
        id:'2',
        color2:'rgb(246,234,215)',
        url:'https://s2.loli.net/2022/07/25/wg2HZJVi3YLp1Ar.jpg'
      },
      {
        name:'特殊饮食',
        color:'rgb(246,234,215)',
        id:'3',
        color2:'rgb(246,234,215)',
        flag:false
      },
      {
        name:'日常优选',
        color:'rgb(246,234,215)',
        id:'4',
        color2:'rgb(246,234,215)',
        flag:false
      },
      {
        name:'特殊功效',
        color:'rgb(246,234,215)',
        id:'5',
        color2:'rgb(246,234,215)',
        flag:false
      }
    ],
    recipeList1:[
      {
        name:'糖尿病食谱',
        imgurl:'https://s2.loli.net/2022/07/25/RN7w91IfWYo8FDt.jpg',
        intro:'控制糖分摄入量',
        url:'../../pages/introduction/introduction'
      },
      {
        name:'抗高血脂食谱',
        imgurl:'https://s2.loli.net/2022/07/25/xEZwXPbes2FoTLB.jpg',
        intro:'助力血脂管理',
        url:'../../pages/introduction/introduction'
      },
      {
        name:'抗高血压食谱',
        imgurl:'https://s2.loli.net/2022/07/25/17BAdiTlgmWbKOZ.jpg',
        intro:'食疗缓解血压',
        url:'../../pages/introduction/introduction'
      }
    ],
    recipeList2:[
      {     
        name:'地中海饮食食谱',
        imgurl:'https://s2.loli.net/2022/07/20/JugK3aMAdY8NZ1l.jpg',
        intro:'控制糖分摄入量',
        url:'../../pages/introduction/introduction'
      },
      {
        name:'经典均衡食谱',
        imgurl:'https://s2.loli.net/2022/07/20/Svdygz6XMQs5ElF.jpg',
        intro:'助力血脂管理',
        url:'../../pages/introduction/introduction'
      }
    ],
    recipeList3:[
      {
        name:'鱼素食谱',
        imgurl:'https://s2.loli.net/2022/07/20/Psh2brOlaJi95u8.jpg',
        intro:'肉类只吃鱼',
        url:'../../pages/introduction/introduction'
      },
      {
        name:'蛋奶素食谱',
        imgurl:'https://s2.loli.net/2022/07/20/ZzbXWBlGkJcsdtn.jpg',
        intro:'无肉类',
        url:'../../pages/introduction/introduction'
      },
      {
        name:'纯素食谱',
        imgurl:'https://s2.loli.net/2022/07/20/DynUN6rTWwL1vfS.jpg',
        intro:'只有植物',
        url:'../../pages/introduction/introduction'
      },
      {
        name:'奶素食谱',
        imgurl:'https://s2.loli.net/2022/07/20/WXuFzgkUZNxbHD1.jpg',
        intro:'无肉类蛋类',
        url:'../../pages/introduction/introduction'
      }
    ],
    recipeList4:[
      {
        name:'营养健康食谱',
        imgurl:'https://s2.loli.net/2022/07/20/3dx6GPt2Kfl7wuj.jpg',
        intro:'强身健体，安度暮年',
        url:'../../pages/introduction/introduction'
      },
      {
        name:'弹性素食1食谱',
        imgurl:'https://s2.loli.net/2022/07/20/d92zgyNhP5BK7bn.jpg',
        intro:'植物为主，肉食为辅',
        url:'../../pages/introduction/introduction'
      },
      {
        name:'弹性素食2食谱',
        imgurl:'https://s2.loli.net/2022/07/20/5QoiUJPmrnyRTpI.jpg',
        intro:'素食，但不完全素食',
        url:'../../pages/introduction/introduction'
      }
    ],
    recipeList5:[
      {
        name:'秋季食谱',
        imgurl:'https://s2.loli.net/2022/07/20/85k7OzCyjLxJAfP.jpg',
        intro:'秋风起 蟹飘香',
        url:'../../pages/introduction/introduction'
      },
      {
        name:'冬季食谱',
        imgurl:'https://s2.loli.net/2022/07/20/zKFJpSk62taW1ZH.jpg',
        intro:'暖胃又暖心',
        url:'../../pages/introduction/introduction'
      },
      {
        name:'助眠食谱',
        imgurl:'https://s2.loli.net/2022/07/20/1yUVAN7iG5XatBH.jpg',
        intro:'吃好 睡好',
        url:'../../pages/introduction/introduction'
      },
      {
        name:'健脑食谱',
        imgurl:'https://s2.loli.net/2022/07/20/BcDdahsFMAiLTu4.jpg',
        intro:'助力大脑健康',
        url:'../../pages/introduction/introduction'
      }
    ],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(option) {
    this.setData({
      flag1:true,
      flag2:false,
      flag3:false,
      flag4:false,
      flag5:false,
      selfflag:false
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

  },

  back(){
    wx.navigateBack();
  },

  select(e){
    var index=Number(e.currentTarget.dataset.index)
    var set='nameList['+index+'].color'
    var set2='nameList['+index+'].color2'
    for(var i=0;i<6;i++){
      var s='nameList['+i+'].color'
      var s2='nameList['+i+'].color2'
       this.setData({
        [s]:'rgb(246,234,215)',
        [s2]:'rgb(246,234,215)',
       })
    }
    this.setData({
      [set]:'rgb(228,212,186)',
      [set2]:'rgb(185,148,103)',
      flag1:'true',
      flag2:'false'
    })

    if(index==0){
      this.setData({
        flag1:true,
        flag2:false,
        flag3:false,
        flag4:false,
        flag5:false,
        selfflag:false
      })
    }
    else if(index==1){
      this.setData({
        flag1:false,
        flag2:true,
        flag3:false,
        flag4:false,
        flag5:false,
        selfflag:false
      })
    }
    else if(index==2){
      this.setData({
        flag1:false,
        flag2:false,
        flag3:false,
        flag4:false,
        flag5:false,
        selfflag:true
      })
    }
    else if(index==3){
      this.setData({
        flag1:false,
        flag2:false,
        flag3:true,
        flag4:false,
        flag5:false,
        selfflag:false
      })
    }
    else if(index==4){
      this.setData({
        flag1:false,
        flag2:false,
        flag3:false,
        flag4:true,
        flag5:false,
        selfflag:false
      })
    }
    else if(index==5){
      this.setData({
        flag1:false,
        flag2:false,
        flag3:false,
        flag4:false,
        flag5:true,
        selfflag:false
      })
    }
  }
})