<template>
    <div class="j-button-group" >
        <slot></slot>
    </div>
</template>
<script>
    export default {
        name:"gulu-button-group",
        mounted() {
            for (let node of this.$el.children){
              let name= node.nodeName.toLowerCase();
                if(name!=='button'){
                    console.warn(`j-button-group中只可以添加j-button,但是你写的是${name}`)
                }
            }
        }
    }
</script>
<style lang="scss" scoped>
    .j-button-group{
        display: inline-flex;vertical-align: middle;
        >.j-button{
            border-radius: 0;
            &:not(:first-child){margin-left: -1px;}
            &:first-child{
                border-top-left-radius: var(--border-radius);
                border-bottom-left-radius: var(--border-radius);
            }
            &:last-child{
                border-bottom-right-radius: var(--border-radius);
                border-top-right-radius: var(--border-radius);
            }
            &:hover{
                position: relative;
                z-index: 1;
            }
        }
    }
</style>