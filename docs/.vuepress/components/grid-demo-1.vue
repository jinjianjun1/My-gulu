<template>
  <div style="padding-top: 8px;">
    <h2>24格网格</h2>
    <p>
      <strong>预览</strong>
    </p>
    <j-row class="demoRow">
      <j-col span="8">
        <div class="demoCol">8</div>
      </j-col>
      <j-col span="8">
        <div class="demoCol">8</div>
      </j-col>
      <j-col span="8">
        <div class="demoCol">8</div>
      </j-col>
    </j-row>
    <j-row class="demoRow">
      <j-col span="6">
        <div class="demoCol">6</div>
      </j-col>
      <j-col span="6">
        <div class="demoCol">6</div>
      </j-col>
      <j-col span="6">
        <div class="demoCol">6</div>
      </j-col>
      <j-col span="6">
        <div class="demoCol">6</div>
      </j-col>
    </j-row>
    <j-row class="demoRow">
      <j-col span="4">
        <div class="demoCol">4</div>
      </j-col>
      <j-col span="4">
        <div class="demoCol">4</div>
      </j-col>
      <j-col span="4">
        <div class="demoCol">4</div>
      </j-col>
      <j-col span="4">
        <div class="demoCol">4</div>
      </j-col>
      <j-col span="4">
        <div class="demoCol">4</div>
      </j-col>
      <j-col span="4">
        <div class="demoCol">4</div>
      </j-col>
    </j-row>

    <p>
      <strong>代码</strong>
    </p>
    <pre><code>{{content}}</code></pre>
  </div>
</template>
<style scoped>
  * {
    box-sizing: border-box;
  }
  .demoRow{
    margin: 10px 0;
  }
  .demoCol {
    height: 50px;
    border: 1px solid #ccc;
    background: lightcoral;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
<script>
  import JRow from '../../../src/grid/row'
  import JCol from '../../../src/grid/col'

  export default {
    components: {JRow, JCol},
    data () {
      return {
        content: `
           <!--用行j-row 包裹 用j-col 划分列-->


          <j-row class="demoRow">
            <j-col span="8">
              <div class="demoCol">8</div>
            </j-col>
            <j-col span="8">
              <div class="demoCol">8</div>
            </j-col>
            <j-col span="8">
              <div class="demoCol">8</div>
            </j-col>
          </j-row>

          <j-row class="demoRow">
            <j-col span="6">
              <div class="demoCol">6</div>
            </j-col>
            <j-col span="6">
              <div class="demoCol">6</div>
            </j-col>
            <j-col span="6">
              <div class="demoCol">6</div>
            </j-col>
            <j-col span="6">
              <div class="demoCol">6</div>
            </j-col>
          </j-row>

          <j-row class="demoRow">
            <j-col span="4">
              <div class="demoCol">4</div>
            </j-col>
            <j-col span="4">
              <div class="demoCol">4</div>
            </j-col>
            <j-col span="4">
              <div class="demoCol">4</div>
            </j-col>
            <j-col span="4">
              <div class="demoCol">4</div>
            </j-col>
            <j-col span="4">
              <div class="demoCol">4</div>
            </j-col>
            <j-col span="4">
              <div class="demoCol">4</div>
            </j-col>
          </j-row>

      `.replace(/^ {8}/gm, '').trim()
      }
    }
  }
</script>