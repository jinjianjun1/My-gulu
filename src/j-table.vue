<template>
    <div class="j-table-wrapper" >
        <table class="j-table" :class="{bordered,compact,striped}">
            <thead>
                <tr>
                    <th>
                        <label>
                            <input type="checkbox" @change="onChangeAllItems" ref="totalSelected">
                        </label>
                    </th>
                    <th v-if="numberVisible">#</th>
                    <th v-for="column in columns" :key="column.filed">
                        {{column.text}}
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
    </div>
</template>

<script>
    export default {
        name: "J-table",
        methods: {
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
        watch:{
            selectedItems(){
                if (this.selectedItems.length===this.dataSource.length){
                    this.$refs.totalSelected.indeterminate=false;
                    this.$refs.totalSelected.checked=true

                } else {
                    this.$refs.totalSelected.indeterminate = this.selectedItems.length !== 0;
                }
            }
        },
        props:{
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

}
</style>