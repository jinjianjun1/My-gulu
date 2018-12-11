<template>
    <div class="cascader-item" :style="{height:height}">
        <div class="left">
            <div class="label" v-for="item in items" @click="leftSelected=item">
                {{item.name}}
                <span v-if="item.children"> <g-icon class="icon" name="right"></g-icon> </span>
            </div>
        </div>
        <div class="right" v-if="rightItems">
            <cascader-item  :items="rightItems" :height="height"></cascader-item>
        </div>
    </div>
</template>

<script>
    import Icon from './icon'
    export default {
        name: "cascaderItem",
        components:{
            'g-icon':Icon
        },
        computed:{
            rightItems(){
                if (this.leftSelected&&this.leftSelected.children){
                    return this.leftSelected.children
                }else{
                    return null
                }
            }
        },
        props:{
            items:{
                type:Array
            },
            height:{
                type:String
            }
        },
        data(){
            return{
                leftSelected:null
            }
        }

    };
</script>

<style scoped lang="scss">
    @import "var";
.cascader-item{
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    .left{
        height: 100%;
        padding: .3em 0;
        .label{
            padding: .3em .5em;
            display: flex;
            align-items: center;
            .icon{
                margin-left: .5em;
                transform: scale(.5);
            }
        }
    }
    .right{
        height: 100%;
        border-left: 1px solid $border-color-light;
    }
}
</style>