const path = require('path')

module.exports = {
    base:'/My-gulu/',
    title: 'j-vue-ui',
    description: '一个正在完善的个人UI框架',
    themeConfig: {
        sidebar: [
            {
                title:'入门',
                children:[
                    '/install/',
                    '/get-start/',
                ]
            },

            {
                title:'组件',
                children:['/components/button',
                    '/components/input',
                    '/components/layout','/components/grid','/components/tabs',
                    '/components/toast','/components/popover','/components/collapse',
                    '/components/cascader','/components/slides','/components/menu']
            }

        ]
    },
    scss:{
        includePaths: [path.join(__dirname, '../../styles')]
    }
};