<template>
    <div class="cascader-item">
        <div class="left">
            <div class="label" v-for="item in items" @click="leftSelected=item">
                {{item.name}}
            </div>
        </div>
        <div class="right" v-if="rightItems">
            <cascader-item  :items="rightItems"></cascader-item>
        </div>
    </div>
</template>

<script>
    export default {
        name: "cascaderItem",
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
.cascader-item{
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    .left{
        border: 1px solid red ;

    }
    .right{
       }
}
</style>