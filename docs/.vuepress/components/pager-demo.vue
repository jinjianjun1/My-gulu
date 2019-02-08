<template>
    <div>
        <j-pager :currentPage.sync="currentPage" :totalPage="10" ></j-pager>
    </div>
</template>

<script>
    import  JPager from '../../../src/pager'
    export default {
        name: "pager-demo",
        components:{JPager},
        data(){
            return{
                currentPage:1,

            }
        }
    }
</script>

<style scoped lang="scss">

</style>