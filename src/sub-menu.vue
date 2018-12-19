<template>
    <div class="g-sub-menu" :class="{active}"  v-click-out-side="close">
        <span class="g-sub-menu-label" @click="onClick">
            <slot name="title"></slot>
            <span class="g-sub-menu-icon" :class="{open}">
                <g-icon  name="right "></g-icon>
            </span>
        </span>
        <div class="g-sub-menu-popover" v-show="open">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    import ClickOutSide from './click-outside'
    import GIcon from './icon'
    export default {
        name: "GuluSubMenu",
        data(){
            return {
                open:false,
            }
        },
        components:{
            GIcon
        },
        directives:{
            ClickOutSide
        },
        props:{
            name:{type:String,required:true}
        },
        inject:['root'],
        computed:{
            active(){
                return   this.root.namePath.indexOf(this.name) >= 0;
            },
        },
        methods:{
            onClick(){
                this.open=!this.open;
                console.log(this.isActive);
            },
            close(){
                this.open=false
            },
            updateNamePath(){
                this.root.namePath.unshift(this.name);

                if (this.$parent.updateNamePath ){
                    this.$parent.updateNamePath()
                }else {
                    // this.root.namePath=[]?
                }
            },

        }
    }
</script>

<style scoped lang="scss">
    @import "var";
.g-sub-menu{
    position: relative;
    &.active{
        position: relative;
        &::after{
            content: '';
            position: absolute;
            bottom: 0;
            left: 0;
            border-bottom: 2px solid $blue;
            width: 100%;
        }
    }
    &-label{
        padding:8px 16px;
        display: block;
    }
    &-icon{
        display: none;
    }
    &-popover{
        min-width: 6em;
        color: $light-color;
        font-style: $font-size;
        background: #fff;
        margin-top: 1px ;
        position: absolute;
        top: 100%;
        left: 0;
        white-space: nowrap;
        box-shadow: 0 0 3px fade_out(#000,.8) ;
        border-radius: $border-radius;
    }
}
    .g-sub-menu .g-sub-menu {
        &.active{
            &::after{
                display: none;
            }
        }
        .g-sub-menu-popover{
            top: 0;
            left: 100%;
            margin-left: 8px;
        }
        .g-sub-menu-label{
            display: flex;
            align-items: center;
            justify-content: space-between;
        }
        .g-sub-menu-icon{
            display: inline-flex;
            transform: scale(.8);
            fill: $light-color;
            margin-left: 1em;
            transition: transform 250ms;
            &.open{

             transform: rotate(180deg);
            }
        }
    }
</style>