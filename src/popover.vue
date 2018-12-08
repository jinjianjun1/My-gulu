<template>
    <div class="popover" @click="onClick" ref="popover">
        <div ref="contentWrapper" class="content-wrapper" v-if="visible" :class="{[`position-${position}`]:true}">
            <slot name="content"></slot>
        </div>
        <span  ref="triggerWrapper" style="display: inline-block;">
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
        props:{
            position:{
                type:String,
                default:'top',
                validator(value){
                    return ['top','bottom','left','right'].indexOf(value)>=0
                }
            }
        },
        methods:{
            positionContent() {
                const {contentWrapper,triggerWrapper}=this.$refs;
                document.body.appendChild(contentWrapper);
                const {left, width, height, top,bottom} = triggerWrapper.getBoundingClientRect();
                const {height:height2}=contentWrapper.getBoundingClientRect();
                let positions={
                    top:{
                        top:top + window.scrollY,
                        left:left + window.scrollX
                    },
                    bottom:{
                        top:top +height+ window.scrollY,
                        left:left + window.scrollX
                    },
                    left:{
                        top:top+window.scrollY+(height-height2)/2,
                        left:left + window.scrollX
                    },
                    right:{
                        top:top+window.scrollY+(height-height2)/2,
                        left:left + window.scrollX +width
                    },
                };
                contentWrapper.style.left=positions[this.position].left+'px';
                contentWrapper.style.top=positions[this.position].top+'px'

            },
            onClickEvent(e) {
                if (this.$refs.popover&&
                    (this.$refs.popover===e.target ||this.$refs.popover.contains(e.target)
                    )) {
                    return;
                }else if(this.$refs.contentWrapper===e.target||this.$refs.contentWrapper.contains(e.target)){
                    return
                }
                this.close();
            },
            open(){
                this.visible=true;
                this.$nextTick(()=>{
                    this.positionContent();
                    document.addEventListener('click', this.onClickEvent)
                });
            },
            close(){
                this.visible=false;
                document.removeEventListener('click', this.onClickEvent);
                console.log('关闭')
            },
            onClick(e) {
                if (this.$refs.triggerWrapper.contains(e.target)) {
                    if (this.visible ===true){
                       this.close()
                } else {
                        this.open()
                    }
                }

            }
        }
    }
</script>

<style scoped lang="scss">
$border-color:#333;
$border-radius:4px;
.popover{
    display: inline-block;
    vertical-align: top;
    position: relative;

}
.content-wrapper{
    position: absolute;
    border: 1px solid $border-color;
    border-radius: $border-radius;
    filter:drop-shadow(0 1px 1px rgba(0,0,0,.5));
    background: white;
    padding: .5em 1em;
    &::before, &::after{
        content: '';display: block;border: 10px solid transparent;
        width: 0;height: 0;position: absolute;left: 10px;
        max-width: 20em;word-break: break-all;
    }
    &.position-top{
        transform: translateY(-100%);
        margin-top: -10px;
        &::before{ border-top-color: black;top: 100%;}
        &::after{border-top-color: white;top: calc(100% - 1px)}
    }
    &.position-bottom{margin-top: 10px;
        &::before{ border-bottom-color: black;bottom: 100%;}
        &::after{border-bottom-color: white;bottom: calc(100% - 1px)} }
    &.position-left{
        transform: translateX(-100%);
        margin-left: -10px;
        &::before,&::after{top: 50%;transform: translateY(-50%);}
        &::before{ border-left-color: black;left: 100%;}
        &::after{border-left-color: white;left: calc(100% - 1px);}
    }
    &.position-right{
        margin-left: 10px;
        &::before,&::after{
            transform: translateY(-50%);
            top: 50%;}
        &::before{
            border-right-color: black;
            right: 100%;}
        &::after{
            border-right-color: white;
            right : calc(100% - 1px)}
    }

}
</style>