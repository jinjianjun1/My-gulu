<template>
    <div>
        <g-cascader :source.sync="source" height="200px" :selected.sync="selected"
                     :load-data="loadData">
        </g-cascader>
        <g-popover>
            <button>点我</button>
            <template slot="content">我是content</template>
        </g-popover>
    </div>
</template>

<script>
    import db from './db'
import Popover from './popover'
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
            'g-cascader':Cascader,
            'g-popover':Popover
        },
        created(){
            ajax(0).then(result=>{
                this.source=result
            });

        },
        methods:{
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
