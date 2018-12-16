<template>
        <div class="g-slides">
            <div class="g-slides-window">
                <div class="g-slides-wrapper">
                    <slot></slot>
                </div>
            </div>
        </div>
</template>

<script>
    export default {
        name: "slides",
        props:{
            selected:{
                type:String
            },
            autoPlay:{
                type: Boolean,
                default:true
            }
        },
        mounted() {
           this.updateChildren();
            this.playAutomatically()
        },
        updated() {
            this.updateChildren()
        },
        methods:{
            playAutomatically(){
                const names=this.$children.map(vm=>vm.name);
                let index=names.indexOf(this.getSelected());
                let run=()=>{
                    if (index===names.length){index=0}
                    this.$emit('update:selected',names[index+1]);
                    index++ ;
                    setTimeout(run,3000)
                };
                setTimeout(run,3000)
            },
            getSelected(){
                let first = this.$children[0];
                return  this.selected || first.name;
            },
            updateChildren(){
                let selected= this.getSelected();
                this.$children.forEach(vm=>{
                    vm.selected=selected
                })
            }
        }
    }
</script>

<style scoped lang="scss">

    .g-slides {
        display: inline-block;
        border: 1px solid red;
        &-windows {
        }
        &-wrapper{
            position: relative;
        }
    }
</style>