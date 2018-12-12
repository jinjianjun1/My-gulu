<template>
    <div>
        <g-cascader :source="source" height="200px" :selected.sync="selected">
        </g-cascader>
    </div>
</template>

<script>
    import db from './db'
    function ajax(parentId=0){
       return db.filter(item=>item.parent_id==parentId)
    }

    console.log(ajax());
    import Button from './button'
    import Cascader from './cascader'
    export default {
        name:'demo',
        components:{
            'g-button':Button,
            'g-cascader':Cascader
        },
        mounted(){
        },
        data(){
            return{
                selected:[],
                source:ajax()
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
