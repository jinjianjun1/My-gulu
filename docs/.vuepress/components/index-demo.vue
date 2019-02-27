<template>
    <div class="j-index">
        <img :src="$withBase('/logo.jpg')" alt="logo">
<div class="j-top">
    <h1><span>j</span>-vue-ui</h1>

    <p>一款基于 Vue2.5 的 UI pc端组件库</p>
</div>
    </div>
</template>

<script>
    export default {
    }
</script>

<style scoped  lang="scss">
    *{margin: 0;padding: 0;}
.j-index{
    color: #fff;
    &>img{
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: -1;
    }
    .j-top{
        float: right;
        display: flex;
        flex-direction: column;
        margin-top: 15vh   ;
        text-align: right;
        font-size: 30px;
        flex-shrink: 1;
        h1{
            >{
                span{
                    color: red;}
            }
            font-size: 60px;
            color: #ffffff;font-family: "Georgia";
            margin-bottom: .5em;
        }
    }

}
    
</style>