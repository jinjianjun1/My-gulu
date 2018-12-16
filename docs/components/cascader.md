
```
  <g-cascader :source.sync="source" height="200px" :selected.sync="selected"
                     :load-data="loadData">
        </g-cascader>

```
```
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
```
```$xslt
 created(){
            ajax(0).then(result=>{
                this.source=result
            });
        }
 methods:{
           loadData(item,updateSource){
            let {id,parent_id}=item;
            ajax(id).then(result=>{
                updateSource(result)
            })
        }
    }
  data(){
          return{
              selected:[],
              source:[]
          }
      }
    
```