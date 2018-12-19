<template>
    <div>
        <g-menu  :selected.sync="selected" >
            <g-menu-item name="home">首页</g-menu-item>
            <g-sub-menu>
                <template slot="title">关于</template>
                <g-menu-item name="culture">企业文化</g-menu-item>
                <g-menu-item name="team">开发团队</g-menu-item>
                <g-sub-menu>
                    <template slot="title">sdsdsd</template>
                    <g-menu-item name="wechat">微信</g-menu-item>
                    <g-menu-item name="qq">QQ</g-menu-item>
                    <g-sub-menu>
                        <template slot="title">手机</template>
                        <g-menu-item name="small">小灵通</g-menu-item>
                        <g-menu-item name="smartPhone">智能手机</g-menu-item>
                    </g-sub-menu>
                </g-sub-menu>
            </g-sub-menu>
            <g-menu-item name="3">title333333333</g-menu-item>

        </g-menu>
    </div>

</template>

<script>
import GMenu from './menu'
import GMenuItem from './menu-item'
import GSubMenu from './sub-menu'

    export default {
        name:'demo',
        components:{GMenu, GMenuItem, GSubMenu,},
        data(){
            return{
                selected:['1']
            }
        }
    }
</script>

<style scoped>
    *{margin: 0;padding:0;box-sizing: border-box}

</style>
