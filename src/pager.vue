<template>
    <div class="gulu-pager">
        <span v-for="page in pages">
            {{page}}
        </span>
    </div>
</template>

<script>
    export default {
        name: "GuluPager",
        data(){
            let pages=[1,this.currentPage,this.currentPage+1,this.totalPage,this.currentPage-1,this.currentPage-2,this.currentPage+2]
            return{
                pages:this.unique(pages.sort((a,b)=>a-b))
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
                })
                return Object.keys(obj).map((number)=>parseInt(number,10))
            }
        }
    }
</script>

<style scoped lang="scss">

</style>