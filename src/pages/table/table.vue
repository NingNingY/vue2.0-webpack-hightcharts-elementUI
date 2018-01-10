<template>
  <div class="table-page">
    <h2>过滤器</h2>
    <el-table :data="products"
              border
              style="width: 100%">
      <el-table-column  prop="name"
                        label="名称"
                        width="180">
      </el-table-column>
      <el-table-column  prop="price"
                        label="价格"
                        width="180">
        <template slot-scope="scope">
          <span>{{scope.row.price | buildZDFPercent}}</span>
        </template>
      </el-table-column>
      <el-table-column  prop="num"
                        label="数量">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: 'table-page',
  data () {
    return {
      testData: 46533,
      products: [
        {name: '苹果',price: 100,num: 10,category: "水果"},
        {name: '香蕉',price: 15,num: 10,category: "水果"},
        {name: '雪梨',price: 65,num: 10,category: "水果"},
        {name: '宝马',price: 2500,num: 10,category: "汽车"},
        {name: '奔驰',price: 10025,num: 10,category: "汽车"},
        {name: '柑橘',price: 15,num: 10,category: "水果"},
        {name: '奥迪',price: 25,num: 10,category: "汽车"}
      ]
    }
  },
  mounted() {
    console.log('this', this)
  },

}
</script>

<style scoped lang="scss">
  .table-page {

  }
</style>
