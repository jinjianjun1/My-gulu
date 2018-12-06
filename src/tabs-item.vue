<template>
    <div class="tabs-item" :class="classes" @click="xxx">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "GuluTabsItem",
        inject:['eventBus'],
        data(){
            return{
                active:false
            }
        },
        props:{
            disabled:{
                type:Boolean,
                default:false
            },
            name:{
                type: String|Number,
                required:true
            }
        },
        computed:{
            classes(){
                return {active:this.active}
            }
        },
        methods:{
            xxx(){
                this.eventBus.$emit('update:selected',this.name)
            }
        },
        created() {
            this.eventBus.$on('update:selected',(name)=>{
              this.active = this.name === name;

            })
        }
    }
</script>

<style scoped>

</style>