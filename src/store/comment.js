import { CommentService } from "@/common/service/api";

import { FETCH_START, FETCH_END, SET_COMMENT } from "./type/mutations";

import { FETCH_COMMENT } from "./type/actions";

const initialState = {
  data: {}
};

const state = { ...initialState };

const mutations = {
  [SET_COMMENT](state, data) {
    state.data = data;
  }
};

const actions = {
  async [FETCH_COMMENT]({ commit }, index) {
    commit(FETCH_START);
    const { data } = await CommentService.get(index);
    
    commit(FETCH_END);
    commit(SET_COMMENT, data[index]);
  }
};

const getters = {
  commentList(state) {
    return state.data;
  }
};

export default {
  state,
  mutations,
  actions,
  getters
};
