// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import Moment from 'moment';

Vue.use(ElementUI);
Vue.config.productionTip = false

Vue.filter('comverTime', function(data, format) {
    return Moment(data).format(format);
});

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    render: h => h(App)
})