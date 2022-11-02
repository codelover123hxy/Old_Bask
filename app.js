
require('./common/runtime.js')
require('./common/vendor.js')
require('./common/main.js')

import config from './config.js';
import request from './request.js'
App({
  myRequest(){
    return new request();
  },
  onLaunch:function(){

  },
  globalData:{
    username:'',
    path:''
  } 
})
