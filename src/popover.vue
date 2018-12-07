<template>
    <div class="popover" @click.stop="onClick">
        <div ref="contentWrapper" class="content-wrapper" v-if="this.visible">
            <slot name="content"></slot>
        </div>
        <span  ref="triggerWrapper">
            <slot></slot>
        </span>
    </div>
</template>

<script>
    export default {
        name: "GuluPopover",
        data(){
            return{visible:false}
        },
        methods:{
            positionContent() {
                document.body.appendChild(this.$refs.contentWrapper);
                let {left, width, height, top} = this.$refs.triggerWrapper.getBoundingClientRect();
                this.$refs.contentWrapper.style.left = left + window.scrollX + 'px';
                this.$refs.contentWrapper.style.top = top + window.scrollY + 'px';
            },
            listenToDocument() {
                let eventHandle = (e) => {
                    if (!this.$refs.contentWrapper.contains(e.target)) {
                        this.visible = false;
                        document.removeEventListener('click', eventHandle)
                    }
                };
                document.addEventListener('click', eventHandle)
            },
            onShow(){
                this.$nextTick(()=>{
                    this.positionContent();
                    this.listenToDocument()
                });
            },
            onClick(e) {
                if (this.$refs.triggerWrapper.contains(e.target)) this.visible = !this.visible;
                if (this.visible ===true){
                   this.onShow()
                }
            }
        }
    }
</script>

<style scoped lang="scss">
.popover{
    display: inline-block;
    vertical-align: top;
    position: relative;

}
.content-wrapper{
    position: absolute;
    border: 1px solid red;
    box-shadow: 0 0 3px rgba(0,0,0,.5);
    transform: translateY(-100%);
}
</style>