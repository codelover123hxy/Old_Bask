import config from '../../../config.js';
Page({
  data:{
      flag:false,
      page1: true,
      page2: false,
      community1: true,
      community2: false,
      community3: false,
      comment:'',
      community: [
      {
        img: "https://s2.loli.net/2022/07/08/pNVCvnYfZBc3Sab.jpg",
        name: "高峰",
        zhicheng: "专家",
        date: "2022/6/29",
        message: "少熬夜，多休息",
        type: 1 },
      {
        img: "https://s2.loli.net/2022/07/08/rz3vIyH2AxWb7S5.jpg",
        name: "许宁",
        zhicheng: "专家",
        date: "2022/6/29",
        message: "预防疾病很重要",
        type: 1 
      }],
      ageList:[
        {age:90},
        {age:80},
        {age:70},
        {age:60},
        {age:50},
        {age:40},
      ],
    },
    onLoad:function onLoad(option){
      const data={};
      data.pageNum=10;
      data.size=10;
      wx.request({
        url: config.url+'api/post/expert?pageNum=1&size=10',
        method:'GET',
        header:{
          'content-type':'application/json',
          'Cookie':wx.getStorageSync('cookieKey')},
        success:(res)=>{
          console.log(res.data.data)
        }
      })
    },
    share(){
      wx.showShareMenu({
        withShareTicket: true,
        menus: ['shareAppMessage', 'shareTimeline']
      })
    },
    commentInput(e){
      this.setData({
        comment:e.detail.value
      })
    },
    add(){
      this.setData({
        flag:true
      })
    },
    submit(){
      const data={}
      var that=this;
      data.content=this.data.comment
      wx.request({
        url: config.url+'api/post',
        data:data,
        method:'POST',
        header:{
          'content-type':'application/json',
          'Cookie':wx.getStorageSync('cookieKey')},
        success:(res)=>{
          var code=res.data.code;
          if (code==200){
            wx.showToast({
              title: '已发送',
            })
            that.setData({
              flag:false
            })
            that.onLoad();
          }
        }
      })
    },
    ageNav(e){
      let index=e.currentTarget.dataset.index;
      console.log(index);
      switch(index){
        case 0:
          let specialist1=[{
            img: "https://s2.loli.net/2022/07/08/pNVCvnYfZBc3Sab.jpg",
            name: "高峰",
            zhicheng: "专家",
            date: "2022/6/29",
            message: "少熬夜，多休息",
            type: 1 },
          {
            img: "https://s2.loli.net/2022/07/08/rz3vIyH2AxWb7S5.jpg",
            name: "许宁",
            zhicheng: "专家",
            date: "2022/6/29",
            message: "预防疾病很重要",
            type: 1 
          }]
          this.setData({
            community:specialist1,
            ['ageList[0].color']:'rgb(130,155,89)',
            ['ageList[1].color']:'rgb(170,189,145)',
            ['ageList[2].color']:'rgb(170,189,145)',
            ['ageList[3].color']:'rgb(170,189,145)',
            ['ageList[4].color']:'rgb(170,189,145)',
            ['ageList[5].color']:'rgb(170,189,145)'
          })
          break;
        case 1:
          let specialist2=[{
            img: "https://s2.loli.net/2022/07/08/pNVCvnYfZBc3Sab.jpg",
            name: "王明",
            zhicheng: "专家",
            date: "2022/6/30",
            message: "坚持锻炼",
            type: 1 },
          {
            img: "https://s2.loli.net/2022/07/08/rz3vIyH2AxWb7S5.jpg",
            name: "薛磊",
            zhicheng: "专家",
            date: "2022/6/30",
            message: "多吃蔬菜",
            type: 1 
          }]
          this.setData({
            community:specialist2,
            ['ageList[0].color']:'rgb(170,189,145)',
            ['ageList[1].color']:'rgb(130,155,89)',
            ['ageList[2].color']:'rgb(170,189,145)',
            ['ageList[3].color']:'rgb(170,189,145)',
            ['ageList[4].color']:'rgb(170,189,145)',
            ['ageList[5].color']:'rgb(170,189,145)'
          })
        break;
        case 2:
          let specialist3=[{
            img: "https://s2.loli.net/2022/07/08/pNVCvnYfZBc3Sab.jpg",
            name: "张军",
            zhicheng: "专家",
            date: "2022/7/1",
            message: "夏天不要直接洗冷水澡",
            type: 1 },
          {
            img: "https://s2.loli.net/2022/07/08/rz3vIyH2AxWb7S5.jpg",
            name: "李强",
            zhicheng: "专家",
            date: "2022/7/1",
            message: "出汗及时擦",
            type: 1 
          }]
          this.setData({
            community:specialist3,
            ['ageList[0].color']:'rgb(170,189,145)',
            ['ageList[1].color']:'rgb(170,189,145)',
            ['ageList[2].color']:'rgb(130,155,89)',
            ['ageList[3].color']:'rgb(170,189,145)',
            ['ageList[4].color']:'rgb(170,189,145)',
            ['ageList[5].color']:'rgb(170,189,145)'
          })
          break;
        case 3:
          let specialist4=[{
            img: "https://s2.loli.net/2022/07/08/pNVCvnYfZBc3Sab.jpg",
            name: "黄山",
            zhicheng: "专家",
            date: "2022/7/2",
            message: "少吃冷饮",
            type: 1 },
          {
            img: "https://s2.loli.net/2022/07/08/rz3vIyH2AxWb7S5.jpg",
            name: "赵亮",
            zhicheng: "专家",
            date: "2022/7/2",
            message: "有氧运动益处多",
            type: 1 
          }]
          this.setData({
            community:specialist4,
            ['ageList[0].color']:'rgb(170,189,145)',
            ['ageList[1].color']:'rgb(170,189,145)',
            ['ageList[2].color']:'rgb(170,189,145)',
            ['ageList[3].color']:'rgb(130,155,89)',
            ['ageList[4].color']:'rgb(170,189,145)',
            ['ageList[5].color']:'rgb(170,189,145)'
          })
          break;
          case 4:
            let specialist5=[{
              img: "https://s2.loli.net/2022/07/08/pNVCvnYfZBc3Sab.jpg",
              name: "俞丽霞",
              zhicheng: "专家",
              date: "2022/7/3",
              message: "注意饮食卫生",
              type: 1 },
            {
              img: "https://s2.loli.net/2022/07/08/rz3vIyH2AxWb7S5.jpg",
              name: "王可欣",
              zhicheng: "专家",
              date: "2022/7/3",
              message: "保持身心愉悦",
              type: 1 
            }]
            this.setData({
              community:specialist5,
              ['ageList[0].color']:'rgb(170,189,145)',
              ['ageList[1].color']:'rgb(170,189,145)',
              ['ageList[2].color']:'rgb(170,189,145)',
              ['ageList[3].color']:'rgb(170,189,145)',
              ['ageList[4].color']:'rgb(130,155,89)',
              ['ageList[5].color']:'rgb(170,189,145)'
            })
            break;
        case 5:
          let specialist6=[{
                img: "https://s2.loli.net/2022/07/08/pNVCvnYfZBc3Sab.jpg",
                name: "姚华强",
                zhicheng: "专家",
                date: "2022/7/4",
                message: "多喝水",
                type: 1 },
              {
                img: "https://s2.loli.net/2022/07/08/rz3vIyH2AxWb7S5.jpg",
                name: "周嘉莉",
                zhicheng: "专家",
                date: "2022/7/4",
                message: "小心三高",
                type: 1 
              }]
              this.setData({
                community:specialist6,
                ['ageList[0].color']:'rgb(170,189,145)',
                ['ageList[1].color']:'rgb(170,189,145)',
                ['ageList[2].color']:'rgb(170,189,145)',
                ['ageList[3].color']:'rgb(170,189,145)',
                ['ageList[4].color']:'rgb(170,189,145)',
                ['ageList[5].color']:'rgb(130,155,89)'
              })
              break;
      }
    },
    return(){
      this.setData({
        flag:false
      })
    },
    returnBack(){
      wx.navigateBack();
    },
    gotoSpecialistConsult(){
      wx.navigateTo({
        url: '/moduleD/pages/specialist-consult/specialist-consult',
      })
    }
})