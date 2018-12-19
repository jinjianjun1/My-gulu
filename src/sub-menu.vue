<template>
    <div class="g-sub-menu" :class="{active}"  v-click-out-side="close">
        <span @click="onClick">
            <slot name="title"></slot>
        </span>
        <div class="g-sub-menu-popover" v-show="open">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    // import ClickOutSide from 'E:\gulu-demo\src\click-outside.js'
    import ClickOutSide from './click-outside'
    export default {
        name: "GuluSubMenu",
        data(){
            return {
                open:false,
            }
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
    >span{
        padding:8px 16px;
        display: block;
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
    .g-sub-menu .g-sub-menu .g-sub-menu-popover{
        top: 0;
        left: 100%;
        margin-left: 8px;
    }
</style>