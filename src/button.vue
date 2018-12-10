<template>
    <button  class="g-button" :class="{[`icon-${iconPosition}`]:true}" @click="$emit('click')">
        <g-icon class="icon" v-if="icon&&!loading" :name="icon"></g-icon>
        <g-icon  name="loading" v-if="loading" class="loading icon"></g-icon>
        <div class="g-button-content">
            <slot></slot>
        </div>
    </button>
</template>

<script>
    import Icon from './icon'
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
        components:{'g-icon':Icon}
    }
</script>

<style  lang="scss" scoped>
    $font-size:14px;
    $button-height:32px;
    $button-bg:white;
    $button-active-bg:#eee;
    $button-radius:4px;
    $color:#333;
    $border-color:#999;
    $border-color-hover:#666;

    @keyframes spin {
        0%{transform:rotate(0deg)}
        100%{transform: rotate(360deg)}
    }
    .g-button {
        font-size: $font-size;
        padding: 0 .8em;border-radius: $button-radius;
        border: 1px solid $border-color;background:  $button-bg;
        display: inline-flex;justify-content: center;align-items: center;
        vertical-align: middle;
            &:hover{border-color: $border-color-hover;}
            &:active{background-color: $button-active-bg}
            &:focus{outline: none}
            > .g-button-content{
                order: 2;}
            > .icon{
                order: 1;
                margin-right: .3em;
                margin-left: 0;
            }
        &.icon-right{
            >.g-button-content{order:1}
            >.icon{order:2;
                margin-left: .3em;
                margin-right: 0;}
        }
        .loading{
            animation: spin 1s infinite linear;
        }
    }



</style>