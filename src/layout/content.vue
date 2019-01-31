<template>
    <div class="content">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name:'GuluContent'
}
</script>

<style scoped lang="scss">
    .content{
        flex-grow: 1;
        width: 100%;
    }

</style>