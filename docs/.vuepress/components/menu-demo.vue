<template>
    <div>
        <h2>基本用法</h2>

        <j-menu :selected.sync="selected">
            <j-menu-item name="dota">dota</j-menu-item>
            <j-menu-item name="lol">lol</j-menu-item>
            <j-menu-item name="王者荣耀">王者荣耀</j-menu-item>      
        </j-menu>
        <pre><code>{{content}}</code></pre>

        <h2>进阶</h2>
        <h3>横排</h3>
        <j-menu  :selected.sync="selected"   >
            <j-menu-item name="dota">dota</j-menu-item>
            <j-sub-menu name="lol">
                <template slot="title">lol</template>
                <j-menu-item name="company">拳头</j-menu-item>
                <j-menu-item name="team">开发团队</j-menu-item>
                 <j-sub-menu name="awesome">
                    <template slot="title">IG牛逼</template>
                    <j-menu-item name="wechat">S8总冠军</j-menu-item>
                    <j-menu-item name="adc">ad接Q辣舞</j-menu-item>
                    <j-menu-item name="上单">上单theShay</j-menu-item>

                </j-sub-menu>
            </j-sub-menu>
            <j-sub-menu name="construct">
                    <template slot="title">王者荣耀</template>
                    <j-menu-item name="wechat">微信登录</j-menu-item>
                    <j-menu-item name="qq">QQ登录</j-menu-item>
                </j-sub-menu>
        </j-menu>
    </div>
</template>

<script>
    import JMenu from '../../../src/menu/menu.vue'
    import JSubMenu from '../../../src/menu/sub-menu.vue'
    import JMenuItem from '../../../src/menu/menu-item.vue'

    export default {
        components:{
            JMenu,JSubMenu,JMenuItem,
            
        },
        data(){
            return{
                selected:"dota",
                content:`<j-menu :selected.sync="selected">
            <j-menu-item name="dota">dota</j-menu-item>
            <j-menu-item name="lol">lol</j-menu-item>
            <j-menu-item name="王者荣耀">王者荣耀</j-menu-item>      
        </j-menu>`.replace(/\t+| +/g,'').trim()
            }
        },
    }
</script>

<style scoped>

</style>