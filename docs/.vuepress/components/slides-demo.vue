<template>
    <div class="demo-wrapper">
        <j-slides :selected.sync="selected" autoPlay :autoPlayDelay="2000" >
        <j-slides-item name="1">
            <div class="box1">1</div>
        </j-slides-item>
        <j-slides-item name="2">
            <div class="box2">2</div>
        </j-slides-item>
        <j-slides-item name="3">
            <div class="box3">3</div>
        </j-slides-item>
    </j-slides>
    </div>
</template>

<script>
    import JSlides from '../../../src/slides/slides.vue'
    import JSlidesItem from '../../../src/slides/slides-item.vue'
    
    export default {
        components:{JSlidesItem,JSlides},
        data(){
            return{
                selected:undefined
            }
        }
    }
    
</script>

<style scoped>
    .box1{
        width: 100% ;
        height: 400px;  
        background: #ddd;
        display: inline-block;
    }
    .box2{
        width: 100% ;
        height: 400px;  
        background: lightblue;
        display: inline-block;
    }
    .box3{
        width: 100% ;
        height: 400px;  
        background: lightcoral;
        display: inline-block;
    }
</style>   