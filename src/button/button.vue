<template>
    <button  class="j-button" :class="{[`icon-${iconPosition}`]:true}" @click="$emit('click')">
        <j-icon class="icon" v-if="icon&&!loading" :name="icon"></j-icon>
        <j-icon  name="loading" v-if="loading" class="loading icon"></j-icon>
        <div class="j-button-content">
            <slot></slot>
        </div>
    </button>
</template>

<script>
    import Icon from '../icon'
    export default {
        name: "gulu-button",
        props:{
            loading:{type: Boolean,default: false},
            icon:{},
            iconPosition:{
                type:String,
                default:'left',
                validator(value) {
                    return value === 'left' || value ==='right'
                }
            }
        },
        components:{'j-icon':Icon}
    }
</script>

<style  lang="scss" scoped>
    @import "../../styles/var";

    .j-button {
        font-size: $font-size;
        padding: 0 .8em;border-radius: $button-radius;
        border: 1px solid $border-color;background:  $button-bg;
        display: inline-flex;justify-content: center;align-items: center;
        vertical-align: middle;
            &:hover{border-color: $border-color-hover;}
            &:active{background-color: $button-active-bg}
            &:focus{outline: none}
            > .j-button-content{
                order: 2;}
            > .icon{
                order: 1;
                margin-right: .3em;
                margin-left: 0;
            }
        &.icon-right{
            >.j-button-content{order:1}
            >.icon{order:2;
                margin-left: .3em;
                margin-right: 0;}
        }
        .loading{
            @include spin
        }
    }



</style>