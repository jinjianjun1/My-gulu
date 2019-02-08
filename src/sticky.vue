<template>
    <div class="j-sticky-wrapper" ref="wrapper" :style="{height}">
        <div class="j-sticky" :class="classes" :style="{left,width}">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: "sticky",
        data() {
            return {
                sticky: false,
                left:undefined,
                width:undefined,
                height:undefined
            }
        },

        created() {

        },
        mounted(){
             this.windowEvent=() => {
                if (window.scrollY > top) {
                    this.sticky=true;
                    let {height,width,left} = this.$refs.wrapper.getBoundingClientRect();
                    this.width=width+'px';
                    this.left=left+'px';
                    this.height=height+'px'

                } else {
                    this.sticky=false
                }
            };
            let top =this.getTop();
            window.addEventListener('scroll',this.windowEvent )
        },
        beforeDestroy(){
            window.removeEventListener('scroll',this.x)
            console.log('hi');
        },
        updated(){
            console.log(this.sticky);
        },
        methods: {
            getTop() {
                let {top} = this.$refs.wrapper.getBoundingClientRect();
                return top + scrollY
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
        top: 0;
        left: 0;
        width: 100%;
    }

</style>