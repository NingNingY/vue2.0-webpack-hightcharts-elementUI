<template>
  <div class="charts-page">
    <h3>Hightcharts</h3>
    <p>使用hightCharts作为插件，本地模拟数据路径为/src/failseApi/charts，因自身工作影响，这里只研究hightstock，如有需要请自行查询官方文档进行更改，更改路径/src/common/components/hightCharts</p>
    <br><br><br>
    <div v-if="showCharts">
      <highcharts-component :options="stockOptions" :styles="styles"></highcharts-component>
    </div>
    <br><br><br><br>
    <div v-if="showCharts">
      <highcharts-component :options="candleOptions" :styles="styles"></highcharts-component>
    </div>
  </div>
</template>

<script>

import ChartsData from '../../common/services/hightCharts'
import highchartsComponent from '../../common/components/hightCharts'

export default {
  name: 'charts',
  components: {
    highchartsComponent
  },
  mounted() {
    this.$store.dispatch('GET_CHARTS_LIST').then(() => {
      this.demoteData()
      this.showCharts = true
    })
  },
  data () {
    return {
      stockOptions: {},
      candleOptions: {},
      showCharts: false,
      styles: {'height': '300px', 'width': '100%'}
    }
  },
  computed: {
    hightData() {
      return this.$store.state.charts.chartsList.data
    }
  },
  methods: {
    demoteData() {
     const lineData = this.hightData.lineData.data
     const candleData = this.hightData.candleData.data
     this.stockOptions = ChartsData.drawStockLine(lineData).options
     this.candleOptions = ChartsData.drawCandleLine(candleData).options
    }
  }
}
</script>

<!-- 添加'scoped'属性主要是为了限制以下样式仅在当前页面生效 -->
<style scoped lang='scss'>
  .charts-page {
    width: 86%;
    margin: 2% auto 0;
  }
</style>
