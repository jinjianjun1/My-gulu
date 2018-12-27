<template>
    <div class="j-table">
        <table>
            <thead>

            </thead>
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