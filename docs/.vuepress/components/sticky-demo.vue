<template>
    <div class="sticky-wrapper">
        <j-sticky :distance="100" >
            <div class="box" >我是要sticky的内容,请向下滑动</div>
        </j-sticky>
        <pre><code>{{content}}</code></pre>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
    </div>
</template>

<script>
    import  JSticky from '../../../src/sticky'
    export default {
        name: "sticky-demo",
        components:{JSticky},
        data(){
            return{
                content:`<j-sticky :distance="100" >
            <div class="box" >我是要sticky的内容</div>
        </j-sticky>
       `.replace(/^ {8}/gm, '').trim()
            }
        }
    }
</script>

<style scoped lang="scss">
.sticky-wrapper{
    .box{
        background: lightcoral;
        color: #fff;
        display: flex;
        justify-content: center;
        z-index: 1000000000;
    }
}
</style>