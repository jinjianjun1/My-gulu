<template>
    <div class="collapseItem" @click="toogle">
        <div class="title">
            {{title}}
        </div>
        <div class="content" v-if="open">
        <slot></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: "collapse-item",
        data(){return{
           open:false
        }},
        props:{
            title:{
                type:String,
                required:true
            },
            name:{
                type: String,
                required: true
            }
        },
        mounted(){
            this.eventBus.$on('update:selected',(name)=>{
                if(name!==this.name){
                    this.close()
                }else{
                    this.show()
                }
            })
        },
        methods:{
            toogle(){
                if(this.open){
                    this.close()
                }else{
                    this.eventBus.$emit('update:selected',this.name)
                }
            },
            close(){
                this.open=false
            },
            show(){
                this.open=true
            }
        },
        inject:['eventBus']
    }
</script>

<style scoped lang="scss">
    $gray:#ddd;
    $border-radius:4px;

    .collapseItem{
        & :first-child{
            > .title{
                border-top-left-radius: $border-radius;
                border-top-right-radius: $border-radius;

            }
        }
        & :last-child {
            > .title:last-child{
                border-top-left-radius: $border-radius;
                border-top-right-radius: $border-radius;
            }
        }
        > .title{
            border: 1px solid $gray;margin-top: -1px;margin-left: -1px;margin-right: -1px;
            min-height: 32px;display: flex;align-items: center;
            padding: 0 8px;
        }
        > .content{padding: 8px ;}

    }

</style>