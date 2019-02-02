---
title: Toast
---

# Toast

# 用法
```
import JPlugin from 'j-vue-ui'
import JButton from 'j-vue-ui'
import Vue from 'vue'

Vue.use(JPlugin);
```
### this.$toast() 参数
#  接收参数

|接受参数|参数类型|参数|
| ------ | ------ | ------ |
|enableHtml|Boolean|true/false|
|closeButton|Object|{text:'按钮名称',callback(){点击执行的函数}}|
|autoClose|Boolean|true|
|autoCloseDelay|Number|3|
<ClientOnly>
  <toast-demo-1></toast-demo-1>
  <toast-demo-2></toast-demo-2>
  <toast-demo-3></toast-demo-3>
</ClientOnly>

