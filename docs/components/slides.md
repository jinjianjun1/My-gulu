````$xslt
 <g-slides :selected.sync="selected" auto-play >
        <g-slides-item name="1">
            <div class="box">1</div>
        </g-slides-item>
        <g-slides-item name="2">
            <div class="box">2</div>
        </g-slides-item>
        <g-slides-item name="3">
            <div class="box">3</div>
        </g-slides-item>
    </g-slides>
```
```
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
```
