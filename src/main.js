import Vue from 'vue'
import Demo from './demo'

Vue.config.productionTip = false;

new Vue({
    render: h => h(Demo),
}).$mount('#app');
