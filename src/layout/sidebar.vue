<template>
<transition name="slide">
    <div class="sidebar" v-if="visible">
    <slot></slot>
    <button @click="visible=false">close</button>
    </div>
</transition>
</template>

<script>
export default {
    name:"GuluSiderBar",
    data(){
        return{
            visible:true
        }
    }
}
</script>

<style scoped lang="scss">
.sidebar{
    position: relative;
    >button{position: absolute;top: 0;right: 0;
    }
}
.slide-enter-active, .slide-leave-active{
    transition: all .5s;
}
.slide-enter, .slide-leave-to{
    margin-left: -200px;
}
</style>