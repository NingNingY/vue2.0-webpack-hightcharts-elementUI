<template>
  <!-- <div> {{myPages}}</div> -->
  <div class="pages">
    <div class="page-card"
         v-for="(page, index) in myPages"
         :key="page.title"
         @click="toDetail(index)">
      <h4>{{page.title}}</h4>
      <h6>更新时间：{{page.time}}</h6>
      <div></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'pageCard',
  props: {
    myPages: {
      type: Array,
      default: null
    }
  },
  methods: {
    toDetail(index) {
      this.$router.push({'name': 'pages.detail', params: {'index': index}})
    }
  }
}
</script>

<style scoped lang="scss">
  .page-card {
    height: 150px;
    width: 80%;
    margin: 20px auto;
    border: 1px solid #ddd;
    border-radius: 6px;
    padding: 10px 20px;
  }
</style>
