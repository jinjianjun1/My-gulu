<template>
    <div class="g-sub-menu">
        <span @click="onClick">
            <slot name="title"></slot>
        </span>
        <div class="g-sub-menu-popover" v-show="open">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: "GuluSubMenu",
        data(){
            return {open:false}
        },
        methods:{
            onClick(){
                this.open=!this.open
            }
        }
    }
</script>

<style scoped lang="scss">
.g-sub-menu{
    position: relative;
    >span{
        padding:8px 16px;
        display: block;
    }
    &-popover{
        position: absolute;
        top: 100%;
        left: 0;
        border: 1px solid black;
        white-space: nowrap;
    }
}
    .g-sub-menu .g-sub-menu .g-sub-menu-popover{
        top: 0;
        left: 100%;
        margin-left: 8px;
    }
</style>