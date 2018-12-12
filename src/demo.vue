<template>
    <div>
        <p>11111</p>
        <g-cascader :source="source" height="200px" :selected="selected" @update:selected="selected=$event">
        </g-cascader>
        <p>2222222</p>
    </div>
</template>

<script>
    import Button from './button'
    import Cascader from './cascader'
    export default {
        name:'demo',
        components:{
            'g-button':Button,
            'g-cascader':Cascader
        },
        mounted(){
            console.log(this.selected);
        },
        data(){
            return{
                selected:[],
                source:[{
                    name:'山西',
                    children:[
                        {name:'临汾',
                            children: [
                                {name:'市辖区'},
                                {name:'尧都区'},
                                {name:'襄汾县'},
                            ]
                        },
                        {name:'运城',
                            children: [
                                {name:'市辖区'},
                                {name:'12312'},
                                {name:'12431'},
                            ]
                        }
                    ],
                }, {name:'山东',
                    children:[
                        {name:'市名1',
                            children: [
                                {name:'区3'},
                                {name:'区2'},
                                {name:'区1'},
                            ]
                        },
                        {name:'市名2',
                            children: [
                                {name:'市辖区'},
                                {name:'12312'},
                                {name:'12431'},
                            ]
                        }
                    ],
                }, {name:'杭州',
                    children:[
                        {name:'市名x',
                            children: [
                                {name:'区名q'},
                                {name:'区名s'},
                                {name:'区名v'},
                            ]
                        },
                        {name:'市名ss',
                            children: [
                                {name:'市辖区'},
                                {name:'区名sd'},
                                {name:'区名szzz'},
                            ]
                        }
                    ],
                }
                ]
            }
        }
    }
</script>

<style>
    *{margin: 0;padding:0;box-sizing: border-box}
    :root{;--font-size:14px;}
    body{
        font-size: var(--font-size);
    }
</style>
