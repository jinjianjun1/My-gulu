<template>
    <div style="padding-top: 16px;">
        <h2>简单用法</h2>
        <p>
            <strong>预览</strong>
        </p>
        <div>
            <j-input class="item" value="normal"></j-input>
            <j-input class="item" value="disabled" disabled></j-input>
            <j-input class="item" value="readonly" readonly></j-input>
            <j-input class="item" error="密码不能小于6位数"></j-input>

        </div>
        <h3>接受参数</h3>
        <ol>
            <li>disabled</li>
            <li>readonly:Boolean</li>
            <li>error:string</li>
        </ol>
        <p>
            <strong>代码</strong>
        </p>
        <pre><code>{{content}}</code></pre>

    </div>
</template>
<script>
    import JInput from '../../../src/input'

    export default {
        components: {JInput},
        data () {
            return {
                selected: '1',
                content: `<j-input value="normal"></j-input>
<j-input value="disabled" disabled></j-input>
<j-input value="readonly" readonly></j-input><j-input  error="密码不能小于6位数"></j-input>
      `.replace(/^ {8}/gm, '').trim()
            }
        }
    }
</script>
<style scoped>
    .item{
        margin: 20px;
    }
</style>