import { ArticleService } from '@/common/service/api'

import {
  FETCH_START,
  FETCH_END,
  SET_ARTICLE,
  SET_ARTICLE_DETAIL,
  SET_ARTICLE_BY_TAG,
  DELETE_ARTICLE
} from './type/mutations'

import {
  FETCH_ARTICLE,
  FETCH_ARTICLE_DETAIL,
  FETCH_ARTCLE_BY_TAG,
  FETCH_DELETE_ARTICLE
} from './type/actions'

const initialState = {
  articleList: [],
  comment:{},
  articleByTag:[]
}

const state = { ...initialState }

const mutations = {
  [SET_ARTICLE](state, data) {
    state.articleList = data
  },
  [SET_ARTICLE_DETAIL](state,data){
    state.comment = data
  },
  [SET_ARTICLE_BY_TAG](state,data){
    state.articleByTag = data
  },
  [DELETE_ARTICLE](state,id){
   
      state.articleList = state.articleList.filter(item => item.id !== id)
    
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
  },
  async [FETCH_ARTCLE_BY_TAG]({commit},id){
    commit(FETCH_START)
    const {data}  = await ArticleService.tag(id)
    commit (FETCH_END)
    commit(SET_ARTICLE_BY_TAG,data)
    
  },
  async [FETCH_DELETE_ARTICLE]({commit},id){
    //await ArticleService.delete(id)
    commit(DELETE_ARTICLE, id)
  }
    

}

const getters = {
  articleList(state) {
    return state.articleList
  },
  comment(state) {
    return state.comment
  },
  articleByTag(state){
    return state.articleByTag
  }
}

export default {
  state,
  mutations,
  actions,
  getters
};