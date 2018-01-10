// import Service from '../../service'
import FalseApi from '../../falseApi'
import * as TYPES from '../types'

const state = {
  tableList: {
    data: []
  }
}

const mutations = {
  [TYPES.GET_TABLE_LIST_SUCCESS] (state, action) {
    state.tableList.data = action.data
  },
  [TYPES.GET_TABLE_LIST_FAILURE] (state) {
    state.tableList.data = []
  }
}

const actions = {
  // 静态获取本地api
	[TYPES.GET_TABLE_LIST] ({commit, dispatch}) {
		const success = FalseApi.table.catch
		if (success) {
			commit(TYPES.GET_TABLE_LIST_SUCCESS, FalseApi.table)
		} else {
			commit(TYPES.GET_TABLE_LIST_FAILURE)
		}
	}
}

export default {
	state,
  mutations,
  actions
}
