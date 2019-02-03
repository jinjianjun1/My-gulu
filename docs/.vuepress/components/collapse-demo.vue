<template>
    <div>
        <h2>多选</h2>
        <j-collapse :selected="['1']" style="margin: 20px">
            <j-collapse-item title="新闻"  name="1">头条</j-collapse-item>
            <j-collapse-item title="广告"  name="2">998</j-collapse-item>
            <j-collapse-item title="八卦"  name="3">某某门</j-collapse-item>
        </j-collapse>
        <h2>单选</h2>

        <j-collapse :single="true" :selected="['1']" style="margin: 20px">
            <j-collapse-item title="新闻"  name="1">头条</j-collapse-item>
            <j-collapse-item title="广告"  name="2">998</j-collapse-item>
            <j-collapse-item title="八卦"  name="3">某某门</j-collapse-item>
        </j-collapse>
    </div>
</template>

<script>
    import JCollapse from '../../../src/collapse/collapse'
    import JCollapseItem from '../../../src/collapse/collapse-item'
    export default {
        name: "collapse-demo.vue",
        components:{
            JCollapse,JCollapseItem
        }
    }
</script>

<style scoped lang="scss">

</style>