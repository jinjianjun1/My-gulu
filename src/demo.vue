<template>
 <div>
     <div>
         {{selected}}

         <j-table  :selected-items.sync="selected" :columns="columns" bordered :data-source="dataSource">
         </j-table>
     </div>
     <!--<div>-->
         <!--<j-table  :select-items.sync="selected" :columns="columns" :striped="false" compact bordered :data-source="dataSource">-->
         <!--</j-table>-->
     <!--</div>-->
     <!--{{selected}}-->
        <!--<j-table2 :dataSource="dataSource" :columns="columns" :selected.sync="selected"></j-table2>-->
     <g-pager :current-page.sync="currentPage" :total-page="10" ></g-pager>
 </div>
</template>

<script>
    import GPager from './pager'
    import JTable from './j-table'

    export default {
        name: 'demo',
        components:{GPager,JTable},
        methods:{

        },
        data(){
            return{
                currentPage: 1,
                selected:[],
                dataSource: [
                    {id: 1, name: 'jason', score: 101},
                    {id: 2, name: 'frank', score: 180}, {id: 8, name: 'jason', score: 101},
                    {id: 3, name: 'frank', score: 180}, {id: 9, name: 'jason', score: 101},
                    {id: 4, name: 'frank', score: 180}, {id: 10, name: 'jason', score: 101},
                    {id: 5, name: 'frank', score: 180}, {id: 11, name: 'jason', score: 101},
                    {id: 6, name: 'frank', score: 180}, {id: 12, name: 'jason', score: 101},
                    {id: 7, name: 'frank', score: 180},
                ],
                columns:[{text:'姓名',filed:'name'},{text:'分数',filed:'score'}]
            }
        }

    }
</script>

<style scoped>
    *{margin: 0;padding:0;box-sizing: border-box}

</style>
