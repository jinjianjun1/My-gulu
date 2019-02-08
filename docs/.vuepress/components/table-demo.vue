<template>
    <div>
        <j-table  :select-items.sync="selected" :columns="columns" :striped="false" compact bordered :data-source="dataSource">
        </j-table>
    </div>
</template>

<script>
    import JTable from '../../../src/j-table'
    export default {
        name: "table-demo",
        components:{JTable},
        data(){
            return{
                loading:false,
                selected:[],
                orderBy:{name:true,score:'desc'},//true 为开启排序 但不表明是升序和降序
                dataSource: [
                    {id: 1, name: 'jason', score: 101,description:'111'},
                    {id: 2, name: 'frank', score: 180,description:'222'},
                    {id: 3, name: 'frank', score: 180},
                    {id: 4, name: 'frank', score: 180},
                    {id: 5, name: 'frank', score: 180},
                    {id: 6, name: 'frank', score: 180},
                    {id: 7, name: 'frank', score: 180},
                    {id: 8, name: 'jason', score: 101},
                    {id: 9, name: 'jason', score: 101},
                    {id: 10, name: 'jason', score: 101},
                    {id: 11, name: 'jason', score: 101},
                    {id: 12, name: 'frank', score: 180},
                    {id: 13, name: 'frank', score: 180},
                    {id: 14, name: 'frank', score: 180},
                    {id: 15, name: 'frank', score: 180},
                    {id: 16, name: 'frank', score: 180},
                    {id: 17, name: 'frank', score: 180},
                    {id: 18, name: 'frank', score: 180},
                    {id: 19, name: 'frank', score: 180},
                    {id: 20, name: 'frank', score: 180},
                ],
                columns:[{text:'姓名',field:'name',width:200},{text:'分数',field:'score'}]

            }
        }
    }
</script>

<style scoped lang="scss">

</style>