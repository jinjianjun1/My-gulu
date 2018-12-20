import chai, {expect} from 'chai'
import sinon from 'sinon'
import {mount} from '@vue/test-utils'
import sinonChai from 'sinon-chai'
import Menu from '../../src/menu/menu'
import MenuItem from '../../src/menu/menu-item'
import SubMenu from '../../src/menu/sub-menu'
import Vue from 'vue'
chai.use(sinonChai);

describe('Menu.vue', () => {
    it('存在.', () => {
        expect(Menu).to.exist
    });
    it('支持 selected 属性', function () {
        Vue.component('g-menu-item',MenuItem);
        Vue.component('g-sub-menu',SubMenu);
        const wrapper=mount(Menu,{
            propsData:{
                selected:'home'
            },
            slots:{
                default:`
                 <g-menu-item name="home">首页</g-menu-item>
            <g-sub-menu name="about">
                <template slot="title">关于</template>
                <g-menu-item name="culture">企业文化</g-menu-item>
                <g-menu-item name="team">开发团队</g-menu-item>
`
            }
        });
        setTimeout(()=>{
            expect(wrapper.find('[data-name="home"].selected').exists()).to.be.true
            }
        )
    });
    it('会触发update:selected事件 ', function () {
        Vue.component('g-menu-item',MenuItem);
        Vue.component('g-sub-menu',SubMenu);
        const callback=sinon.fake();
        const wrapper=mount(Menu,{
            propsData:{
                selected:'home'
            },
            slots:{
                default:`
                 <g-menu-item name="home">首页</g-menu-item>
            <g-sub-menu name="about">
                <template slot="title">关于</template>
                <g-menu-item name="culture">企业文化</g-menu-item>
                <g-menu-item name="team">开发团队</g-menu-item>
             </g-sub-menu >
               
`
            },
            listeners:{
                'update:selected':callback
            }
        });
            wrapper.find('[data-name="team"]').trigger('click');
                expect(callback).to.have.been.calledWith('team')
    });

});
