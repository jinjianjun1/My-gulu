<template>
    <div class="cascader-item" :style="{height:height}">
        <div class="left">
            <div class="label" v-for="item in items" @click="onClickLabel(item)">
                <span class="name"> {{item.name}}</span>
                <span v-if="rightIconVisible(item)"> <g-icon class="icon" name="right"></g-icon> </span>
            </div>
        </div>
        <div class="right" v-if="rightItems">
            <cascader-item
                    :selected="selected" @update:selected="onUpdateSelected" :load-data="loadData"
                    :level="level+1" :items="rightItems" :height="height"></cascader-item>
        </div>

    </div>
</template>

<script>
    import Icon from './icon'

    export default {
        name: "cascaderItem",
        components:{
            'g-icon':Icon
        },

        computed:{
            rightItems(){
                if (this.selected[this.level]) {
                    let selected = this.items.filter(item => item.name === this.selected[this.level].name);
                    if (selected && selected[0].children && selected[0].children.length > 0) {
                        return selected[0].children;

                    }
                }
                }

        },
        mounted(){
            this.$nextTick(

            )
        },
        props:{
            items:{type:Array},
            height:{type:String},
            selected:{type:Array, default:()=>[]},
            level:{type:Number, default:0},
            loadData:{type:Function}
        },
        methods:{
            onClickLabel(item){
                let copy= JSON.parse(JSON.stringify(this.selected));
                copy[this.level]=item;
                copy.splice(this.level+1);
                this.$emit('update:selected',copy);
            },
            onUpdateSelected(newSelected){
                this.$emit('update:selected',newSelected)
            },
            rightIconVisible(item){
                return this.loadData?!item.isLeaf:item.children;
            }
        },


    };
</script>

<style scoped lang="scss">
    @import "var";
.cascader-item{
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    .left{
        height: 100%;
        padding: .3em 0;
        overflow: auto;
        .label{
            padding: .3em .5em;
            display: flex;
            align-items: center;
            > .name{
                margin-right: 1em;
            }
            &:hover{
                background: $gray;
            }
            .icon{
                margin-left: auto;
                transform: scale(.5);
            }
        }
    }
    .right{
        height: 100%;
        border-left: 1px solid $border-color-light;
    }
}
</style>