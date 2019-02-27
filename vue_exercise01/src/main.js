// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
//配置axios
import Axios from 'axios'
//配置mint-ui
import MintUI from 'mint-ui'
//安装插件 注册全局组件及挂载属性
import 'mint-ui/lib/style.css'
//引入全局css
import './assets/css/global.css'
//引入自己的ul和li组件
import myUl from '@/components/common/my-ul'
import myLi from '@/components/common/my-li'

//配置公共URL
Axios.defaults.baseURL = 'http://www/sinya.online/api';
Vue.prototype.$axios = Axios;

Vue.use(MintUI)

Vue.config.productionTip = false

Vue.component(myUl.name,myUl);
Vue.component(myLi.name,myLi);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
