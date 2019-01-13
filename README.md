# matrix
自动化布局方案  
[![Build Status](https://travis-ci.org/snakeUni/matrix.svg?branch=master)](https://travis-ci.org/snakeUni/matrix)
[![NPM version](https://img.shields.io/npm/v/matrix.svg?style=flat-square)](https://www.npmjs.com/package/matrix)
[![node version](https://img.shields.io/badge/node.js-%3E=_8.0-green.svg?style=flat-square)](http://nodejs.org/download/)
[![npm download](https://img.shields.io/npm/dm/matrix.svg?style=flat-square)](https://www.npmjs.com/package/matrix)

## 安装
```
yarn add grid-matrix  或 npm install grid-matrix
```
## 使用
```js
import React from 'react'
import Matrix from 'grid-matrix'

const Item = props => {
  const { src } = props
  return (
    <div>{src.aa}</div>
  )
}

const dataSources = [{aa:1}, {aa:2},{aa:1}, {aa:2},{aa:1}, {aa:2}]

export default class Demo extends React.Component {
  render() {
    return (
      <Matrix dataSources={dataSources}>
        <Item />
      </Matrix>
    )
  }
}
```
一行个数自由配置
```js
<Matrix dataSources={dataSources} length={6}>
  <Item />
</Matrix>
```
增加了`gutter`可以自由改变间距
```js
<Matrix dataSources={dataSources} gutter={20}>
  <Item />
</Matrix>
```
![img](http://thyrsi.com/t6/648/1546482132x2890211732.jpg)
## api
> dataSources: 用于渲染的源数据，默认为空数组[]  
> length: 一行的长度，默认是4  
> Item会接受`src`作为props,`src`为dataSources的每一个数据 
> gutter 数字 可以设置间距
> className  类名
