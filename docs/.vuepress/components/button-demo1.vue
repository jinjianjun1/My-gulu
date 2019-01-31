<template>
<div>
    <h2>组合按钮</h2>
    <g-button-group>
        <g-button icon="left" >上一页</g-button>
        <g-button  >1</g-button>
        <g-button icon="right" iconPosition="right">下一页</g-button>
    </g-button-group>

    <pre><code>{{content}}</code></pre>
    <p>接受参数</p>
    <ol>
        <li>icon</li>
        <li>iconPosition :right/left</li>
    </ol>
</div>

</template>

<script>
    import Button from '../../../src/button/button'
    import ButtonGroup from '../../../src/button/button-group'

    export default {
        name: "button-demo1",
        components:{
           'g-button': Button,
            'g-button-group':ButtonGroup
        },
        data(){
            return{
                content:`<g-button-group>
<g-button icon="left" ></g-button>
<g-button  >1</g-button>
<g-button icon="right" iconPosition="right">下一页</g-button>
</g-button-group>`.replace(/^ {8}/gm, '').trim()
            }
        }
    }
</script>

<style scoped lang="scss">

</style>