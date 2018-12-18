<template>
    <div style="margin-top: 50px;">
        <g-button>默认样式</g-button> <g-button icon="settings">设置</g-button>
        <g-button disabled>disabled</g-button>
        <g-button icon="delate" iconPosition="right">删除</g-button>
        <g-button loading>loading</g-button>
        <hr>
        <h3>使用方法</h3>
        <pre><code>{{content}}</code></pre>
    </div>
</template>

<script>
    import Button from '../../../src/button/button'
    export default {
        name: "button-demo",
        components:{
            'g-button':Button
        },
        data(){
            return{
                content:`<g-button>默认样式</g-button> <g-button icon="settings">设置</g-button>
        <g-button disabled>disabled</g-button>
        <g-button icon="delate" iconPosition="right">delate</g-button>
        <g-button loading>loading</g-button>`.replace(/\t+| +/g,'').trim()
            }
        }
    }
</script>

<style scoped lang="scss">

</style>