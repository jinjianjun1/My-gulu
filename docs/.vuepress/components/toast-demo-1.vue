<template>
  <div style="padding-top: 16px;">
    <h2>this.$toast</h2>
    <p>
      <strong>预览</strong>
    </p>

    <div>
      <j-button @click="$toast('来自上方大佬的俯视')">上方弹出</j-button>
      <j-button @click="$toast('来自基友的一般视？', {position:'middle'})">中间弹出</j-button>
      <j-button @click="$toast('来自底部小白的仰视', {position:'bottom'})">下方弹出</j-button>
    </div>

    <p>
      <strong>代码</strong>
    </p>
    <pre><code>{{content}}</code></pre>
  </div>
</template>

<style scoped>
  * {
    box-sizing: border-box;
    margin: 0;padding: 0;
  }

</style>
<script>
  import JPlugin from '../../../src/plugin'
  import JButton from '../../../src/button/button'
  import Vue from 'vue'

  Vue.use(JPlugin);

  export default {
    components: {JButton},
    data () {
      return {content:`
          <j-button @click="$toast('来自大佬的俯视',{position:'top'}) ">上方弹出</j-button>
          <j-button @click="$toast('来自基友的一般视', {position:'middle'})">中间弹出</j-button>
          <j-button @click="$toast('来自小白的仰视', {position:'bottom'})">下方弹出</j-button>
      `.replace(/^ {8}/gm, '').trim()
      }
    }
  }
</script>