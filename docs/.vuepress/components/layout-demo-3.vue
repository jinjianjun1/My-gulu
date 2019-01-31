<template>
  <div style="padding-top: 16px;">
    <h2>布局</h2>
    <p>
      <strong>预览</strong>
    </p>

    <j-layout style="color: white; overflow:hidden; margin-bottom:50px;">
      <j-sidebar style=" background:#ddd; width:200px; color: black;">
        sidebar
      </j-sidebar>
      <j-layout>
        <j-header style="height: 50px; background:lightskyblue;">
          header
        </j-header>
        <j-content style="height: 100px; background:deepskyblue;">
          content
        </j-content>
        <j-footer style="height: 50px; background:lightskyblue;">
          footer
        </j-footer>
      </j-layout>
    </j-layout>
    <p>
      <strong>代码</strong>
    </p>
    <pre><code>{{content}}</code></pre>
  </div>
</template>
<style scoped>
  * {box-sizing: border-box;margin:0;padding:0;}

</style>
<script>
  import JLayout from '../../../src/layout/layout'
  import JHeader from '../../../src/layout/header'
  import JFooter from '../../../src/layout/footer'
  import JContent from '../../../src/layout/content'
  import JSidebar from '../../../src/layout/sidebar'

  export default {
    components: {JLayout, JHeader, JFooter, JContent, JSidebar},
    data () {
      return {
        content: `
          <j-layout style="color: white; overflow:hidden; margin-bottom:50px;">
            <j-sidebar style=" background:#ddd; width:200px; color: black;">
              sidebar
            </j-sidebar>
            <j-layout>
              <j-header style="height: 50px; background:lightskyblue;">
                header
              </j-header>
              <j-content style="height: 100px; background:deepskyblue;">
                content
              </j-content>
              <j-footer style="height: 50px; background:lightskyblue;">
                footer
              </j-footer>
            </j-layout>
          </j-layout>

      `.replace(/^ {8}/gm, '').trim()
      }
    }
  }
</script>