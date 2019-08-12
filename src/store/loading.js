import {
    FETCH_START,
    FETCH_END,
  } from './type/mutations'
  
  const initialState = {
    isLoading: false,
  }
  
  const state = { ...initialState }
  
  const mutations = {
    [FETCH_START] (state) {
      state.isLoading = true
    },
    [FETCH_END] (state) {
      state.isLoading = false
    }
  }
  
  const getters = {
    isLoading(state) {
      return state.isLoading
    }
  }
  
  export default {
    state,
    mutations,
    getters
  };