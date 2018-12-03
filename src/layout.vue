<template>
    <div class="layout" :class="layoutClass">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "GuluLayout",
        data(){
            return{
                layoutClass:{hasSider:false}
            }
        },
        mounted() {
            this.$children.forEach((vm)=>{
                console.log(vm.$options.name);
                if(vm.$options.name==='GuluSiderBar'){
                   this.layoutClass.hasSider=true
               }
            })
        }
    }
</script>

<style scoped lang="scss">
    .layout{
        display: flex;
        flex-direction: column;
        border: 1px solid black;
        &.hasSider{
            flex-direction: row;
        }
    }

</style>