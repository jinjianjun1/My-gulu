<template>
    <div class="tabs-head">
        <slot></slot>
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

        }
    }
</script>

<style scoped>

</style>