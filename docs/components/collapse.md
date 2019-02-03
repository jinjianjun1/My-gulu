---
title:Collapse
---
# Collapse


<ClientOnly>
<collapse-demo>
</collapse-demo>
</ClientOnly>


```
<j-collapse :selected="['1']" >
    <j-collapse-item title="新闻"  name="1">头条</j-collapse-item>
    <j-collapse-item title="广告"  name="2">998</j-collapse-item>
    <j-collapse-item title="八卦"  name="3">某某门</j-collapse-item>
</j-collapse>

<j-collapse :single="true" :selected="['1']" >
    <j-collapse-item title="新闻"  name="1">头条</j-collapse-item>
    <j-collapse-item title="广告"  name="2">998</j-collapse-item>
    <j-collapse-item title="八卦"  name="3">某某门</j-collapse-item>
</j-collapse>
```

### 接受的参数
|组件|接受参数|参数类型|参数|
| ------ | ------ | ------ | ------ |
|j-collapse|single|Boolean|default:false|
||selected|Array|item of name|
|j-collapse-item|title|String||
||name|String||
