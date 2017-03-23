[![GitHub issues](https://img.shields.io/github/issues/surmon-china/vue-echarts.svg?style=flat-square)](https://github.com/surmon-china/vue-echarts/issues)
[![GitHub forks](https://img.shields.io/github/forks/surmon-china/vue-echarts.svg?style=flat-square)](https://github.com/surmon-china/vue-echarts/network)
[![GitHub stars](https://img.shields.io/github/stars/surmon-china/vue-echarts.svg?style=flat-square)](https://github.com/surmon-china/vue-echarts/stargazers)
[![Twitter](https://img.shields.io/twitter/url/https/github.com/surmon-china/vue-echarts.svg?style=flat-square)](https://twitter.com/intent/tweet?text=Wow:&url=%5Bobject%20Object%5D)

[![NPM](https://nodei.co/npm/vue-echarts.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/vue-echarts/)


# vue-echarts
Echarts component for Vue.js(1.x ~ 2.x)，本组件基于 [echarts](http://echarts.baidu.com/)构建，支持Vue全版本使用，可使用vue-echarts快速轻易构建出多种丰富全面的web图表


# Example

[Demo Page](https://surmon-china.github.io/vue-echarts)


# Use Setup


### Install vue-echarts

``` bash
npm install vue-echarts --save
```

### Vue use

``` javascript
// import with ES6
import Vue from 'vue'
// ...
import echarts from 'vue-echarts'


// require with Webpack/Node.js
var Vue = require('vue')
// ...
var echarts = require('vue-echarts')


// use
Vue.use(echarts)


// --------------------------------------


// or use with component(ES6)
import Vue from 'vue'
// ...
import { echarts } from 'vue-echarts'

// use
export default {
  components: {
    echarts
  }
}
```


### Use in components

``` html
<echarts :options="echartsOptions"></echarts>
```


``` javascript
export default {
  data () {
    return {
      echartsOptions: {
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          data: ['客户人数']
        },
        grid: {
          top: '15%',
          left: '2%',
          right: '3%',
          bottom: '6%',
          containLabel: true
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
          axisLabel: {
            margin: 15
          }
        },
        yAxis: {
          type: 'value'
        },
        series: [{
          name: '客户人数',
          type: 'line',
          stack: '总量',
          data: [120, 132, 101, 134, 90, 230, 210],
          symbolSize: 10,
          legendHoverLink: true,
          smooth: true,
          clipOverflow: true,
          lineStyle: {
            normal: {
              width: 2
            }
          }
        }],
        color: ['#4d94e5']
      }
    }
  }
}
```

# Echarts Config
[Echarts config APIs](http://echarts.baidu.com/api.html)


# Author Blog
[Surmon](http://surmon.me)
