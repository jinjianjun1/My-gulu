<template>
    <div class="j-sticky-wrapper" ref="wrapper" :style="{height}">
        <div class="j-sticky" :class="classes" :style="{left,width,top}">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: "sticky",
        props:{
            distance:{
                type:Number,
                default:0
            }
        },
        data() {
            return {
                sticky: false,
                left:undefined,
                width:undefined,
                height:undefined,
                top:undefined
            }
         },
        mounted(){
            this.windowEvent=this._windowEvent.bind(this);
         window.addEventListener('scroll',this.windowEvent )
        },
        beforeDestroy(){
            window.removeEventListener('scroll',this.windowEvent)
        },
        methods: {
            getTop() {
                let {top} = this.$refs.wrapper.getBoundingClientRect();
                console.log(top);
                return {top:top + window.scrollY}
            },
            _windowEvent() {
                let {top} = this.getTop();
                console.log(top,1);
                if (window.scrollY > top - this.distance) {
                    let {height, width, left} = this.$refs.wrapper.getBoundingClientRect();
                    this.width = width + 'px';
                    this.left = left + 'px';
                    this.height = height + 'px';
                    this.top =  this.distance + 'px';
                    this.sticky = true;
                } else {
                    this.width = undefined;
                    this.left = undefined;
                    this.height = undefined;
                    this.top = undefined;
                    this.sticky = false;


                }
            }


    },
        computed: {
            classes() {
                return {
                    sticky: this.sticky
                }
            }
        }
    }
</script>

<style scoped lang="scss">
    .j-sticky.sticky{
        position: fixed;
    }

</style>