//用插件的好处是1.如果用户使用import Vue from 'vue2' 则无法触发'vue'原型上的方法
//2.$toast有可能与用户的一些设置冲突，用插件将选择的权力交给用户
import Toast from './toast'
export default {
    install(Vue,options){
        Vue.prototype.$toast=function (message,toastOptions) {
            let Constructor =Vue.extend(Toast);
             let toast = new Constructor({
                     propsData:toastOptions
             });
            // console.log(toast);
            toast.$slots.default=[message];
             toast.$mount();
            document.body.appendChild(toast.$el);
        }
    }
}