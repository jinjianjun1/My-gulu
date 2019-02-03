<template>
    <div>
        <j-cascader :source.sync="source" :selected.sync="selected" style="margin-bottom: 70px;margin-top: 40px;">
        </j-cascader>
    </div>
</template>

<script>
    import JCascader from '../../../src/cascader/cascader'

    export default {
        name: "cascader-demo",
        components: {JCascader},
        data() {
            return {
                selected:[],
                source: [
                    {name:"海军",children:[{name:'赤犬',children:[{name:'中将1'},{name:'中将2'}]},{name:'黄猿'},{name:'青雉'}]},
                    {name:"海贼",children:[{name:'白胡子'},{name:'红发'},{name:'BigMom'},{name:'凯多'}]},
                    {name:"革命军",children:[{name:'龙'},{name:'萨博'},{name:'人妖王',children:[{name:'人妖1'},{name:'人妖2'}]}]}
                ]}
            }
        }

</script>

<style scoped lang="scss">

</style>