<template>
    <div class="g-menu" :class="{vertical}">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "GuluMenu",
        provide(){
            return {
                root:this,
                vertical:this.vertical
             }
            },
        props:{
            selected:{type: String},
            vertical:{type:Boolean,default:false}
        },
        data(){
            return{items:[], namePath:[]}
        },
        updated(){this.updateChildren()},
        mounted() {
            this.updateChildren();
            this.listenToChildren()},
        methods:{
            addItem(vm){
                this.items.push(vm);
            },
            updateChildren(){
                this.items.forEach(vm=>{
                    vm.selected = this.selected===vm.name;
                })
            },
            listenToChildren(){
                this.items.forEach(vm=>{
                    vm.$on('update:selected',(name)=>{
                            this.$emit('update:selected',name);
                    })
                })
            }
        },
    }
</script>

<style scoped lang="scss">
@import "_var";
.g-menu{
    display: flex;
    border-bottom: 1px solid $gray;
    cursor: default;
    user-select: none;
    &.vertical{
        flex-direction: column;
        border: 1px solid $gray;
    }
}
</style>