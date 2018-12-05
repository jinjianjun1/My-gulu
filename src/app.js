import Vue from 'vue'
import Button   from './button'
import Icon from './icon'
import ButtonGroup from './button-group'
import Input from  './input'
import Col from  './col'
import  Row from './row'
import Header from './header'
import Layout from './layout'
import Sidebar from './sidebar'
import Footer from  './footer'
import Content from './content'
import Toast from './toast'
import plugin from './plugin'
Vue.component('g-header',Header);
Vue.component('g-layout',Layout);
Vue.component('g-sidebar',Sidebar);
Vue.component('g-footer',Footer);
Vue.component('g-content', Content);
Vue.component('g-button',Button);
Vue.component('g-icon',Icon);
Vue.component('g-button-group',ButtonGroup);
Vue.component('g-input',Input);
Vue.component('g-col', Col);
Vue.component('g-row',Row);
Vue.component('g-toast',Toast);
Vue.use(plugin)
new Vue({
   el:'#app',
    data:{
      isloading1:false,
        isloading2:false,
    },
    created() {

    },
    methods:{
        look(e){
            console.log(e);
       },
        showToast(){
            this.$toast('我是message')
        }
    }
});

// import chai from 'chai'
// import spies from 'chai-spies'
// chai.use(spies)
// const expect = chai.expect;
//单元测试
// {
//     const Constructor =Vue.extend(Button);
//     const vm=new Constructor({
//         propsData:{
//             icon:'settings',
//         },
//
//     });
//     vm.$mount();
//     let useElement=vm.$el.querySelector('use');
//     let href=useElement.getAttribute('xlink:href');
//     expect(href).to.eq('#i-settings');
//     vm.$el.remove();
//     vm.$destroy()
//
// }
// {
//     const Constructor =Vue.extend(Button);
//     const vm=new Constructor({
//         propsData:{
//             icon:'settings',
//             loading:true
//         },
//     });
//     vm.$mount();
//     let useElement=vm.$el.querySelector('use');
//     let href=useElement.getAttribute('xlink:href');
//     expect(href).to.eq('#i-loading');
//     vm.$el.remove();
//     vm.$destroy()
// }
// {
//     const div =document.createElement('div');
//     document.body.appendChild(div);
//     const Constructor =Vue.extend(Button);
//     const vm=new Constructor({
//         propsData:{
//             icon:'settings',
//         },
//     });
//     vm.$mount(div);//把div放到页面上渲染
//     let svg=vm.$el.querySelector('svg');
//     let {order}=window.getComputedStyle(svg);
//     expect(order).to.eq('1');
//     vm.$el.remove();
//     vm.$destroy()
// }
// {
//     const div =document.createElement('div');
//     document.body.appendChild(div);
//     const Constructor =Vue.extend(Button);
//     const vm=new Constructor({
//         propsData:{
//             icon:'settings',
//             loading:true
//         },
//     });
//     vm.$mount(div);//把div放到页面上渲染
//     let svg=vm.$el.querySelector('svg');
//     let {order}=window.getComputedStyle(svg);
//     expect(order).to.eq('1');
//     vm.$el.remove();
//     vm.$destroy()
// }
// {
//     //mock
//     const Constructor =Vue.extend(Button);
//     const vm=new Constructor({
//         propsData:{
//             icon:'settings',
//         },
//     });
//     vm.$mount();
//     let spy=chai.spy(()=>{});
//     vm.$on('click',spy);
//     let button=vm.$el;
//     button.click();
//     expect(spy).to.have.been.called();
//     vm.$el.remove();
//     vm.$destroy()
// }