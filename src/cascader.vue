<template>
    <div class="cascader">
        <div class="trigger" @click="popoverVisible=!popoverVisible">
            {{result || '&nbsp'}}
        </div>
        <div class="popover-wrapper"  v-if="popoverVisible">
            <cascader-item  :selected="selected" :items="source"
                            :height="height" @update:selected="onUpdateSelected">

            </cascader-item>
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
        computed:{
            result(){
                return this.selected.map(item=>item.name).join('/')
            }
        }
    }
</script>

<style scoped lang="scss">
@import "var";
.cascader{
    position: relative;
    .trigger{
        height: $input-height;
        display: inline-flex;
        align-items: center;
        padding: 0 1em;
        min-width: 10em;
        border: 1px solid $border-color;
        border-radius: $button-radius;
    }
    .popover-wrapper{
        background: #fff;
        position: absolute;
        top: 100%;
        left: 0;
        margin-top: 6px;
        @extend .box-shadow
    }
}
</style>