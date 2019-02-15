<template>
    <div style="margin-top: 50px;">
        <j-button>默认样式</j-button> <j-button icon="settings">设置</j-button>
        <j-button disabled>disabled</j-button>
        <j-button icon="delate" iconPosition="right">删除</j-button>
        <j-button loading>loading</j-button>
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
            'j-button':Button
        },
        data(){
            return{
                content:`<j-button>默认样式</j-button> <j-button icon="settings">设置</j-button>
        <j-button disabled>disabled</j-button>
        <j-button icon="delate" iconPosition="right">delate</j-button>
        <j-button loading>loading</j-button>`.replace(/\t+| +/g,'').trim()
            }
        }
    }
</script>

<style scoped lang="scss">

</style>