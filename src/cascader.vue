<template>
    <div class="cascader">
        <div class="trigger" @click="popoverVisible=!popoverVisible">
            <slot></slot>
        </div>
        <div class="popover-wrapper"  v-if="popoverVisible">
            <cascader-item  :selected="selected" :items="source"
                            :height="height" @update:selected="onUpdateSelected"></cascader-item>
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
            },
            height:{
                type:String
            },
            selected:{
                type:Array,
                default:()=>[]
            }
        },
        data(){
            return{
                popoverVisible:false
            }
        },
        methods:{
            onUpdateSelected(newSelected){
                this.$emit('update:selected',newSelected);
            },

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
    position: relative;
    .trigger{
        border: 1px solid black;
        height: 32px;
        width: 100px;
    }
    .popover-wrapper{
        background: #fff;
        position: absolute;
        top: 100%;
        left: 0;
        @extend .box-shadow
    }
}
</style>