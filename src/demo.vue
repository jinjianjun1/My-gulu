<template>
 <div>
     <g-pager :current-page="20" :total-page="20"></g-pager>
 </div>
</template>

<script>
    import GPager from './pager'
    export default {
        name: 'demo',
        components:{GPager},

    }
</script>

<style scoped>
    *{margin: 0;padding:0;box-sizing: border-box}

</style>
