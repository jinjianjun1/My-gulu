<template>
    <div class="j-index">
        <img :src="$withBase('/logo.jpg')" alt="logo">
        <div class="j-top">
            <h1><span>j-</span>vue-ui</h1>

            <p>一款基于 Vue2.5 的 UI PC端组件库</p>
        </div>
        <div class="flower">
            <img :src="$withBase('/flower.jpg')" alt="">
        </div>
    </div>
</template>

<script>
    export default {
    }
</script>

<style scoped  lang="scss">
    *{margin: 0;padding: 0;}

    @keyframes spin {
        0%{transform: rotate(0deg)}
        100%{transform: rotate(360deg)}
    }
.j-index{
    margin-right: -15vh;
    color: #fff;
    position: relative;
    &>img{
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
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
                    color: #ffbd24;}
            }
            font-size: 60px;
            color: #ffffff;font-family: "Georgia";
            margin-bottom: .5em;
        }
    }
    .flower{
        img {
            width: 50px;
            height: 50px;
            animation: spin 2.5s infinite linear;
            position: absolute;
            top: 5vh;
            right: 0;
        }

    }

}
    @media (max-width: 768px) {
    .j-index{
        margin-right: 0;
    }
    .j-top{
        h1{ font-size: 28px}

    }
    }
    
</style>