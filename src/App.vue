<template>
  <div id="app">
    <div class="page-app">
      <div class="bg-success">
        <div class="nav nav-pills ">
            <ul class="list-unstyled list-inline app-nav pull-right">
              <li class="text-uppercase" role="presentation">
                <router-link to="/home"><strong>H&nbsp;O&nbsp;M&nbsp;E</strong></router-link>
              </li>
              <li class="text-uppercase" role="presentation">
                <router-link to="/basic"><strong>基本用法</strong></router-link>
              </li>
              <li class="text-uppercase" role="presentation">
                <router-link to="/custom"><strong>组件用法</strong></router-link>
              </li>
              <li class="text-uppercase" role="presentation">
                <router-link to="/another"><strong>不同需求</strong></router-link>
              </li>
            </ul>
        </div>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  name: 'app'
}
</script>

<style scoped>
#app {

  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  padding-top: 10px;
}

.page-app {
  width: 100%;
}
.page-app .app-nav {
  text-align: center;
  height: 35px;
  line-height: 35px;
  font-size: 18px;
  margin: 10px 200px 0 0;
}

.page-app .app-nav li{width: 100px}

</style>
