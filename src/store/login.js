 import {UserService} from '@/common/service/api'

import {
    FETCH_START,
    FETCH_END,
    SET_LOGIN_IN,
   
} from './type/mutations'

import {
    FETCH_LOGIN_IN,
  
} from './type/actions'


const initialState = {
    data:[{
        "status":1
    }]
  
}

const state = { ...initialState }

const mutations = {
    [SET_LOGIN_IN](state,data) {
        state.data = data
      //  localStorage.setItem('username', state.user.name);
       // localStorage.setItem('userpassword', state.user.password);
    },
    // [SET_lOGIN_OUT](state) {
    //     state.user = {};
    //     localStorage.removeItem('username')
    //     localStorage.removeItem('userpassword')
    // }
}

const actions = {
    async [FETCH_LOGIN_IN]({ commit }) {
        commit(FETCH_START)
        const {data} = await UserService.get()
        commit(SET_LOGIN_IN,data)
        commit(FETCH_END)
    },
 
}

const getters = {
    status (state){
        return state.data
    }
}

export default {
    state,
    mutations,
    actions,
    getters

};