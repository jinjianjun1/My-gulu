const expect = chai.expect;
import Vue from 'vue'
import Popover from '../src/popover'

Vue.config.productionTip = false;
Vue.config.devtools = false;

describe('Popover', () => {
    it('存在.', () => {
        // noinspection BadExpressionStatementJS
        expect(Popover).to.be.ok
    });
    it('可以设置position.', (done) => {
        Vue.component('g-popover',Popover);
        const  div  =document.createElement('div');
        document.body.appendChild(div);
        div.innerHTML=`<g-popover position="right" ref="a">
        <template slot="content" >
            今天天气还可以
        </template>
        <button>点我 </button>
    </g-popover>`;
        const vm=new Vue({
            el:div
        });
                vm.$el.querySelector('button').click();
                vm.$nextTick(()=>{
                    const  {contentWrapper}=vm.$refs.a.$refs;
                    expect(contentWrapper.classList.contains('position-right')).to.be.true;
                    done()
                })


    })
});