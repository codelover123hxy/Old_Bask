const date = new Date();

Page({
  data: {
    inputDisValue:'',
    isShow1:'',
    isShow2:'',
    foodList:[{
      "url":"https://s2.loli.net/2022/07/28/GUnLuWJxaPhFNSQ.jpg",
      "foodName":"鸡蛋",
        "foodTime":"2022/6/27",
        "fresh":"80%"
    },
    {
      "url":"https://s2.loli.net/2022/07/28/CPpyStfj7qGIEHL.jpg",
      "foodName":"菠菜",
      "foodTime":"2022/6/27",
      "fresh":"80%"
    }
  
  
  
  
  ],
    value: [],
    timeInput: '',
    propDate: false,
    hour:[],
    minute:[],
    nowTime:'',
    h:'',m:''
    },
    scanCodeEvent: function(){
      var that = this;
      wx.scanCode({
        onlyFromCamera: true,// 只允许从相机扫码
        success(res){
          console.log("扫码成功："+JSON.stringify(res))
        }
      })
    },
    //实时获取到输入的值
  bindKeyInput(e) {
    console.log(e.detail.value)
    this.setData({
      inputDisValue: e.detail.value
    })
  },

  hideCover(){
    this.setData({
      isShow1:false,
      isShow2:false
    })
  },


  cancel(){
    this.setData({
      isShow1:false
    })
  },
  setTime(){
    this.setData({
      isShow1:true,
      nowTime:date.getHours()+':'+date.getMinutes()
    })
  },
  film(){
    this.setData({
      isShow2:true
    })
  },
  return(){
    this.setData({
      isShow2:false
    })
  },
  scanning(){
    wx.navigateTo({
      url: '../more/scan/scan',
    })
  },
  onLoad: function (options) {
  
  },
  closePick() {
    this.setData({
      propDate: false
    })
  },
  openPick () {
    // console.log(date.getHours()+':'+date.getMinutes())
    this.setData({
      nowTime:date.getHours()+':'+date.getMinutes()
    })
    const temp1 = [];
    for (let i = 0; i < 24 ;i++) {
      if (i<10)
      {
        temp1.push('0'+String(i))
      }
      else
        temp1.push(String(i))
    }
    const temp2 = [];
    for (let i = 0; i < 60 ;i++) {
      if (i<10)
      {
        temp2.push('0'+String(i))
      }
      else temp2.push(String(i))
    }
    this.setData({
      hour: temp1,
      minute: temp2
    })
    let valueDate = date.getHours()+':'+date.getMinutes()
    this.setData({
      propDate: true,
      value:valueDate
    })
  },
  clearPick() {
    this.setData({
      value:'',
      timeInput:''
    })
  },
  //选择滚动器改变触发事件
  bindChange (e) {
    const val = e.detail.value;
    console.log(this.data)
    //判断月的天数
    const setHour = this.data.hour[Number(val[0])];
    const setMinute = this.data.minute[Number(val[1])];
    this.setData({
      h:setHour,
      m:setMinute
    })
    this.setData({
      timeInput:  setHour + ':' + setMinute})
  }
})