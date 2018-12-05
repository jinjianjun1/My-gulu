<template>
    <div class="toast" ref="wrapper" :class="toastClasses">
        <div class="message">
            <slot v-if="!enableHtml"></slot>
            <div v-else v-html="$slots.default[0]"></div>
        </div>
        <div class="line" ref="line"></div>
        <span class="close" @click="onclickClose" v-if="closeButton">{{closeButton.text}}</span>
    </div>
</template>

<script>

    export default {
        name:'GuluToast',
        props: {
            autoClose: {
                type: Boolean,
                default: true
            },
            timeDelay: {
                type: Number,
                default: 100
            },
            closeButton: {
                type: Object,
                default() {
                    return {
                        text: '关闭', undefined
                    }
                }
            },
            enableHtml: {
                type: Boolean,
                default: false
            },
            position:{
                type:String,
                default:'top',
                validator(value){
                    return ['bottom','middle','top'].indexOf(value)>-1
                }
            }
        },
        mounted() {
            this.updateStyle();
            this.execAutoClose();
        },
    computed:{
        toastClasses(){
            return {
                [`position-${this.position}`]:true
            }
        }
    },
        methods: {
            updateStyle() {
                this.$nextTick(() => {
                    this.$refs.line.style.height = `${this.$refs.wrapper.getBoundingClientRect().height}px`;
                    console.log(this.$refs.line.style.hight)
                });
            },
            execAutoClose() {
                if (this.autoClose) {
                    setTimeout(() => {
                        this.close()
                    }, this.timeDelay * 1000)
                }
            },
            close() {
                this.$el.remove();
                this.$destroy()
            },

            onclickClose() {
                this.close();
                if (this.closeButton && typeof this.closeButton.callback === 'function') {
                    this.closeButton.callback(this)
                }

            }
        }
    }
</script>

<style scoped lang="scss">
$font-size:14px;
$background:rgba(0,0,0,0.75);
$height:40px;
.toast{
    color: #fff; ;position: fixed;
    font-size: $font-size;
    line-height: 1.8;
    min-height: $height;
    display: flex;
    align-items: center;
    background: $background ;
    border-radius: 4px;
    box-shadow: 0 0 3px 0 rgba(0,0,0,0.5);
    padding: 0 16px;
    left: 50%;
    .message{
        padding:8px 0;
    }
    .close {
        padding-left: 16px;
        flex-shrink: 0
    }

    .line {
        height: 100%;
        border-left: 1px solid #666;
        margin-left: 16px;
    }
    &.position-top{
        top: 0;transform: translateX(-50%);
    }
    &.position-bottom{
        bottom:0;
        transform: translateX(-50%);
    }
    &.position-middle{
        top: 50%;
        transform: translate(-50%,-50%);
    }
}

</style>