<template>
    <div class="tabs-pane" :class="classes">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "GuluTabsPane"
    }
</script>

<style scoped>

</style>