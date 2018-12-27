<template>
    <div class="j-table">
        <table>
            <thead>
                <tr>
                    <th>#</th>
                    <th v-for="column in columns">
                        {{column.text}}
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item,index in dataSource">
                    <td>{{index}}</td>
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
            }
        }
    }
</script>

<style scoped lang="scss">

</style>