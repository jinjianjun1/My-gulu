//用插件的好处是1.如果用户使用import Vue from 'vue2' 则无法触发'vue'原型上的方法
//2.$toast有可能与用户的一些设置冲突，用插件将选择的权力交给用户
import Toast from './toast'

let currentToast;
export default {
    install(Vue,options){
        Vue.prototype.$toast=function (message,toastOptions) {
            if(currentToast){
                currentToast.close();
            }
            currentToast = createToast({
                Vue,
                message,
                propsData: toastOptions,
                onClose:()=>{
                    currentToast=null
                }
            })
        }
    }
}


function createToast({Vue, message, propsData, onClose}) {
    let Constructor =Vue.extend(Toast);
    let toast = new Constructor({propsData});
    toast.$slots.default=[message];
    toast.$mount();
    toast.$on('close', onClose);
    document.body.appendChild(toast.$el);
    return toast
}