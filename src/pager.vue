<template>
    <div class="gulu-pager">
        <span  v-for="page in pages" class="gulu-pager-item" :class="{active:page===currentPage,separator:page==='...'}">
            {{page}}
        </span>
    </div>
</template>

<script>
    export default {
        name: "GuluPager",
        data(){
            let pages=this.unique([1,this.currentPage,
                this.currentPage+1,this.totalPage,
                this.currentPage-1,this.currentPage-2, this.currentPage+2]
                .filter(item=>item>0)
                .sort((a,b)=>a-b)).reduce((prev,current,index,array)=>{
                prev.push(current);
                 (array[index+1]!==undefined && array[index+1]-array[index]>1)&&prev.push('...');
                return prev
            },[])
            return{
                pages
            }
        },
        props: {
            totalPage: {
                type: Number,
                required: true
            },
            currentPage: {
                type: Number,
                required: true
            },
            hideIfOnePage: {
                type: Boolean,
                default: true
            }
        },
        methods:{
            unique(array){
                let obj={};
                array.map(number=>{
                    obj[number]=true
                });
                return Object.keys(obj).map((number)=>parseInt(number,10))
            }
        }
    }
</script>

<style scoped lang="scss">
    @import "var";
    .gulu-pager{
        &-item{
            border: 1px solid #e1e1e1;border-radius: $border-radius;padding: 0 4px;display: inline-flex;
            justify-content: center;align-items: center;min-width: 8px;height: 20px;margin: 0 4px;
            font-size: 12px;cursor: pointer;
            &.active,&:hover{
                border-color: $blue;
            }
            &.active{
                cursor: default;
            }
            &.separator{
                border: none;
            }
        }

    }
</style>