<template>
    <svg  class="j-icon" @click="$emit('click',$event)">
        <use :xlink:href="`#i-${name}`"></use>
    </svg>
</template>
<script>
    import './svg'
    export default {
        name:'gulu-icon',
        props:['name']
    }
</script>
<style lang="scss" scoped>
    .j-icon {width: 1em;height: 1em;}
</style>