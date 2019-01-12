<template>
  <div style="padding-top: 16px;">
    <h2>设置关闭按钮</h2>
    <p>
      <strong>预览</strong>
    </p>

    <div>
      <j-button @click="onClickButton " >上方弹出</j-button>
    </div>

    <p>
      <strong>代码</strong>
    </p>
    <pre><code>{{content}}</code></pre>
  </div>
</template>
<style>
  .gulu-toast {
    z-index: 30 !important;
  }
</style>
<style scoped>
  * {
    box-sizing: border-box;
  }

</style>
<script>
  import plugin from '../../../src/plugin'
  import JButton from '../../../src/button/button'
  import Vue from 'vue'

  Vue.use(plugin)

  export default {
    components: {JButton},
    data () {
      return {
        content: `
          <style>
            .gulu-toast {
              z-index: 30;
            }
          </style>

          <div>
            <j-button @click="onClickButton">上方弹出</j-button>
          </div>

          methods: {
            onClickButton () {
              this.$toast('今天你很漂亮？', {
                closeButton: {
                  text: '哈哈哈',
                  callback: () => {
                    console.log('她很高兴')
                  }
                }
              })
            }
          },
      `.replace(/^ {8}/gm, '').trim()
      }
    },
    methods: {
      onClickButton () {
        this.$toast('今天你很漂亮', {
          closeButton: {
            text: '哈哈哈',
            callback: () => {
              console.log('她很高兴')
            }
          }
        })
      }
    },
  }
</script>