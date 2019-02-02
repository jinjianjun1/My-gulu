<template>

    <div class="tabs-item" :class="classes" @click="onClick" :data-name="name">
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
                return {active:this.active,
                disabled:this.disabled}
            }
        },
        methods:{
            onClick(){
                if (this.disabled)return;
                this.eventBus.$emit('update:selected',this.name,this);
                this.$emit('click',this)//为了测试添加的代码
            }
        },
        created() {
            if(this.eventBus){
                this.eventBus.$on('update:selected',(name)=>{
                    this.active = this.name === name;
                })
            }
        }
    }
</script>

<style scoped lang="scss">
$color:#54eedb;
$disabled-style:grey;
.tabs-item{
flex-shrink: 0;
    padding: 0 1em;
    cursor: pointer;height: 100%;
    display: flex;
    align-items: center;

&.active{
    color:$color
}
&.disabled{
    color: $disabled-style ;
    cursor: not-allowed;
}
}
</style>