<template>
    <div>
        <g-menu  :selected.sync="selected" >
            <g-menu-item name="1">title11111111111</g-menu-item>
            <g-sub-menu>
                <template slot="title">sub-title</template>
                <g-menu-item name="2sd">looK</g-menu-item>
                <g-menu-item name="214">Ksad</g-menu-item>
                <g-menu-item name="142">sdsdsd</g-menu-item>
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
