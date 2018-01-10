// import Service from '../../service'
import FalseApi from '../../falseApi'
import * as TYPES from '../types'

const state = {
  chartsList: {
    data: []
  }
}

const mutations = {
  [TYPES.GET_CHARTS_LIST_SUCCESS] (state, action) {
    state.chartsList.data = action
  },
  [TYPES.GET_CHARTS_LIST_FAILURE] (state) {
    state.chartsList.data = []
  }
}

const actions = {
  // 静态获取本地api
	[TYPES.GET_CHARTS_LIST] ({commit, dispatch}) {
		const success = FalseApi.charts.catch
		if (success) {
			commit(TYPES.GET_CHARTS_LIST_SUCCESS, FalseApi.charts)
		} else {
			commit(TYPES.GET_CHARTS_LIST_FAILURE)
		}
	}
}

export default {
	state,
  mutations,
  actions
}
