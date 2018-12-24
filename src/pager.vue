<template>
    <div class="gulu-pager" :class="{hide:hideIfOnePage===true && totalPage<=1}" >
        <span class="gulu-pager-nav prev" :class="{disabled:currentPage===1}" @click="onClickPage(currentPage-1)">
            <g-icon name="left"> </g-icon>
        </span>
        <template  v-for="page in pages" >
            <template v-if="page===currentPage">
                <span class="gulu-pager-item current">
                    {{page}}
                </span>
            </template>
            <template v-else-if="page==='...'">
                <g-icon name="more" class="gulu-pager-separator "></g-icon>
            </template>
            <template v-else>
                <span class="gulu-pager-item other" @click="onClickPage(page)">
                    {{page}}
                </span>
            </template>
        </template  >
        <span class="gulu-pager-nav next" :class="{disabled:currentPage===totalPage}"
              @click="onClickPage(currentPage+1)">
            <g-icon name="right"> </g-icon>
        </span>
    </div>
</template>

<script>
    import GIcon from './icon'

    export default {
        name: "GuluPager",
        computed: {
            pages() {
                let pages = this.unique([1, this.currentPage,
                    this.currentPage + 1, this.totalPage,
                    this.currentPage - 1, this.currentPage - 2, this.currentPage + 2]
                    .filter(item => item > 0 && item <= this.totalPage)
                    .sort((a, b) => a - b)).reduce((prev, current, index, array) => {
                    prev.push(current);
                    (array[index + 1] !== undefined && array[index + 1] - array[index] > 1) && prev.push('...');
                    return prev
                }, []);
                return pages
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
            },
            onClickPage(n) {
                if (n >= 1 && n <= this.totalPage) {
                    this.$emit('update:currentPage', n)
                }
            }
        },
        components:{GIcon}
    }
</script>

<style scoped lang="scss">
    @import "var";
    .gulu-pager{
        $width:20px;
        $height:20px;
        $font-size:12px;
        user-select: none;
        display: flex;justify-content: flex-start;align-items: center;
        &.hide{display: none;}
        &-separator{width: $width;
            font-size: $font-size;}
        &-item{
            border: 1px solid #e1e1e1;border-radius: $border-radius;padding: 0 4px;display: inline-flex;
            justify-content: center;align-items: center;min-width: 8px;height: $height;margin: 0 4px;
            font-size: 12px;cursor: pointer;
            &.current,&:hover{border-color: $blue;}
            &.active{cursor: default;}

        }
        &-nav{
            display: inline-flex;align-items: center;justify-content: center;
            height:$height;
            background: $gray;
            width: $width;
            margin: 0 4px;
            border-radius: $border-radius;
            font-size: $font-size;
            cursor: pointer;
            &.disabled{
                cursor: default;
                svg{
                    fill:darken($gray,30%);
                }
            }
        }

    }
</style>