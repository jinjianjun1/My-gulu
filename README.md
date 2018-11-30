## 制作vue ui框架 用于个人学习
## 使用本框架请在css中开启 border-box
[![Build Status](https://travis-ci.org/jinjianjun1/My-gulu.svg?branch=master)](https://travis-ci.org/jinjianjun1/My-gulu)

## 介绍
学习vue 过程中制作的UI框架

## 开始使用
1.请在所有CSS前加入下面的代码
  ```
  *{box-size:border-box}
  *::before{box-size:border-box}
  *::after{box-size:border-box}
  ```
   设置默认颜色变量（后续改进为scss）
  ````
   :root{
          --button-height:32px;
          --font-size:14px;
          --button-bg:#fff;
          --button-active-bg:#eee;
          --border-radius:4px;
          --color:#333;
          --border-color:#999;
          --border-color-hover:#666;
      }
      #app{margin:20px}
      body{
          font-size: var(--font-size);
      }
  ````
    IE15 以上支持
 2.安装 clujun1-1
 ```
    npm install clujun1-1
 ```
 3.引入 clujun1-1
 ```
 import {Button,ButtonGroup,Icon} from 'clujun1-1'
 import 'clujun1-1/dist/index.css'
 
 export default {
   name: 'app',
   components: {
     HelloWorld,
     'g-button':Button
   }
 }
 ```

## 文档
## 变更记录
## 联系方式
## 贡献代码
