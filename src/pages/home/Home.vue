<template>
  <div class="home-board">
    <div class="pages">
      <page-card :myPages="articleList"></page-card>
    </div>
  </div>
</template>

<script>
import pageCard from '../../common/components/homePage/pageCard'

export default {
  name: 'Home',
  components: {
    pageCard
  },
  mounted() {
    this.$store.dispatch('GET_ARTICLES_LIST')
  },
  computed: {
    articleList () {
      return this.$store.state.articles.articlesList.data
    }
  },
  data () {
    return {
      myPages: [{title: '关于本项目01', content: '项目结构,使用框架'}, {title: '关于本项目02', content: '项目结构,使用框架'}]
    }
  },

}
</script>

<style scoped lang="scss">
@import '~assets/scss/variables.scss';

.home-board{
  width: 86%;
  margin: 2% auto 0;
}
</style>
