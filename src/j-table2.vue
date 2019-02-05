<template>
    <div class="j-table-wrapper" >
        <table class="j-table">
            <thead>
            <tr>
                <label>
                    <input type="checkbox"  @click="selectedAllItems" >
                </label>
                <th :key="column.filed" v-for="column in columns">
                    {{column.text}}
                </th>
            </tr>
            </thead>
            <tbody>
            <tr :key="item.id" v-for="item,index in dataSource">
                <td>
                    <label>
                        <input type="checkbox" :checked="selected.filter(i=>i.id===item.id).length>0" @click="selectedItems(item,index,$event)">
                    </label>

                </td>
                     <template  v-for="column in columns">
                        <td :key="column.filed">{{item[column.filed]}}</td>
                    </template>
            </tr>
            </tbody>
        </table>

    </div>
</template>

<script>
    export default {
        name: "j-table2",
        props:{
            dataSource:{
                type:Array,
                default:()=>[]
            },
            columns:{
                type:Array
            },
            selected:{
                type:Array,
                default:()=>[]
            }
        },
        methods:{
            selectedItems(item,index,e){
                console.log(item, index, e.target.checked);
                let copy=JSON.parse(JSON.stringify(this.selected));
                let chosen =e.target.checked;
                if (chosen){
                    copy.push(item);
                    console.log(copy);
                } else {
                    copy=copy.filter(i=>i.id!==item.id);
                    console.log(copy);
                }
                this.$emit('update:selected',copy)
            },
            selectedAllItems(e){
                let chosen =e.target.checked;
                if (chosen){
                    this.$emit('update:selected',this.dataSource)
                }else {
                    this.$emit('update:selected',[])

                }
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