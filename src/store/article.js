import { ArticleService } from '@/common/service/api'

import {
  FETCH_START,
  FETCH_END,
  SET_ARTICLE,
  SET_ARTICLE_DETAIL
} from './type/mutations'

import {
  FETCH_ARTICLE,
  FETCH_ARTICLE_DETAIL
} from './type/actions'

const initialState = {
  articleList: [],
  comment:{}
}

const state = { ...initialState }

const mutations = {
  [SET_ARTICLE](state, data) {
    state.articleList = data
  },
  [SET_ARTICLE_DETAIL](state,data){
    state.comment = data
  }
}

const actions = {
  async [FETCH_ARTICLE]({ commit }) {
    commit(FETCH_START)
    const { data } = await ArticleService.get()
    commit(FETCH_END)
    commit(SET_ARTICLE, data)
  },
  async [FETCH_ARTICLE_DETAIL]({commit},id){
    commit(FETCH_START)
    const {data} = await ArticleService.getDetail(id)
    commit (FETCH_END)
    commit(SET_ARTICLE_DETAIL,data)
  }
}

const getters = {
  articleList(state) {
    return state.articleList
  },
  comment(state) {
    return state.comment
  }
}

export default {
  state,
  mutations,
  actions,
  getters
};