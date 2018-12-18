import chai,{ expect } from 'chai'
import { shallowMount,mount } from '@vue/test-utils'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'
chai.use(sinonChai);

import Popover from '../../src/popover'



describe('Popover', () => {
    it('存在.', () => {
        // noinspection BadExpressionStatementJS
        expect(Popover).to.be.ok
    });
    it('可以设置position.', () => {
        const wrapper =mount(Popover,{
            slots:{
                default:{template:`<button>点我</button>`},
                content:'<div>弹出内容</div>'
            },
            propsData:{
                position:'bottom'
            }
        });
        wrapper.find('button').trigger('click');
        let classes=wrapper.find('.content-wrapper').classes();
        expect(classes).to.includes('position-bottom')
    });
    it('可以设置trigger.', () => {
        const wrapper=mount(Popover,{
            slots:{
                default:{template:`<button>点我</button>`},
                content:'<div>弹出内容</div>'
            },
            propsData:{
                position:'bottom',
                trigger:'hover'
            }
        });
        expect(wrapper.find('.content-wrapper').element).to.not.exist
        wrapper.find('.popover').trigger('mouseenter');
        expect(wrapper.find('.content-wrapper').element).to.exist
    })
});