---
title:Slides
---
# Slides

<ClientOnly>
<slides-demo></slides-demo>
</ClientOnly>



### 支持移动端触摸移动轮播

请在手机或开发者工具的手机预览模式中使用


# 接受的参数
|接受参数|参数类型|说明|
| ------ | ------ | ------ |
|selected|String|加语法糖.sync可以监听selected的变化，selected的值可以是undefined或item接受的名字|
|autoPlay|Boolean|起自动轮播的功能|
|autoPlayDelay|Number|自动轮播切换的时间|
|name|String|必须给item传入名字|














```$xslt
 <j-slides :selected.sync="selected" auto-play >
        <j-slides-item name="1">
            <div class="box">1</div>
        </j-slides-item>
        <j-slides-item name="2">
            <div class="box">2</div>
        </j-slides-item>
        <j-slides-item name="3">
            <div class="box">3</div>
        </j-slides-item>
    </j-slides>
```
