<template>
    <div class="collapse">
            <slot></slot>
    </div>
</template>

<script>
    import Vue from 'vue'
    export default {
        name: "GuluCollapse",
        data(){return{
            eventBus:new Vue()
        }},
        props:{
            single:{
                type:Boolean,
                default:false
            }
        },
        provide(){
            if(this.single){
                return{
                    eventBus: this.eventBus
                }
            }

        }

    }
</script>

<style scoped lang="scss">
    $gray:#ddd;
    $border-radius:4px;
    .collapse{
        border: 1px solid $gray;
        border-radius: $border-radius;
        overflow: hidden;
    }
</style>