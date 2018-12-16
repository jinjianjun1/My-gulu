<template>
    <transition name="slide">
    <div class="g-slides-item" v-if="visible">
        <slot></slot>
    </div>
    </transition>
</template>

<script>
    export default {
        name: "slides-item",
        props:{
            name:String,
            required:true
        },
        computed:{
            visible(){
                return this.selected===this.name
            }
        },
        data(){
            return{
                selected:undefined
            }
        },
        updated(){

        },
        mounted() {
            console.log(this.visible);
        }
    }
</script>

<style scoped lang="scss">
.g-slides-item{

}
.slide-leave-active{
    position: absolute;
    left: 0;
    top: 0;
}
.slide-enter-active,.slide-leave-active{
    transition: all 1s;
}
.slide-enter{
    transform: translateX(100%);
}
.slide-leave-to{
    transform: translateX(-100%);
}

</style>