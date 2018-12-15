const expect = chai.expect;
import Vue from 'vue'
import Row from '../src/row'
import Col from  '../src/col'
Vue.config.productionTip = false;
Vue.config.devtools = false;

describe('Col', () => {
    // afterEach(vm.$el.$destroy());
    it('存在.', () => {
        expect(Col).to.be.exist;
    });
    it('接受span ',  ()=> {
        const  div =document.createElement('div');
        document.body.appendChild(div);
        const Constructor = Vue.extend(Col);
        const vm = new Constructor({
            propsData: {
               span:1
            }
        }).$mount(div);
        const element=vm.$el;
        expect(element.classList.contains('col-1')).to.eq(true);
        div.remove();
        vm.$destroy()
    });
    it('接受offset ',  ()=> {
        const  div =document.createElement('div');
        document.body.appendChild(div);
        const Constructor = Vue.extend(Col);
        const vm = new Constructor({
            propsData: {
                offset:1
            }
        }).$mount(div);
        const element=vm.$el;
        expect(element.classList.contains('offset-1')).to.eq(true);
        div.remove();
        vm.$destroy()
    });
    it('接受pc ',  ()=> {
        const  div =document.createElement('div');
        document.body.appendChild(div);
        const Constructor = Vue.extend(Col);
        const vm = new Constructor({
            propsData: {
                pc:{span:1,offset:1}
            }
        }).$mount(div);
        const element=vm.$el;
        expect(element.classList.contains('col-pc-1')).to.eq(true);
        expect(element.classList.contains('offset-pc-1')).to.eq(true);
        div.remove();
        vm.$destroy()
    });
    it('接受ipad ',  ()=> {
        const  div =document.createElement('div');
        document.body.appendChild(div);
        const Constructor = Vue.extend(Col);
        const vm = new Constructor({
            propsData: {
                ipad:{span:1,offset:1}
            }
        }).$mount(div);
        const element=vm.$el;
        expect(element.classList.contains('col-ipad-1')).to.eq(true);
        expect(element.classList.contains('offset-ipad-1')).to.eq(true);
        div.remove();
        vm.$destroy()
    });
    it('接受narrow-pc ',  ()=> {
        const  div =document.createElement('div');
        document.body.appendChild(div);
        const Constructor = Vue.extend(Col);
        const vm = new Constructor({
            propsData: {
                narrowPc:{span:1,offset:1}
            }
        }).$mount(div);
        const element=vm.$el;
        expect(element.classList.contains('col-narrow-pc-1')).to.eq(true);
        expect(element.classList.contains('offset-narrow-pc-1')).to.eq(true);
        div.remove();
        vm.$destroy()
    });
    it('接受wide-pc ',  ()=> {
        const  div =document.createElement('div');
        document.body.appendChild(div);
        const Constructor = Vue.extend(Col);
        const vm = new Constructor({
            propsData: {
                widePc:{span:1,offset:1}
            }
        }).$mount(div);
        const element=vm.$el;
        expect(element.classList.contains('col-wide-pc-1')).to.eq(true);
        expect(element.classList.contains('offset-wide-pc-1')).to.eq(true);
        div.remove();
        vm.$destroy()
    });
});