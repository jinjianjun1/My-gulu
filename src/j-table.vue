<template>
    <div class="j-table-wrapper" >
        <table class="j-table" :class="{bordered,compact,striped}">
            <thead>
                <tr>
                    <th><input type="checkbox" ></th>
                    <th v-if="numberVisible">#</th>
                    <th v-for="column in columns">
                        {{column.text}}
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item,index in dataSource">
                    <th><input type="checkbox" ></th>
                    <td v-if="numberVisible">{{index+1}}</td>
                    <template v-for="column in columns">
                        <td>{{item[column.filed]}}</td>
                    </template>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    export default {
        name: "J-table",
        props:{
            columns:{
                type:Array,
                required:true
            },
            dataSource:{
                type:Array,
                required:true
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