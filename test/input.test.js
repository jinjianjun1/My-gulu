const expect = chai.expect;
import Vue from 'vue'
import Input from '../src/input'

Vue.config.productionTip = false;
Vue.config.devtools = false;

describe('Input', () => {
    it('存在.', () => {
        expect(Input).to.exist
    });
    describe('props',()=>{
        const Constructor =Vue.extend(Input);
        let vm;
        afterEach(()=>{
            vm.$destroy()
        });
    it('接受value',()=>{
         vm = new Constructor({
            propsData:{
                value:'123123'
            }
        }).$mount();
        const inputElement=vm.$el.querySelector('input');
        expect(inputElement.value).to.equal('123123');
    });
    it('接受disabled',()=>{
         vm = new Constructor({
            propsData:{
                disabled:true
            }
        }).$mount();
        const inputElement=vm.$el.querySelector('input');
        expect(inputElement.disabled).to.equal(true);
    });
    it('接受readonly',()=>{
         vm = new Constructor({
            propsData:{
                readonly:true
            }
        }).$mount();
        const inputElement=vm.$el.querySelector('input');
        expect(inputElement.readOnly).to.equal(true);
    });
    it('接受error',()=>{
         vm = new Constructor({
            propsData:{
                error:'测试错误'
            }
        }).$mount();
        const useElement=vm.$el.querySelector('use');
        expect(useElement.getAttribute('xlink:href')).to.equal('#i-error');
        const errorMsg=vm.$el.querySelector('.errMsg');
        expect(errorMsg.innerText).to.equal('测试错误')
    })
    });
    describe('事件',()=>{
        const Constructor =Vue.extend(Input);
        let vm;
        afterEach(()=>{
            vm.$destroy()
        });
        it('支持change/input/blur/focus事件',()=>{
            ['change','input','blur','focus'].forEach(eventName=>{
                vm= new Constructor({}).$mount();
                const callback=sinon.fake();
                vm.$on(eventName,callback);
                let event =new Event(eventName);
                let inputElement=vm.$el.querySelector('input');
                inputElement.dispatchEvent(event);
                expect(callback).to.have.been.calledWith(event)
            });

        })
    })
});