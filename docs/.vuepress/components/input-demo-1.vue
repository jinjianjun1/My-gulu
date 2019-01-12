<template>
    <div style="padding-top: 16px;">
        <h2>简单用法</h2>
        <p>
            <strong>预览</strong>
        </p>
        <div>
            <j-input value="normal"></j-input>
            <j-input value="disabled" disabled></j-input>
            <j-input value="readonly" readonly></j-input>

        </div>

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
<j-input value="readonly" readonly></j-input>
      `.replace(/^ {8}/gm, '').trim()
            }
        }
    }
</script>