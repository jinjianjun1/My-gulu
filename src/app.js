import Vue from 'vue'
import Button   from './button'
import Icon from './icon'
import ButtonGroup from './button-group'
import Input from  './input'
import Col from  './col'
import  Row from './row'
import Header from './header'
import Layout from './layout'
import Sidebar from './sidebar'
import Footer from  './footer'
import Content from './content'
import Toast from './toast'
import plugin from './plugin'
import Tabs from './tabs'
import TabsHead from './tabs-head'
import TabsBody from './tabs-body'
import TabsItem from  './tabs-item'
import TabsPane from './tabs-pane'
import Popover from './popover'
import Collapse from './collapse'
import CollapseItem from './collapse-item'
import Cascader from './cascader'
Vue.component('g-button',Button);
Vue.component('g-button-group',ButtonGroup);
Vue.component('g-cascader',Cascader);
Vue.component('g-col', Col);
Vue.component('g-collapse',Collapse);
Vue.component('g-collapse-item',CollapseItem);
Vue.component('g-content', Content);
Vue.component('g-footer',Footer);
Vue.component('g-header',Header);
Vue.component('g-icon',Icon);
Vue.component('g-input',Input);
Vue.component('g-layout',Layout);
Vue.component('g-popover',Popover);
Vue.component('g-row',Row);
Vue.component('g-sidebar',Sidebar);
Vue.component('g-tabs',Tabs);
Vue.component('g-tabs-body',TabsBody);
Vue.component('g-tabs-head',TabsHead);
Vue.component('g-tabs-item',TabsItem);
Vue.component('g-tabs-pane',TabsPane);
Vue.component('g-toast',Toast);
Vue.use(plugin);
new Vue({
   el:'#app',
    data:{
       source:[{
           name:'山西',
               children:[
                   {name:'临汾',
                       children: [
                           {name:'市辖区'},
                           {name:'尧都区'},
                           {name:'襄汾县'},
                       ]
                   },
                   {name:'运城',
                       children: [
                           {name:'市辖区'},
                           {name:'12312'},
                           {name:'12431'},
                       ]
                   }
               ],
           }, {name:'山东',
               children:[
                   {name:'市名1',
                       children: [
                           {name:'区3'},
                           {name:'区2'},
                           {name:'区1'},
                       ]
                   },
                   {name:'市名2',
                       children: [
                           {name:'市辖区'},
                           {name:'12312'},
                           {name:'12431'},
                       ]
                   }
               ],
           }, {name:'杭州',
               children:[
                   {name:'市名x',
                       children: [
                           {name:'区名q'},
                           {name:'区名s'},
                           {name:'区名v'},
                       ]
                   },
                   {name:'市名ss',
                       children: [
                           {name:'市辖区'},
                           {name:'区名sd'},
                           {name:'区名szzz'},
                       ]
                   }
               ],
           }
       ],
      isloading1:false,
        isloading2:false,
        selectTab:['2','1']
    },
    created() {

    },
    methods:{
        look(e){
            console.log(e);
       },
        ooo(){
            console.log('11111')
        },
        showtoast1(){
            this.showToast('top')
        },showtoast2(){
            this.showToast('middle')
        },showtoast3(){
            this.showToast('bottom')
        },
        showToast(position){
            this.$toast(`你好${parseInt(Math.random()*100)}`,{
                position,
                closeButton: {
                    text:'知道了',
                    callback(toast){
                        console.log('user konwn')
                    },
                },
                enableHtml: false,
                autoClose:3

            })
        }
    }
});

