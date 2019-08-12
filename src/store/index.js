import Vue from 'vue'
import Vuex from 'vuex'

import loading from './loading'
import article from './article'
import tag from './tag'
import comment from './comment'
import login from './login'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    loading,
    article,
    tag,
    comment,
    login
  }
})
