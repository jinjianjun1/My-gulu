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
        data(){
            return{
                selected:false
            }
        },
        props:{
            name:{
                type:String,
                required:true
            },
        },
        methods:{
            onClick(){
                this.$emit('add:selected',this.name)
            }
        },
        mounted() {
        }
    }
</script>

<style scoped lang="scss">
    .g-menu-item{

    padding:8px 16px;
    border: 1px solid black;
    &.selected{
        background: #ddd;
    }
}
</style>