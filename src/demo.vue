<template>
    <div>
        <p>{{ selected && selected[0] &&selected[0].name || '空' }}</p>
        <p>{{ selected && selected[1] &&selected[1].name || '空' }}</p>
        <p>{{ selected && selected[2] &&selected[2].name || '空' }}</p>
        <g-cascader :source.sync="source" height="200px" :selected.sync="selected"
                     :load-data="loadData">
        </g-cascader>
        {{source}}
    </div>
</template>

<script>
    import db from './db'

    function ajax(parentId=0){
        return new Promise((resolve, reject) =>{
            setTimeout(()=>{
                let result= db.filter(item=>item.parent_id===parentId);
                result.forEach(node=>{
                  if( db.filter(item=>item.parent_id===node.id).length>0){
                      node.isLeaf=false
                  }else{
                      node.isLeaf=true
                  }
                });
                resolve(result)
            },300);
        } )
    }

    import Button from './button'
    import Cascader from './cascader'
    export default {
        name:'demo',
        components:{
            'g-button':Button,
            'g-cascader':Cascader
        },
        created(){
            ajax(0).then(result=>{
                this.source=result
            });

        },
        methods:{
            // pickNext(){
            //     ajax(this.selected[0].id).then(result=>{
            //         let lastLevelSelected=this.source.filter(item=>item.id===this.selected[0].id)[0]; //filter返回数组
            //         this.$set(lastLevelSelected,'children',result)
            //     })
            // },
            loadData(item,updateSource){
                let {id,parent_id}=item;
                ajax(id).then(result=>{
                    updateSource(result)
                })
            }
        },
        data(){
            return{
                selected:[],
                source:[]
            }
        }
    }
</script>

<style>
    *{margin: 0;padding:0;box-sizing: border-box}
    :root{;--font-size:14px;}
    body{
        font-size: var(--font-size);
    }
</style>
