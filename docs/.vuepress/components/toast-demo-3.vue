<template>
  <div style="padding-top: 16px;">
    <h2>支持 HTML</h2>
    <p>
      <strong>预览</strong>
    </p>

    <div>
      <j-button @click="onClickButton">上方弹出</j-button>
    </div>

    <p>
      <strong>代码</strong>
    </p>
    <pre><code>{{content}}</code></pre>
  </div>
</template>
<style scoped>
  * {box-sizing: border-box;padding: 0;margin: 0;}


</style>
<script>
  import plugin from '../../../src/plugin'
  import JButton from '../../../src/button/button'
  import Vue from 'vue'

  Vue.use(plugin);

  export default {
    components: {JButton},
    data () {
      return {
        content: `
          <div>
            <j-button @click="onClickButton">上方弹出</j-button>
          </div>

    methods: {
        onClickButton () {
        this.$toast('<strong style="color:red;">紅色警告</strong>', {
          enableHtml: true
        })
      }
          },
      `.replace(/^ {8}/gm, '').trim()
      }
    },
    methods: {
      onClickButton () {
        this.$toast('<strong style="color:red;">紅色警告</strong>', {
          enableHtml: true
        })
      }
    },
  }
</script>