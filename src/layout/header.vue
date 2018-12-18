<template>
    <transition>
    <div class="header">
        <slot></slot>
    </div>
    </transition>
</template>

<script>
    export default {
        name: "GuluHeader"
    }
</script>

<style scoped lang="scss">
    .header{}

</style>