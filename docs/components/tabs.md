---
title:Tabs
---
# Tabs


<ClientOnly>
<tabs-demo-1></tabs-demo-1>
</ClientOnly>

```
        <j-tabs selected="America" >
            <j-tabs-head>
                <j-tabs-item name="America">美剧</j-tabs-item>
                <j-tabs-item name="Japan">日剧</j-tabs-item>
                <j-tabs-item :disabled="true" name="Bangzi">韩剧</j-tabs-item>
            </j-tabs-head>
            <j-tabs-body>
                <j-tabs-pane name="America">权利的游戏</j-tabs-pane>
                <j-tabs-pane name="Japan">我是大哥大</j-tabs-pane>
                <j-tabs-pane name="Bangzi">xxx</j-tabs-pane>
            </j-tabs-body>
        </j-tabs>
```
# 接受的参数
|接受参数|参数类型|参数|
| ------ | ------ | ------ |
|selected|String||
|closeButton|Object|{text:'按钮名称',callback(){点击执行的函数}}|
|name|String||
