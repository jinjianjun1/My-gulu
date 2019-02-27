---
title:快速上手
---
# 快速上手
请参考 [安装](../install/) 章节

# 引入
```
import {JButton} from 'j-vue-ui'//每个对应的组件名为J+'组件名首字母大写'
import 'j-vue-ui/dist/j-vue-ui.css'//引入css

```
```
   { box-sizing: border-box; }
   //在该盒模型写的轮子，其他盒模型没试过，可能会出现Bug
```
```
new Vue({
  el: '#app',
  components: {
    JButton
  }
})
```