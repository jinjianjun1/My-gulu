<template>
    <div class="g-menu-item" :selected="selected" :class="{selected}" @click="onClick">
        <div>
        <slot></slot>
        </div>
    </div>
</template>
<script>
    export default {
        name: "GuluMenuItem",
        inject:['root'],
        data(){
            return{selected:false}},
        props:{
            name:{type:String, required:true},
        },
        methods:{
            onClick(){
                this.root.namePath=[];
                this.$parent.updateNamePath&&this.$parent.updateNamePath();
                this.$emit('add:selected',this.name);
            }
        },
        created() {
            this.root.addItem(this)
        }
    }
</script>

<style scoped lang="scss">
    @import "var";
    .g-menu-item{
    padding:8px 16px;
    &.selected{
        position: relative;
        &::after{
            content: '';
            position: absolute;
            left: 0;
            bottom:0;
            border-bottom: 2px solid $blue;
            width: 100%;
        }
    }
}
    .g-sub-menu .g-menu-item{

        &.selected{
            color: #000;
        }
        &::after{
            display: none;
        }
    }
</style>