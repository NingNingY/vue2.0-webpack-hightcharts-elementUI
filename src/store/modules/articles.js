// import Service from '../../service'
import FalseApi from '../../falseApi'
import * as TYPES from '../types'

const state = {
  articlesList: {
    data: []
  }
}

const mutations = {
  [TYPES.GET_ARTICLES_LIST_SUCCESS] (state, action) {
    state.articlesList.data = action
  },
  [TYPES.GET_ARTICLES_LIST_FAILURE] (state) {
    state.articlesList.data = []
  }
}

const actions = {
  // 静态获取本地api
	[TYPES.GET_ARTICLES_LIST] ({commit, dispatch}) {
		const success = FalseApi.articles.length
		if (success) {
			commit(TYPES.GET_ARTICLES_LIST_SUCCESS, FalseApi.articles)
		} else {
			commit(TYPES.GET_ARTICLES_LIST_FAILURE)
		}
	}
}

export default {
	state,
  mutations,
  actions
}
