<template>
    <div class="tabs-head">
        <div class="head-wrapper" >
        <slot></slot>
        </div>
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
        mounted: function () {
            this.eventBus.$on('update:selected', (item, vm) => {
                let {width, height, top, left} = vm.$el.getBoundingClientRect();
                let vmLeft=this.$el.querySelector('.head-wrapper').getBoundingClientRect().left;


                this.$refs.line.style.width = `${width}px`;
                this.$refs.line.style.left=`${left-vmLeft}px`;
            })
        }
    }
</script>

<style scoped lang="scss">
    $tab-height:40px;
    $border-color:#ddd;
    .tabs-head{
        display: flex;
        justify-content: flex-start;
        height: $tab-height  ;
        position: relative;
        border-bottom: 1px solid $border-color;
        >.head-wrapper{
            display: flex;
        }
        > .line{
            position: absolute;
            bottom: 0;
            border-bottom: 1px solid darkorchid;
            transition: all .4s;
        }
        >.actions-wrapper{
            margin-left: auto;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 0 1em;
        }
    }
</style>