<template class="tabs">
    <div>
    <slot></slot>
    </div>
</template>

<script>
    import Vue from 'vue'
    export default {
        name: "GuluTabs",
        props:{
            selected:{type:String, required:true},
            direction:{
                type:String,
                default:"horizontal",
                validator(value){
                    return ['horizontal','vertical'].indexOf(value)>=0
                }
            }
        },
        data(){
            return{
            eventBus:new Vue()
        }},
        provide(){
            return{
                eventBus: this.eventBus
            }
        },
        created() {},
        mounted() {
            if (this.$children.length===0){
               console&&console.warn&& console.warn('你没有传入正确的子组件 tabs-head & tabs-body')
            }
            this.$children.forEach(vm=>{
                if (vm.$options.name==='GuluTabsHead'){
                    vm.$children.forEach(childVm=>{
                        if(childVm.$options.name==='GuluTabsItem'&&childVm.name===this.selected){
                            this.eventBus.$emit('update:selected',this.selected,childVm)
                        }
                    })
                }
            });
        }
    }
</script>

<style scoped>

</style>