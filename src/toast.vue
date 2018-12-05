<template>
    <div class="toast">
        <slot></slot>
    </div>
</template>

<script>

    export default {
        name:'GuluToast',

    }
</script>

<style scoped lang="scss">
$font-size:14px;
$background:rgba(0,0,0,0.75);
$height:40px;
.toast{
    color: #fff; ;position: fixed;top: 0;left: 50%;transform: translateX(-50%);
    font-size: $font-size;line-height: 1.8;height: $height;display: flex;align-items: center;
    background: $background ;
    border-radius: 4px;
    box-shadow: 0 0 3px 0 rgba(0,0,0,0.5);
    padding: 0 16px;
}
</style>