<template>
 <div>
     <div>
         {{selected}}

         <j-table :selected-items.sync="selected" :columns="columns" checkAble
                 :height="400"  :loading="loading"  bordered :order-by.sync="orderBy"
                  :data-source="dataSource" @update:orderBy="x" expend-field="description">
             <template slot-scope="item">
                 <button @click="edit(item.item)">编辑</button>
                 <button @click="view(item.item)">查看</button>
             </template>
         </j-table>
     </div>
     <div>
         <j-table  :select-items.sync="selected" :columns="columns" :striped="false" compact bordered :data-source="dataSource">
         </j-table>

     </div>
     <!--{{selected}}-->
        <!--<j-table2 :dataSource="dataSource" :columns="columns" :selected.sync="selected"></j-table2>-->
     <j-button loading>loading</j-button>
     <j-button @click="$toast('点击弹出提示')">上方弹出</j-button>
     <j-button @click="$toast('点击弹出提示', {position:'middle'})">中间弹出</j-button>
     <j-button @click="$toast('点击弹出提示', {position:'bottom'})">下方弹出</j-button>
     <j-button @click="onClickButton">上方弹出</j-button>

 </div>
</template>

<script>
    import Vue from 'vue'
    import JPager from './pager'
    import JTable from './j-table'
    import JButton from './button/button'
    import JLayout from './layout/layout'
    import JHeader from './layout/header'
    import JFooter from './layout/footer'
    import JContent from './layout/content'
    import JSidebar from './layout/sidebar'
    import plugin from './plugin'
    Vue.use(plugin);
    export default {
        name: 'demo',
        components:{plugin,JPager,JTable,JButton,JLayout,JHeader,JFooter,JContent,JSidebar},
        methods:{onClickButton () {
                this.$toast('你知道我在等你吗？', {
                    closeButton: {
                        text: '知道了',
                        callback: () => {
                            console.log('他说知道了')
                        }
                    }
                })
            },
            edit(item){alert(`编辑${item.id}`)},
            view(item){alert(`查看${item.id}`)},
            x(){
                this.loading = true;
                this.dataSource=this.dataSource.sort((a,b)=>a.score-b.score)
                setTimeout(()=>{
                    this.loading=false
                },2000)
            }
        },
        data(){
            return{
                currentPage: 1,
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

<style scoped>
    *{margin: 0;padding:0;box-sizing: border-box}
.xxx{
    height: 400px;
}
</style>
