<template>
  <div class="home-header">
    <header>
      <div class="bg-success">
        <div class="nav nav-pills ">
          <div class="header-innner">
            <ul class="list-unstyled list-inline header-nav pull-right">
              <li class="text-uppercase" role="presentation">
                <a href="javascript:;" @click="jumpTo('pages.home')"><strong>首页</strong></a>
              </li>
              <li class="text-uppercase" role="presentation">
                <a href="javascript:;" @click="jumpTo('pages.table')"><strong>表单类</strong></a>
              </li>
               <li class="text-uppercase" role="presentation">
                <a href="javascript:;" @click="jumpTo('pages.charts')"><strong>图表类</strong></a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  </div>
</template>

<script type="text/javascript">
	export default {
		name: 'home-header',
    methods: {
      jumpTo(path) {
        console.log('path', path, this.$router)
        this.$router.push({name: path})
      }
    }
	}
</script>

<style lang="scss" >
// @import '../../assets/sass/variables.scss';

.home-header {
  width: 100%;

  .header-innner {
    width: 80%;
    margin: 0 auto;

    .header-nav {
      height: 35px;

      text-align: center;
      line-height: 35px;
      font-size: 18px;

      li{
        width: 100px
      }
    }
  }

}
</style>

