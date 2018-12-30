<template>
        <div ref="wrapper" class="j-table-wrapper">
            <div ref="tableWrapper" :style="{height:height+'px',overflow:'auto'}">
                <table ref="table" class="j-table" :class="{bordered,compact,striped}">
                    <thead>
                    <tr>
                        <th v-if="expendField" :style="{width:'50px'}" class="j-table-center"></th>
                        <th v-if="checkAble" :style="{width:'50px'}" class="j-table-center">
                            <label>
                                <input type="checkbox" @change="onChangeAllItems" ref="totalSelected"
                                       :checked="areAllSelected">
                            </label>
                        </th>
                        <th :style="{width:'50px'}" v-if="numberVisible">#</th>
                        <th :style="{width:column.width+'px'}" v-for="column in columns" :key="column.field">
                            <div class="j-table-header">
                                {{column.text}}
                                <span class="j-table-sorter" v-if="column.field in orderBy"
                                      @click="changeOlderBy(column.field)">
                        <g-icon name="asc" :class="{active:orderBy[column.field]==='asc'}"></g-icon>
                        <g-icon name="desc" :class="{active:orderBy[column.field]==='desc'}"></g-icon>
                        </span>

                            </div>
                        </th>
                        <th ref="actionsHeader" v-if="$scopedSlots.default"></th>
                    </tr>
                    </thead>
                    <tbody>
                    <template v-for="item,index in dataSource" >
                        <tr :key="item.id">
                            <td v-if="expendField" :style="{width:'50px'}" class="j-table-center">
                                <g-icon @click="expendItems(item.id)" class="j-table-expendIcon" name="right"/>
                            </td>
                            <td v-if="checkAble" :style="{width:'50px'}" class="j-table-center">
                                <label>
                                    <input type="checkbox" :checked="ifItemSelected(item)"
                                           @change="onChangeItem(item,index,$event)">
                                </label>
                            </td>
                            <td :style="{width:'50px'}" v-if="numberVisible">{{index+1}}</td>
                            <template v-for="column in columns">
                                <td :style="{width:column.width+'px'}" :key="column.field">{{item[column.field]}}</td>
                            </template>
                            <td v-if="$scopedSlots.default">
                                <div ref="actions" style="display: inline-block">
                                    <slot :item="item"></slot>

                                </div>
                            </td>
                        </tr>
                            <tr v-if="inExpendedIds(item.id)" :key="`${item.id}-expend`">
                            <td :colspan="columns.length+expendCellColSpan">
                                {{item[expendField] || '无详细描述'}}
                            </td>
                        </tr>

                    </template>
                    </tbody>
                </table>
            </div>
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
            inExpendedIds(id){
                return this.expendIds.indexOf(id)>=0
            },
            expendItems(id){
                if (this.inExpendedIds(id)){
                    this.expendIds.splice(this.expendIds.indexOf(id),1)
                }else{
                    this.expendIds.push(id)
                }
            },
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
            },
        },
        computed:{
            expendCellColSpan(){
                let result=0;
                if (this.checkAble){result+=1}
                if (this.expendField){result+=1}
                return result
            },
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
        mounted() {
            if(this.$scopedSlots.default){
                let div=this.$refs.actions[0];
                let {width}=div.getBoundingClientRect();
                let parent=div.parentNode;
                let styles=getComputedStyle(parent);
                let paddingLeft=styles.getPropertyValue('padding-left');
                let paddingRight=styles.getPropertyValue('padding-right');
                let borderLeft=styles.getPropertyValue('border-left-width');
                let borderRight=styles.getPropertyValue('border-right-width');
                console.log(paddingLeft, paddingRight, borderLeft, borderRight);
                let width2=width+
                    parseInt(paddingLeft)+parseInt(paddingRight)+parseInt(borderLeft)+parseInt(borderRight)+'px'
                this.$refs.actionsHeader.style.width=parseInt(width2)+16+'px';
                this.$refs.actions.map(div=>{
                    div.parentNode.style.width=width2
                })
            }

            let table2 = this.$refs.table.cloneNode(false);
            this.table2=table2;
            table2.classList.add('j-table-copy');
            let thead=this.$refs.table.children[0];
            let {height}=thead.getBoundingClientRect();
            this.$refs.tableWrapper.style.marginTop=height+'px';
            this.$refs.tableWrapper.style.height=this.height-height+'px';
            table2.appendChild(thead);
             this.$refs.wrapper.appendChild(table2);

        },
        beforeDestroy(){
            this.table2.remove();
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
        data(){
            return{
                expendIds:[]
            }
        },
        props:{
            checkAble:{
                type:Boolean,
                default:false
            },
            expendField:{
                type:String
            },
            height: {
                type: Number,
            },
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
        overflow: auto;
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

    &-copy {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        background: red;
    }
    &-expendIcon{
        width: 10px;
        height: 10px;
    }
    & &-center{
        text-align: center;
    }
    }
</style>