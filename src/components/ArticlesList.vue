<template>
  <div class="articleList">
    <div class="article" ref="article" v-for="(item) in articleList" :key="item.id">
      <div class="top">
        <h4 class="title">{{item.title}}</h4>

        <div class="delete"
        @click = "deleteArticle(item.id)">删除</div>
      </div>

      <div class="content" @click="toDetail(item.id)">{{item.content}}</div>

      <div class="end">
        <span class="tag">{{item.tag}}</span>
        <span class="el-icon-medal-1">点赞</span>
      </div>
    </div>
  </div>
</template>
 


<script>
import { FETCH_DELETE_ARTICLE } from '@/store/type/actions'
export default {
  name: "ArticlesList",

  props: {
    articleList: {
      type: Array,
      required: true
    }
  },

  methods: {
    toDetail(id) {
      this.$router.push({ name: "article", query: { articleId: id } });
    },
    deleteArticle(id) {
      this.$store.dispatch(FETCH_DELETE_ARTICLE,id)
    }
  }
};
</script>


<style scoped lang = "scss">
.articleList {
  width: 55vw;
  background: #ffffff;
  margin-left: 10vw;
  position: relative;
  top: 10vh;
  .article {
    border-top: 2px solid #f6f6f6;
    border-bottom: 2px solid #f6f6f6;
    padding: 2vw;
    .top {
      display: flex;
      cursor: pointer;
      font-size: 1.2rem;
      font-weight: bold;
      align-items: center;
      .delete {
        margin-left: 38vw;
        cursor: pointer;
        color: #409eff;
        font-size: 0.7rem;
      }
    }
  }
  .content {
    margin: 1vw 0;
    cursor: pointer;
    font-size: 1rem;
  }
  .end {
    margin: 30px 0;
    span {
      margin-right: 20px;
      cursor: pointer;
      font-size: 0.7rem;
      color: #b2bac2;
      cursor: pointer;
    }
    .tag {
      padding: 4px;
      border-radius: 30px;
      background-color: #f6f6f6;
      font-size: 0.7rem;
    }
  }
}
</style>