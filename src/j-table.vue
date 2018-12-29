<template>
    <div class="j-table-wrapper" >
        <table class="j-table" :class="{bordered,compact,striped}">
            <thead>
            <tr>
                <th>
                    <label>
                        <input type="checkbox" @change="onChangeAllItems" ref="totalSelected" :checked="areAllSelected">
                    </label>
                </th>
                <th v-if="numberVisible">#</th>
                <th v-for="column in columns" :key="column.filed">
                    <div class="j-table-header">
                        {{column.text}}
                        <span class="j-table-sorter" v-if="column.filed in orderBy" @click="changeOlderBy(column.filed)">
                        <g-icon name="asc" :class="{active:orderBy[column.filed]==='asc'}"></g-icon>
                        <g-icon name="desc" :class="{active:orderBy[column.filed]==='desc'}"></g-icon>
                        </span>

                    </div>
                </th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="item,index in dataSource" :key="item.id">
                <td>
                    <label>
                        <input type="checkbox"  :checked="ifItemSelected(item)" @change="onChangeItem(item,index,$event)">
                    </label>
                </td>
                <td v-if="numberVisible">{{index+1}}</td>
                <template v-for="column in columns" >
                    <td :key="column.filed">{{item[column.filed]}}</td>
                </template>
            </tr>
            </tbody>
        </table>
        <div class="j-table-loading" v-if="loading">
            <g-icon name="loading"/>
        </div>
    </div>
</template>

<script>
    import GIcon from './icon'
    export default {
        name: "J-table",
        components:{
            GIcon
        },
        methods: {
            changeOlderBy(key){
                let copy= JSON.parse(JSON.stringify(this.orderBy));
                let oldValue=copy[key];
                if (oldValue==='asc'){
                    copy[key]='desc'
                }else if (oldValue==='desc'){
                    copy[key]=true
                }else {
                    copy[key]='asc'
                }
                this.$emit('update:orderBy',copy)
            },
            onChangeItem(item, index, e) {
                let selected=e.target.checked;
                let copy =JSON.parse(JSON.stringify(this.selectedItems));
                if (selected){
                    copy.push(item);
                }else{
                    copy=copy.filter(i=>i.id!==item.id)
                }
                this.$emit('update:selectedItems', copy)

            },
            onChangeAllItems(e) {
                let selected=e.target.checked;
                this.$emit('update:selectedItems',selected?this.dataSource:[])
            },
            ifItemSelected(item){
                return this.selectedItems.filter(i=>i.id===item.id).length>0
            }
        },
        computed:{
            areAllSelected(){
                const a=this.dataSource.map(item=>item.id).sort();
                const b=this.selectedItems.map(item=>item.id).sort();
                let equal=true;
                if (a.length !== b.length) {return false}
                for (let i = 0; i < a.length; i++) {
                    if (a[i] !== b[i]) {
                        equal = false;
                        break
                    }
                }
                return equal
            }
        },
        watch:{
            selectedItems(){
                if (this.selectedItems.length===this.dataSource.length){
                    this.$refs.totalSelected.indeterminate=false;

                } else {
                    this.$refs.totalSelected.indeterminate = this.selectedItems.length !== 0;
                }
            }
        },
        props:{
            loading:{
                type:Boolean,
                default:false
            },
            columns:{
                type:Array,
                required:true
            },
            dataSource:{
                type:Array,
                required:true,
                validator(array){
                    return !(array.filter(i => i.id === undefined).length > 0) ;
                }
            },
            numberVisible:{
                type:Boolean,
                default:false
            },
            bordered:{
                type:Boolean,
                default: false
            },
            compact:{
                type:Boolean,
                default:false
            },
            striped:{
                type:Boolean,
                default:true
            },
            selectedItems:{
                type:Array,
                default:()=>[],
            },
            orderBy:{
                type:Object,
                default:()=>({})
            }
        }
    }
</script>

<style scoped lang="scss">
    @import "var";
    $dark-gray:darken($gray,20%);
    $light-gray:lighten($dark-gray,22%);
    .j-table{
        width: 100%;
        border-collapse: collapse;
        border-spacing: 0;
        border-bottom: 1px solid red;
        &.bordered{
            border: 1px solid $gray;
            td,th{
                border: 1px solid $dark-gray;
            }
        }
        &.compact{
            td,th{
                padding: 4px;
            }
        }

        td,th{
            border-bottom: 1px solid $dark-gray;
            text-align:left;
            padding: 8px;
        }
        &.striped{
            tbody{
                >tr{
                    &:nth-child(odd){
                        background: $light-gray;
                    }
                    &:nth-child(even){
                        background: white;
                    }
                }
            }
        }
        &-header{
            display: flex;
            align-items: center;
        }
        &-sorter{
            display: inline-flex;
            flex-direction: column;
            margin: 0 4px;
            svg{
                width: 8px;
                height: 8px;
                fill: $dark-gray;
                cursor: pointer;
                &.active{
                    fill:red;
                }
                &:first-child{
                    position: relative;
                    top: -1px;
                }
                &:last-child{
                    position: relative;
                    top: 1px;
                }
            }
        }
    &-wrapper{
        position: relative;

    }
    &-loading{
        background: rgba(255,255,255,.7);
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        svg{
            @include spin;
            width: 50px;
            height: 50px;
        }
    }
    }
</style>