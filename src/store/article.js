import {ArticleService} from '@/common/service/api'

import {
    FETCH_START,
    FETCH_END,
    SET_ARTICLE
  } from './type/mutations'
  
import {
    FETCH_ARTICLE
} from './type/actions'

  const initialState = {
    data:[]
  }
  
  const state = { ...initialState }
  
  const mutations = {
    [SET_ARTICLE](state,data){
        state.data = data
    }
  }

  const actions = {
     async [FETCH_ARTICLE]({commit}){
         commit(FETCH_START)
       
         const {data} = await ArticleService.get()

         commit(FETCH_END)
         commit(SET_ARTICLE,data)

     }
  }
  
  const getters = {
    articleList(state){
        return state.data
    }
  }
  
  export default {
    state,
    mutations,
    actions,
    getters
  };