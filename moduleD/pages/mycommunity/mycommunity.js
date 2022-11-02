import config from '../../../config.js';
var totalPost;var msg;var postTotalPage;var postId;
var changeCommentData={};
const app=getApp();
const ajax=app.myRequest();
Page({
  data:{
      index:'',
      writeOrEdit:'', submitType:'',
      // true:write   false:edit
      flag:false,
      flag2:false,
      page1: true,
      page2: false,
      community1: true,
      community2: false,
      community3: false,
      comment:'',
      isCommentDisplay:'false',
      post:'',
      type:'',
      community: [
        {
        img: '',
        name: '',
        date: '',
        message: '',
        id:'',
        postLikeNum:'',
        commentShowTip:'',
        postIndex:'',
        comment:[
        ]
      }
      ],
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
      var commentBox=[];
      var that=this;
      this.setData({
        comment:'评论'
      })
      this.getPost();
    },
    getPost(){
      let that=this;
      var arr=[];
      ajax.getRequest('/api/post?pageNum=1&size=40',{}).then((res)=>{
        msg=res.data.data.data;
        totalPost=res.data.data.total;
        postTotalPage=res.data.data.totalPage;
        let like='';
        for (let j=0;j<totalPost;j++){
          if (msg[j].likeNum==0){
            like='';
          }
          else {
            like='+'+String(msg[j].likeNum);
          }
          let obj={
            postLikeNum:like,
            img: msg[j].publisherProfile,
            name: msg[j].publisherName,
            date: msg[j].createTime.slice(0,msg[j].createTime.length-2),
            message: msg[j].content,
            postId:msg[j].id,
            isShowComment:false,
            commentShowTip:'查看评论'
          }
          arr.push(obj);
        }
        that.setData({
          community:arr
        })
        }).catch((err)=>{
            console.log(err);
        }) 
    },
    showComment(e){
      let postId=e.currentTarget.dataset.index;
      let that=this;
      let commentPerPost=[];
      ajax.getRequest('/api/comment?postId='+String(postId)+'&pageNum=1&size=40',{}).then((res)=>{
              var commentList=res.data.data.data;
              var commentLength=res.data.data.total;
              for (let i=0;i<commentLength;i++){
                    var eachComment={
                      commentDate:commentList[i].createTime.slice(0,commentList[i].createTime.length-2),
                      commentName:commentList[i].publisherName,
                      commentContent:commentList[i].content,
                      commentId:commentList[i].id,
                      commentLikeNum:commentList[i].likeNum,
                      commentProfile:commentList[i].publisherProfile
                    }
                    commentPerPost.push(eachComment);
              }
              that.data.community.forEach(function(item,index) {
                if (item.postId==postId){
                  that.setData({
                    ['community['+String(index)+'].comment']:commentPerPost
                  })
                  let commentFlag=that.data.community[index].isShowComment;
                  if (commentFlag==true){
                    that.setData({
                      ['community['+String(index)+'].isShowComment']:false,
                      ['community['+String(index)+'].commentShowTip']:'查看评论'
                    })
                  }
                  else{
                    that.setData({
                      ['community['+String(index)+'].isShowComment']:true,
                      ['community['+String(index)+'].commentShowTip']:'关闭评论'
                    })
                  }
                }
              });
         
          }).catch((err)=>{
            console.log(err);
          })
    },
    share(){
      wx.showShareMenu({
        withShareTicket: true,
        menus: ['shareAppMessage', 'shareTimeline']
      })
    },
    postInput(e){
      this.setData({
        post:e.detail.value
      })
    },

    hideCommentBox(){
      this.setData({
        flag2:false
      })
    },
    commentInput(e){
      this.setData({
        comment:e.detail.value,
      })
      if(e.detail.value!='')
      {
        this.setData({
          type:'primary'
        })
      }
      else {
        this.setData({
          type:'default',
          comment:'评论'
        })
      }
    },
    addPost(){
      this.setData({
        flag:true,
        writeOrEdit:true,
        submitType:'发布'
      })
    },
    submitPost(){
      var that=this;
      if (this.data.writeOrEdit==true){
      let data={}
      data.content=this.data.post
      ajax.postRequest('/api/post',data).then((res)=>{
        console.log(res);let code=res.data.code;
        if (code==200){
          wx.showToast({
            title: '已发送',
            icon:'success'
          })
          that.setData({
            flag:false
          })
          that.onLoad();
        }
        else{
          wx.showToast({
            title: '发送失败',
            icon:'error'
          })
        }
    }).catch((err)=>{
      console.log(err);
    })
    }  
    else{
    let data={}
    data.content=this.data.post
    data.postId=postId;
    ajax.postRequest('/api/post/edit',data).then((res)=>{
      console.log(res.data.code);
      if (res.data.code==200){
        wx.showToast({
          title: '修改成功',
          icon:'success'
        })
      }
      else if (res.data.code==20003){
        wx.showToast({
          title: '无权修改',
          icon:'error'
        })
      }        
      that.setData({
        flag:false
      })
      that.onLoad();
    }).catch((err)=>{
      console.log(err);
    })
      }
    },
    deletePost(e){
      let postId=e.currentTarget.dataset.index;
      let that=this;
      wx.showModal({
        title:'提示',
        content:'你确定删除该帖子吗?',
        success:(res)=>{
          if (res.confirm){
            console.log('确定')
            ajax.deleteRequest('/api/post?postId='+String(postId),{}).then((res)=>{
            console.log(res);
            this.onLoad();
            }).catch((err)=>{
            console.log(err);
            })
          } else if(res.cancel){
            console.log('取消')
          }
        }
      })
    },
    changePost(e){
      postId=e.currentTarget.dataset.index;
      this.data.community.forEach(item => {
        if (item.postId==postId){
          this.setData({
            post:item.message,
            flag:true,
            writeOrEdit:false,submitType:'修改'
          })
        }
      });
    },
    submitComment(e){
      let that=this;
      let data={};
      console.log(this.data.writeOrEdit)
      if(this.data.writeOrEdit==true){
        data.content=this.data.comment
        data.postId=Number(this.data.index);
        if (data.content!=''&&data.content!='评论'){
        wx.request({
          url: config.url+'api/comment',
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
                icon:'success'
              })
              that.setData({
                flag:false,flag2:false
              })
              that.onLoad();
            }
            else{
              wx.showToast({
                title: '发送失败',
                icon:'error'
              })
            }
          }
        })}
      }else{
        data.content=this.data.comment;
        data.commentId=changeCommentData.commentId;
        ajax.postRequest('/api/comment/edit',data).then((res)=>{
          console.log(res);
          if (res.data.code==200){
            wx.showToast({
              title: '修改成功',
              icon:'success'
            })
          }
          that.onLoad();
      }).catch((err)=>{
        console.log(err);
      })
      }
    },
    likeForComment(e){
      let index=e.currentTarget.dataset.index;let that=this;
      ajax.getRequest('/api/comment/like?commentId='+String(index),).then((res)=>{
        console.log(res);
    }).catch((err)=>{
      console.log(err);
    })
    },
    comment(e){
      var index=e.currentTarget.dataset.index;
      this.setData({
        flag2:true,
        comment:'评论',
        type:'default',
        writeOrEdit:true,
        index:index,
        }) 
    },
    like(e) {
      var likeIndex=e.currentTarget.dataset.index;
      var that=this;
      wx.request({
        url: config.url+'api/post/like?postId='+String(likeIndex),
        method:'GET',
        header:{
          'content-type':'application/json',
          'Cookie':wx.getStorageSync('cookieKey')},
        success:(res)=>{
          console.log(res)
          var code=res.data.code;
          if (code==200){
            that.setData({
              flag:false
            })
            that.onLoad();
          }
        }
      })
    },
    commentLike(){
      var that=this;
      wx.request({
        url: config.url+'api/comment/like?commentId=19',
        method:'GET',
        header:{
          'content-type':'application/json',
          'Cookie':wx.getStorageSync('cookieKey')},
        success:(res)=>{
          console.log(res)
          var code=res.data.code;
          if (code==200){
            that.onLoad();
          }
        }
      })
    },
    deleteComment(e){
      let commentId=e.currentTarget.dataset.index;
      let that=this;
      wx.showModal({
        title:'提示',
        content:'你确定删除该评论吗?',
        success:(res)=>{
          if (res.confirm){
            console.log('确定')
            ajax.deleteRequest('/api/comment?commentId='+String(commentId),{}).then((res)=>{
            console.log(res);
            if (res.data.code==200){
              wx.showToast({
                title: '删除成功',
                icon:'success'
              })
            }
            this.onLoad();
            }).catch((err)=>{
            console.log(err);
            })
          } else if(res.cancel){
            console.log('取消')
          }
        }
      })
    },
    changeComment(e){
      let commentId=e.currentTarget.dataset.index;
      changeCommentData={};
      changeCommentData.commentId=commentId;
      this.data.community.forEach(item => {
        if (item.comment!=[]&&item.comment!=undefined){
          item.comment.forEach(function(it,index){
            if (it.commentId==commentId){
              changeCommentData.content=it.commentContent;
            }
          })
      }
      })
      this.setData({
        flag2:true,writeOrEdit:false,comment:changeCommentData.content
      })
    },
    hidePostBox(){
      this.setData({
        flag:false
      })
    },
    returnBack(){
      wx.navigateBack();
    },
    onShareAppMessage: function (res) {
      console.log(res)
      if (res.from === 'button') {
        // 来自页面内转发按钮
        console.log(res.target)
      }
      return {
        title: '自定义转发标题',
        path: '/page/user?id=123',
        success: function(res) {
          // 转发成功
        },
        fail: function(res) {
          // 转发失败
        }
      }
    }
})