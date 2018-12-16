<template>
    <div >
    <g-slides :selected.sync="selected" auto-play >
        <g-slides-item name="jason">
            <div class="box">1</div>
        </g-slides-item>
        <g-slides-item name="kklote">
            <div class="box">2</div>
        </g-slides-item>
        <g-slides-item name="sdsds">
            <div class="box">3</div>
        </g-slides-item>
    </g-slides>
    </div>
</template>

<script>
import GSlides from './slides'
import GSlidesItem from './slides-item'
    export default {
        name:'demo',
        components:{
            GSlides,
            GSlidesItem
        },
        data(){
            return{
                selected:undefined
            }
        },
        created() {

        }
    }
</script>

<style>
    *{margin: 0;padding:0;box-sizing: border-box}
    .box{
        border: 1px solid red;
        background: #dddddd;
        width: 200px;
        height: 200px;
    }
</style>
