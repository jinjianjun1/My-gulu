import chai,{ expect } from 'chai'
import { shallowMount,mount } from '@vue/test-utils'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'
chai.use(sinonChai);
import Slides from '@/slides.vue'
import SlidesItem from '@/slides-item.vue'

import Vue from 'vue'
describe('Slides.vue', () => {
    it('存在.', () => {
        expect(Slides).to.be.exist
    });
    it('接受GuluSlidesItem,默认展示第一个 ', function (done) {


        Vue.component('GSlidesItem',SlidesItem);
        const wrapper  =mount(Slides,{
            propsData:{
                autoPlay:false
            },
            slots:{
                default:`<g-slides-item name="1">
                 <div class="box1">1</div>
                 </g-slides-item>
                 <g-slides-item name="2">
                 <div class="box2">2</div>
                 </g-slides-item>
                 <g-slides-item name="3">
                 <div class="box3">3</div>
                 </g-slides-item>
                `
            }
        });

        setTimeout(()=>{
            expect(wrapper.find('.box1').exists()).to.be.true
            done()
        })
    });
    it('selected是多少就展示选中的 ', function (done) {

        Vue.component('GSlidesItem',SlidesItem);
        const wrapper  =mount(Slides,{
            propsData:{
                autoPlay:false,
                selected:'2'
            },
            slots:{
                default:`<g-slides-item name="1">
                 <div class="box1">1</div>
                 </g-slides-item>
                 <g-slides-item name="2">
                 <div class="box2">2</div>
                 </g-slides-item>
                 <g-slides-item name="3">
                 <div class="box3">3</div>
                 </g-slides-item>
                `
            }
        });

        setTimeout(()=>{
            expect(wrapper.find('.box2').exists()).to.be.true
            done()
        })
    });

    it('点击第二个展示第二个', function (done) {
        Vue.component('GSlidesItem',SlidesItem);
        const wrapper  =mount(Slides,{
            propsData:{
                autoPlay:false
            },
            slots:{
                default:`<g-slides-item name="1">
                 <div class="box1">1</div>
                 </g-slides-item>
                 <g-slides-item name="2">
                 <div class="box2">2</div>
                 </g-slides-item>
                 <g-slides-item name="3">
                 <div class="box3">3</div>
                 </g-slides-item>
                `
            },
            listeners:{
                'update:selected':(x)=>{
                    expect(x).to.eq('2');
                    done()
                }
            }
        });

        setTimeout(()=>{
            wrapper.find('[data-index="1"]').trigger('click')
        })
    });
    it('会自动播放', function (done) {
        Vue.component('GSlidesItem',SlidesItem);
        const callback=sinon.fake();
        const wrapper  =mount(Slides,{
            propsData:{
                autoPlay:true,
                autoPlayDelay:20,
                selected:'1'
            },
            slots:{
                default:`<g-slides-item name="1">
                 <div class="box1">1</div>
                 </g-slides-item>
                 <g-slides-item name="2">
                 <div class="box2">2</div>
                 </g-slides-item>
                 <g-slides-item name="3">
                 <div class="box3">3</div>
                 </g-slides-item>
                `
            },
            listeners:{
                'update:selected':callback
            }
        });

        setTimeout(()=>{
            expect(callback).to.have.been.calledWith('2');
            done()
        },50)
    });

});
