<template>
 <div>
     <div>
         <j-table :columns="columns" :data-source="dataSource">
         </j-table>

     </div>

     <g-pager :current-page.sync="currentPage" :total-page="10" ></g-pager>
 </div>
</template>

<script>
    import GPager from './pager'
    import JTable from './j-table'
    export default {
        name: 'demo',
        components:{GPager,JTable},
        data(){
            return{
                currentPage: 1,
                dataSource:[{id:1,name:'jason',score:101},{id:2,name:'frank',score:180}],
                columns:[{text:'姓名',filed:'name'},{text:'分数',filed:'score'}]
            }
        }

    }
</script>

<style scoped>
    *{margin: 0;padding:0;box-sizing: border-box}

</style>
