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
                this.eventBus.$emit('update:selected',this.name,this)
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
$color:blue;
.tabs-item{
flex-shrink: 0;
    padding: 0 1em;
    cursor: pointer;height: 100%;
    display: flex;
    align-items: center;

&.active{
    color:$color
}
}
</style>