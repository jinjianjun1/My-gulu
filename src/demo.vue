<template>
 <div>
     <g-pager :current-page.sync="currentPage" :total-page="10" ></g-pager>
 </div>
</template>

<script>
    import GPager from './pager'
    export default {
        name: 'demo',
        components:{GPager},
        data(){
            return{
                currentPage: 1
            }
        }

    }
</script>

<style scoped>
    *{margin: 0;padding:0;box-sizing: border-box}

</style>
