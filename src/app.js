import Vue from 'vue'
import Button   from './button'
import Icon from './icon'
import ButtonGroup from './button-group'
Vue.component('g-button',Button);
Vue.component('g-icon',Icon);
Vue.component('g-button-group',ButtonGroup);
new Vue({
   el:'#app',
    data:{
      isloading1:false,
        isloading2:false
    }
});

import chai from 'chai'
const expect = chai.expect;
//单元测试
{
    const Constructor =Vue.extend(Button);
    const vm=new Constructor({
        propsData:{
            icon:'settings',
        },

    });
    vm.$mount();
    let useElement=vm.$el.querySelector('use');
    let href=useElement.getAttribute('xlink:href');
    expect(href).to.eq('#i-settings');
    vm.$el.remove();
    vm.$destroy()

}
{
    const Constructor =Vue.extend(Button);
    const vm=new Constructor({
        propsData:{
            icon:'settings',
            loading:true
        },
    });
    vm.$mount();
    let useElement=vm.$el.querySelector('use');
    let href=useElement.getAttribute('xlink:href');
    expect(href).to.eq('#i-loading');
    vm.$el.remove();
    vm.$destroy()
}
{
    const div =document.createElement('div');
    document.body.appendChild(div);
    const Constructor =Vue.extend(Button);
    const vm=new Constructor({
        propsData:{
            icon:'settings',
        },
    });
    vm.$mount(div);//把div放到页面上渲染
    let svg=vm.$el.querySelector('svg');
    let {order}=window.getComputedStyle(svg);
    expect(order).to.eq('1');
    vm.$el.remove();
    vm.$destroy()
}
{
    const div =document.createElement('div');
    document.body.appendChild(div);
    const Constructor =Vue.extend(Button);
    const vm=new Constructor({
        propsData:{
            icon:'settings',
            loading:true
        },
    });
    vm.$mount(div);//把div放到页面上渲染
    let svg=vm.$el.querySelector('svg');
    let {order}=window.getComputedStyle(svg);
    expect(order).to.eq('1');
    vm.$el.remove();
    vm.$destroy()
}
{
    //mock
    const Constructor =Vue.extend(Button);
    const vm=new Constructor({
        propsData:{
            icon:'settings',
        },
    });
    vm.$mount();
    vm.$on('click',function(){
        expect(1).to.eq(1);
    });
    let button=vm.$el;
    button.click();
    vm.$el.remove();
    vm.$destroy()
}