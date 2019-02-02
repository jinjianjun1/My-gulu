<template>
    <div>
        <j-tabs selected="America" >
            <j-tabs-head>
                <j-tabs-item name="America">美剧</j-tabs-item>
                <j-tabs-item name="Japan">日剧</j-tabs-item>
                <j-tabs-item :disabled="true" name="Bangzi">韩剧</j-tabs-item>
            </j-tabs-head>
            <j-tabs-body>
                <j-tabs-pane name="America">权利的游戏</j-tabs-pane>
                <j-tabs-pane name="Japan">我是大哥大</j-tabs-pane>
                <j-tabs-pane name="Bangzi">xxx</j-tabs-pane>
            </j-tabs-body>
        </j-tabs>
    </div>
</template>

<script>
    import JTabs from '../../../src/tabs/tabs'
    import JTabsHead from '../../../src/tabs/tabs-head'
    import JTabsBody from '../../../src/tabs/tabs-body'
    import JTabsPane from '../../../src/tabs/tabs-pane'
    import JTabsItem from '../../../src/tabs/tabs-item'
    export default {
        name: "tabs-demo-1",
        components:{JTabsBody,JTabsHead,JTabs,JTabsItem,JTabsPane},
    }
</script>

<style scoped lang="scss">

</style>