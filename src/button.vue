<template>

    <button class="g-button">
        <svg v-if="icon" class="icon">
            <use :xlink:href=`#i-${icon}`></use>
        </svg>
        <slot></slot>
    </button>
</template>

<script>
    export default {
        name: "Button",
        props:['icon','iconPosition']
    }
</script>

<style  lang="scss">
    .g-button {
        font-size: var(--font-size);
        height: var(--button-height);
        padding: 0 1em;
        border-radius: var(--border-radius);
        border: 1px solid var(--border-color);
        background: var(--button-bg);
            &:hover{
                border-color: var(--border-color-hover)
            }
            &:active{
            background-color: var(--button-active-bg)
            }
            &:focus{
            outline: none
            }
    }

</style>