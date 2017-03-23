<template>
  <div class="home-board">
    <div class="container"> 
      <div class="col-md-8 col-md-offset-2"><br><br>
        <h2 align="center">Vue+Echarts入坑之旅</h2>
        <p>实际项目的需求是在vue中使用echarts,初次接触的时候遇到很多问题，也因为很多需求在基础用法的基础上面做了很多更改，
        在实际使用过程中遇到很多问题，这里仅仅提供基本用法</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      exmple: 123456
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.home-board p{
  font-size: 18px;
  padding-top: 10%;
}
</style>
