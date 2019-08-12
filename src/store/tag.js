import {TagService} from '@/common/service/api'

import {
    FETCH_START,
    FETCH_END,
    SET_TAG
  } from './type/mutations'
  
import {
    FETCH_TAG
} from './type/actions'

  const initialState = {
    data:[]
  }
  
  const state = { ...initialState }
  
  const mutations = {
    [SET_TAG](state,data){
        state.data = data
    }
  }

  const actions = {
     async [FETCH_TAG]({commit}){
         commit(FETCH_START)
       
         const {data} = await TagService.get()

         commit(FETCH_END)
         commit(SET_TAG,data)

     }
  }
  
  const getters = {
    tag(state){
        return state.data
    }
  }
  
  export default {
    state,
    mutations,
    actions,
    getters
  };