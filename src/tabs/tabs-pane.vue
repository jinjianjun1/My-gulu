<template>
    <div class="tabs-pane" :class="classes" v-if="active">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "GuluTabsPane",
        inject:['eventBus'],
        data(){
            return{
                active:false
            }
        },
        computed:{
            classes(){
                return {active:this.active}
            }
        },
        props:{
            name:{
                type: String,
                required:true
            }
        },
        created() {
            this.eventBus.$on('update:selected',(name)=>{
                this.active = this.name === name;

            })
        }
    }
</script>

<style scoped lang="scss">
.tabs-pane{
    padding: 1em;
    &.active{
    }
}
</style>