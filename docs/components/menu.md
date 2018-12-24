横版
```
<template>
    <div>
        <g-menu  :selected.sync="selected"   >
            <g-menu-item name="home">首页</g-menu-item>
            <g-sub-menu name="about">
                <template slot="title">关于</template>
                <g-menu-item name="culture">企业文化</g-menu-item>
                <g-menu-item name="team">开发团队</g-menu-item>
                <g-sub-menu name="construct">
                    <template slot="title">联系方式</template>
                    <g-menu-item name="wechat">微信</g-menu-item>
                    <g-menu-item name="qq">QQ</g-menu-item>
                    <g-sub-menu name="phone">
                        <template slot="title">手机</template>
                        <g-menu-item name="small">小灵通</g-menu-item>
                        <g-menu-item name="smartPhone">智能手机</g-menu-item>
                    </g-sub-menu>
                </g-sub-menu>
            </g-sub-menu>
            <g-menu-item name="ss">ss </g-menu-item>

```
竖版 
```
        </g-menu>
        <g-menu   :selected.sync="selected" vertical style="width: 200px;margin-top: 200px;" >
            <g-menu-item name="home">首页</g-menu-item>
            <g-sub-menu name="about">
                <template slot="title">关于</template>
                <g-menu-item name="culture">企业文化</g-menu-item>
                <g-menu-item name="team">开发团队</g-menu-item>
                <g-sub-menu name="construct">
                    <template slot="title">联系方式</template>
                    <g-menu-item name="wechat">微信</g-menu-item>
                    <g-menu-item name="qq">QQ</g-menu-item>
                    <g-sub-menu name="phone">
                        <template slot="title">手机</template>
                        <g-menu-item name="small">小灵通</g-menu-item>
                        <g-menu-item name="smartPhone">智能手机</g-menu-item>
                    </g-sub-menu>
                </g-sub-menu>
            </g-sub-menu>
            <g-menu-item name="ss">ss </g-menu-item>
        </g-menu>
        <div>用户选择了{{selected}}</div>
    </div>

</template>
```

usage
```angular2
import GMenu from './menu/menu'
import GMenuItem from './menu/menu-item'
import GSubMenu from './menu/sub-menu'
    export default {
        name:'demo',
        components:{GMenu, GMenuItem, GSubMenu,},
        data(){
            return{
                selected:'home',
            }
        },
        methods:{
        },
        watch:{
            selected(newS){
                if (newS==='home'){
                    alert('h1')
                }
            }
        }
    }
```