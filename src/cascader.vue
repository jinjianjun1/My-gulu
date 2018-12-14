<template>
    <div class="cascader" ref="cascader" v-click-out-side="close">
        <div class="trigger" @click="toggle">
            {{result || '&nbsp'}}
        </div>
        <div class="popover-wrapper"  v-if="popoverVisible">
            <cascader-item  :selected="selected" :items="source" :load-data="loadData"
                            :loading-item="loadingItem"
                            :height="height" @update:selected="onUpdateSelected">

            </cascader-item>
        </div>
    </div>
</template>

<script>
    import cascaderItem from './cascader-item'
    import ClickOutSide from './click-outside'
    export default {
        name: "GuluCascader",
        directives:{
            ClickOutSide
        },
        props:{
            source:{
                type:Array
            },
            height:{
                type:String
            },
            selected:{
                type:Array,
                default:()=>[]
            },
            loadData: {
                type: Function
            }
        },
        data(){
            return{
                popoverVisible:false,
                loadingItem:{}
            }
        },
        methods:{
            // onClickDocument(e){
            //     let {cascader}=this.$refs;
            //     let {target}=e;
            //     if (cascader===target ||cascader.contains(target)){return}
            //     this.close()
            // },
            open(){
                this.popoverVisible=true;
                // this.$nextTick(()=>{
                //     document.addEventListener('click',this.onClickDocument)
                // })
            },
            close(){
                this.popoverVisible=false;
                // document.removeEventListener('click',this.onClickDocument)

            },
            toggle(){
               if (this.popoverVisible){
                   this.close()
               }  else {
                   this.open()
               }
            },
            onUpdateSelected(newSelected){
                this.$emit('update:selected',newSelected);
                let lastItem = newSelected[newSelected.length - 1];
                let simple = (children, id) => {
                    return children.filter(item => item.id === id)[0]
                };
                let complex = (children, id) => {
                    let noChildren = [];
                    let hasChildren = [];
                    children.forEach(item => {
                        if (item.children) {
                            hasChildren.push(item)
                        } else {
                            noChildren.push(item)
                        }
                    });
                    let found = simple(noChildren, id);
                    if (found) {
                        return found
                    } else {
                        found=simple(hasChildren,id);
                        if (found){return found}
                        else {
                           for (let i=0;i<hasChildren.length;i++){
                               found =complex(hasChildren[i].children,id);
                               if (found){
                                   return found
                               }
                           }
                           return undefined
                        }
                    }
                };
                let updateSource = (result) => {
                    this.loadingItem = {};
                    let copy = JSON.parse(JSON.stringify(this.source));
                    let toUpdate=complex(copy,lastItem.id);
                    toUpdate.children=result;
                    this.$emit('update:source',copy)
                };
                if (!lastItem.isLeaf && this.loadData) {
                    this.loadData && this.loadData(lastItem, updateSource); //掉回调的时候传一个回调，这个函数理论上会被调用
                    this.loadingItem = lastItem
                }
            },

        },
        components:{
            cascaderItem
        },
        computed:{
            result(){
                return this.selected.map(item=>item.name).join('/')
            }
        }
    }
</script>

<style scoped lang="scss">
@import "var";
.cascader{
    position: relative;
    display: inline-block;
    .trigger{
        height: $input-height;
        display: inline-flex;
        align-items: center;
        padding: 0 1em;
        min-width: 10em;
        border: 1px solid $border-color;
        border-radius: $button-radius;
    }
    .popover-wrapper{
        z-index: 1;
        background: #fff;
        position: absolute;
        top: 100%;
        left: 0;
        margin-top: 6px;
        @extend .box-shadow
    }
}
</style>