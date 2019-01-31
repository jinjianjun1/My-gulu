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
```
enableHtml:Boolean //传入是否为Html
closeButton:{text:'按钮名称',callback(){点击执行的函数}}
autoClose:Boolean,autoCloseDelay:3//是否自动关闭以及关闭时间
```
<ClientOnly>
  <toast-demo-1></toast-demo-1>
  <toast-demo-2></toast-demo-2>
  <toast-demo-3></toast-demo-3>
</ClientOnly>

