<template>
    <div class="cascader">
        <div class="trigger" @click="popoverVisible=!popoverVisible">
            <slot></slot>
        </div>
        <div class="popover"  v-if="popoverVisible">
            <cascader-item :items="source"></cascader-item>

        </div>
    </div>
</template>

<script>
    import cascaderItem from './cascader-item'
    export default {
        name: "GuluCascader",
        props:{
            source:{
                type:Array
            }
        },
        data(){
            return{
                popoverVisible:false
            }
        },
        components:{
            cascaderItem
        },
        mounted() {

        }
    }
</script>

<style scoped lang="scss">
@import "var";
.cascader{
    .trigger{
        border: 1px solid red;
        height: 32px;
        width: 100px;
    }
}
</style>