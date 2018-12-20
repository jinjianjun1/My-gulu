<template>
    <div class="g-menu-item" :selected="selected" :class="{selected,vertical}" @click="onClick">
        <div>
        <slot></slot>
        </div>
    </div>
</template>
<script>
    export default {
        name: "GuluMenuItem",
        inject:['root','vertical'],
        data(){
            return{selected:false}},
        props:{
            name:{type:String, required:true},
        },
        methods:{
            onClick(){
                this.root.namePath=[];
                this.$parent.updateNamePath&&this.$parent.updateNamePath();
                this.$emit('update:selected',this.name);
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
        position: relative;
        &:not(.vertical){
            &.selected{
                &::after{content: '';position: absolute;left: 0;bottom:0;border-bottom: 2px solid $blue;width: 100%;}
            }
        }
        &.vertical{
            &.selected{
                color: $blue;
            }
        }
    }
    a{
        color:inherit;text-decoration:none;
    }
    .g-sub-menu .g-menu-item:not(.vertical){
        &.selected{
            color: $color;
            background: $gray;
        }
        &::after{
            display: none;
        }
    }
</style>