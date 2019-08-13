import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";
import JwtService from "@/common/service/jwt";
import { API_URL } from "@/common/config";

const ApiService = {
  init () {
    Vue.use(VueAxios, axios)
    Vue.axios.defaults.baseURL = API_URL
  },

  setHeader () {
    Vue.axios.defaults.headers.common[
      "Authorization"
    ] = `Token ${JwtService.getToken()}`;
  },

  get (resource) {
    return Vue.axios.get(resource).catch(error => {
      throw new Error(`[RWV] ApiService ${error}`);
    });
  },

  post (resource, params) {
    return Vue.axios.post(`${resource}`, params);
  },

  patch (resource, params) {
    return Vue.axios.patch(resource, params);
  },

  put (resource, params) {
    return Vue.axios.put(resource, params);
  },

  delete (resource) {
    return Vue.axios.delete(resource).catch(error => {
      throw new Error(`[RWV] ApiService ${error}`);
    });
  }
};

export default ApiService;

export const ArticleService = {
  get () {
    return ApiService.get(`article`)
  },
  getDetail (articleId) {
    return ApiService.get(`comment/${articleId}`)
  }

 
}

export const TagService = {
  get () {
    return ApiService.get(`tag`)
  }
}

export const CommentService = {
  get (params) {
    return ApiService.get(`comment`,params)
  },

}

export const UserService = {
  get () {
     return ApiService.get(`login`)
  }
}


