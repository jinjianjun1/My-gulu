<template>
    <div class="tabs-head">
        <slot></slot>
        <div class="line" ref="line"></div>
        <div class="actions-wrapper">
        <slot name="actions"></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: "GuluTabsHead",
        inject:['eventBus'],
        created() {
            this.eventBus.$on('update:selected',(item,vm)=>{
                console.log(item);
                console.log(vm);
            })
        }
    }
</script>

<style scoped lang="scss">
    $tab-height:40px;
    .tabs-head{
        display: flex;
        justify-content: flex-start;
        border: 1px solid red;
        height: $tab-height  ;
        position: relative;
        > .line{
            position: absolute;
            bottom: 0;
            border-bottom: 1px solid darkorchid;
            width:50px;
        }
        >.actions-wrapper{
            margin-left: auto;
        }
    }
</style>