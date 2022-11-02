// moduleA/pages/introduction/introduction.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    intro:'',
    imgurl:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    if (options.type=='recipe'){
      this.setData({
        imgurl:'https://s2.loli.net/2022/07/25/iS7Q3sRqofhCzrU.jpg',
        intro:'OLDBASK私人订制',
        font:'larger',

      })
    }
    if (options.id1=='0'){
    this.setData({
      intro:'饮食管理是糖尿病管理中重要的一环。该食谱通过均匀分布一天中碳水化合物的摄入，以及合理搭配各餐中三大营养素的比例，帮助你保持一天中的血糖稳定。',
      imgurl:'https://s2.loli.net/2022/07/25/mxuMeAJyO9UWEtg.jpg',
      font:'small',
      name:'糖尿病食谱'
    })}
    else if(options.id1=='1'){
      this.setData({
        intro:'想要控制血脂，饮食中脂肪的选择很重要。本食谱在均衡饮食的基础上，重点关注食物中的脂肪类型和含量，用富含不饱和脂肪的食物替代高饱和脂肪和胆固醇的食物，并且搭配有助于降低血脂的食物，例如粗粮、蔬果和豆制品，为你的血脂管理计划助力。',
        imgurl:'https://s2.loli.net/2022/07/25/pKJ8tvIlyoPX7Cw.jpg',
        font:'small',
        name:'抗高血脂食谱'
      })}
    else if(options.id1=='2'){
        this.setData({
          intro:'该食谱帮助你预防和管理高血压。其饮食原则主要为：（1）控制每日钠的摄入在2300mg以内，（2）降低饱和脂肪的摄入，（3）摄入足量的钾、钙、镁、膳食纤维和蛋白质。',
          imgurl:'https://s2.loli.net/2022/07/25/4nV5Xfa2oSUBJEH.jpg',
          font:'small',
          name:'抗高血压食谱'
        })}
    else if(options.id2=='0'){
      this.setData({
        intro:'地中海饮食食谱-富含水果、蔬菜、全谷物和有益心脏健康的脂肪等美味成分，既美味又营养。它还具有多种益处，可能有助于支持大脑功能、促进心脏健康、调节血糖水平等。',
        imgurl:'https://s2.loli.net/2022/07/20/BePgp6CVQnMsb32.jpg',
        font:'small',
        name:'地中海饮食食谱'
      })}
    else if(options.id2=='1'){
        this.setData({
          intro:'从肌肉形成所需的蛋白质，到预防贫血所需的铁，均衡多样的饮食可以帮助你获取每日活动所需的所有营养。以下食谱通过巧妙搭配谷薯、蔬果、奶类和肉蛋豆类，帮助你轻松达到每日营养目标！',
          imgurl:'https://s2.loli.net/2022/07/20/pGcwx24y8qldHMr.jpg',
          font:'small',
          name:'经典均衡食谱'
        })}

    else if(options.id3=='0'){
          this.setData({
            intro:'鱼类都是优质蛋白的良好来源。鱼肉的肌纤维比畜禽肉更加的细腻，相对的也更加好消化吸收，鱼肉含有的脂肪更低，大部分脂肪都是不饱和脂肪酸，对于心血管健康有益处。该食谱适合可以购买到丰富水产，没有海鲜过敏或者高尿酸的小伙伴们。',
            imgurl:'https://s2.loli.net/2022/07/20/p3Sa6NQGHw4uRqm.jpg',
            font:'small',
            name:'鱼素食谱'
          })}
    else if(options.id3=='1'){
            this.setData({
              intro:'蛋奶素食的食谱中没有肉类。为了保证营养摄入充足，食谱会在均衡饮食的基础上，重点关注富含优质蛋白质、铁、n-3不饱和脂肪酸和维B12的食物，例如奶类、蛋类、豆制品、发酵豆制品、坚果等。',
              imgurl:'https://s2.loli.net/2022/07/20/78VQHoqEGxCkiSm.jpg',
              font:'small',
              name:'蛋奶素食谱'
            })}
    else if(options.id3=='2'){
        this.setData({
        intro:'纯素的食谱中没有任何动物制品，所以为了营养摄入的全面均衡，纯素的食谱会重点安排富含蛋白质、钙、铁、维B12和n-3不饱和脂肪酸的食物，例如豆制品、发酵豆制品、坚果和全谷物等。',
        imgurl:'https://s2.loli.net/2022/07/20/eIMVzjRsXdak8Eu.jpg',
        font:'small',
        name:'纯素食谱'
    })}
    else if(options.id3=='3'){
    this.setData({
        intro:'由于宗教文化或个人选择，不少人除奶制品外，戒食其他动物性食品。如何在缺失肉类的情况下合理安排膳食，满足自身营养需要?让以下食谱给你个参考吧。',
        imgurl:'https://s2.loli.net/2022/07/20/iPmkG9edWYZ2tCO.jpg',
        font:'small',
        name:'奶素食谱'
    })}
    else if(options.id4=='0'){
          this.setData({
            intro:'人入暮年，因身体机能衰退，常有骨质疏松、便秘和食欲下降等问题。以下食谱帮您合理规划饮食，保证蛋白质和钙等营养素的充足摄入，有助于降低慢性疾病的风险，助您身坚体健，安享暮年。',
            imgurl:'https://s2.loli.net/2022/07/20/Wc3kAso8Y1ITNr9.jpg',
            font:'small',
            name:'营养健康食谱'
          })}
    else if(options.id4=='1'){
            this.setData({
              intro:'弹性素食是以植物类食品为主，肉食和其他动物类食物为辅的一种饮食模式。相比单纯的素食而言，弹性素食的营养更为均衡，执行难度也更低。你可以灵活决定什么时候吃素，随心而动，间歇素食~',
              imgurl:'https://s2.loli.net/2022/07/20/wyJu8bEYO63kXB5.jpg',
              font:'small',
              name:'弹性素食1食谱'
            })}
    else if(options.id4=='2'){
        this.setData({
        intro:'弹性素食（弹素）是一种以植物性食物为主，肉类为辅的饮食模式，它对于减重、慢病管理都有积极的作用。弹素操作弹性，你可以在一周中选择几天进行蛋奶素饮食，从而控制肉类摄入在250～500g/周；或者每天选择一两餐素食，将每日肉类摄入控制在35～75g。',
        imgurl:'https://s2.loli.net/2022/07/20/u4ld3qrvE9ptyLw.jpg',
        font:'small',
        name:'弹性素食2食谱'
    })}
    else if(options.id5=='0'){
          this.setData({
            intro:'秋高气爽，稻米金黄，此时正是丰收的时节。多种蔬果上市，蟹肥膏美。如何科学营养地享受秋季美食呢？看看秋季食谱吧~',
            imgurl:'https://s2.loli.net/2022/07/20/2ATl3IyWpgxm4Ns.jpg',
            font:'small',
            name:'秋季食谱'
          })}
    else if(options.id5=='1'){
            this.setData({
              intro:'雪花飘飘，北风萧萧。寒冷的冬天里每一口温暖的食物都是救赎。基于炖羊肉和鸡煲的一日食谱？安排！',
              imgurl:'https://s2.loli.net/2022/07/20/zKFJpSk62taW1ZH.jpg',
              font:'small',
              name:'冬季食谱'
            })}
    else if(options.id5=='2'){
        this.setData({
        intro:'你知道吗，我国有超过3亿人面临着睡眠障碍。良好的睡眠环境和放松的身心是成功入睡的必要条件，除此之外，在饮食上适量补充色氨酸和GABA，也能助好眠一臂之力哦。',
        imgurl:'https://s2.loli.net/2022/07/20/ZfTGWNQbkezaE6R.jpg',
        font:'small',
        name:'助眠食谱'
    })} 
    else if(options.id5=='3'){
      this.setData({
        intro:'随着年龄的增加，脑细胞会持续自然凋亡。而长期压力、脑部创伤、药物、铅等环境污染、脱水、缺氧、睡眠不足、不健康的饮食等会加速神经细胞的凋亡，造成脑活力下降。饮食中注意补充DHA，ALA，维生素E，类黄酮等营养素可有助于大脑健康，它们可以从鱼类、坚果、绿叶蔬菜和浆果中获得。',
        imgurl:'https://s2.loli.net/2022/07/20/nkSjXR9QvYt4TGu.jpg',
        font:'small',
        name:'健脑食谱'
      })}
  },
  return(){
    wx.navigateBack();
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