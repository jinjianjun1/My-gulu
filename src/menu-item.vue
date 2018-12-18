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
        },
        created() {
            this.root.addItem(this)
        }
    }
</script>

<style scoped lang="scss">
    .g-menu-item{

    padding:8px 16px;
    &.selected{
        background: #ddd;
    }
}
</style>