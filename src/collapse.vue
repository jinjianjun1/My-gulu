<template>
    <div class="collapse">
            <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "GuluCollapse",


    }
</script>

<style scoped lang="scss">
    $gray:#ddd;
    $border-radius:4px;
    .collapse{
        border: 1px solid $gray;
        border-radius: $border-radius;
        overflow: hidden;
    }
</style>