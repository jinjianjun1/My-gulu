const expect = chai.expect;
import Vue from 'vue'
import Tabs from '../src/tabs'
import TabsHead from '../src/tabs-head'
import TabsBody from '../src/tabs-body'
import TabsItem from  '../src/tabs-item'
import TabsPane from '../src/tabs-pane'
Vue.component('g-tabs-pane',TabsPane);
Vue.component('g-tabs-item',TabsItem);
Vue.component('g-tabs-head',TabsHead);
Vue.component('g-tabs-body',TabsBody);
Vue.component('g-tabs',Tabs);
Vue.config.productionTip = false;
Vue.config.devtools = false;

describe('Tabs', () => {
    it('存在.', () => {
        expect(Tabs).to.exist
    });
    it('接受selected ', function (done) {
       const div=document.createElement('div');
        document.body.appendChild(div);
        div.innerHTML=`<g-tabs selected="first">
    <g-tabs-head >
        <g-tabs-item  name="first">
            title1</g-tabs-item>
        <g-tabs-item name="second">title2</g-tabs-item>
        <g-tabs-item name="third">title3</g-tabs-item>
    </g-tabs-head>
    <g-tabs-body>
        <g-tabs-pane name="first">1</g-tabs-pane>
        <g-tabs-pane name="second">2</g-tabs-pane>
        <g-tabs-pane name="third">3</g-tabs-pane>
    </g-tabs-body>
</g-tabs>
`;       let vm=new Vue({
            el:div
        });
        vm.$nextTick(()=>{
            let test= vm.$el.querySelector('.tabs-item[data-name="first"]');
           expect(test.classList.contains('active')).to.be.true
            done()
        });
    });
    it('可以接受direction prop', function () {

    });
});