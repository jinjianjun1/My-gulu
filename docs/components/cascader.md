---
title:Cascader
---
# Cascader
<ClientOnly>
<cascader-demo></cascader-demo>
</ClientOnly>


### data格式
```
[
    {name:"海军",children:[ {name:'赤犬', children:[{name:'中将1'}, {name:'中将2'}]}, {name:'黄猿'},J {name:'青雉'} ]},
    {name:"海贼",children:[{name:'白胡子'},{name:'红发'},{name:'BigMom'},{name:'凯多'}]},
    {name:"革命军",children:[{name:'龙'},{name:'萨博'},{name:'人妖王',children:[{name:'人妖1'},{name:'人妖2'}]}]}
]
```

### 接受的参数
|接受参数|参数类型|说明|
| ------ | ------ | ------ |
|source|Array|数据源|
|selected|Array|当前选中的数据 value 值的集合，按层级次序排序，用 .sync 绑定	|









