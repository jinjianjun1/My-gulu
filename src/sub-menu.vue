<template>
    <div class="g-sub-menu" :class="{active,vertical}"  v-click-out-side="close">
        <span class="g-sub-menu-label" @click="onClick">
            <slot name="title"></slot>
            <span class="g-sub-menu-icon" :class="{open,vertical}">
                <g-icon  name="right "></g-icon>
            </span>
        </span>
        <template v-if="vertical">
            <transition name="x" @enter="enter" @after-enter="afterEnter"
                        @leave="leave" @after-leave="afterLeave">
                <div class="g-sub-menu-popover" :class="{vertical}" v-show="open">
                    <slot></slot>
                </div>
            </transition>
        </template>
        <template v-else>
            <div class="g-sub-menu-popover"  v-show="open">
                <slot></slot>
            </div>
        </template>

    </div>
</template>

<script>
    import ClickOutSide from './click-outside'
    import GIcon from './icon'
    export default {
        name: "GuluSubMenu",
        data(){
            return {open:false,}
        },
        components:{GIcon},
        directives:{
            ClickOutSide
        },
        props:{
            name:{type:String,required:true}
        },
        inject:['root','vertical'],
        computed:{
            active(){return   this.root.namePath.indexOf(this.name) >= 0;},
        },
        methods:{
            enter(el,done){
                el.style.height='auto';
               let {height}= el.getBoundingClientRect();
                el.style.height='0px';
                el.getBoundingClientRect();
               el.style.height=`${height}px`;
               // this.$on('transitionend',()=>{
               //     done()
               // })
                el.addEventListener('transitionend',()=>{
                    done()
                })
            },
            afterEnter(el){
                el.style.height='auto';

            },
            leave(el,done){
                let {height}= el.getBoundingClientRect();
                el.style.height=`${height}px`;
                el.getBoundingClientRect();
                el.style.height=0;
                this.$on('transitionend',()=>{
                    done()
                })
            },
            afterLeave(el){
                el.style.height='auto'
            },
            onClick(){
                this.open=!this.open;
            },
            close(){
                this.open=false
            },
            updateNamePath(){
                this.root.namePath.unshift(this.name);
                if (this.$parent.updateNamePath ){
                    this.$parent.updateNamePath()
                }
            },

        }
    }
</script>

<style scoped lang="scss">
    @import "var";
    .g-sub-menu{
        position: relative;
        &:not(.vertical){
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
            transition: height 250ms;

            &.vertical{
                position: static;
                border-radius: 0;
                box-shadow: none;
                overflow: hidden;

            }
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
            display: inline-flex;transform: scale(.8);fill: $light-color;
            margin-left: 1em;transition: transform 250ms;
            &.vertical{
                transform: rotate(90deg);
                &.open{
                    transform: rotate(270deg);
                }
            }
            &.open{
             transform: rotate(180deg);
            }
        }
    }
</style>