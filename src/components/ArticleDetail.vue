<template>
  <div class="article">
    <Author />
    <More />

    <div class="top">
      <h4 class="title"></h4>
    </div>

    <div class="content"></div>
    <CommentBox :comment = "comment"/>

  </div>
</template>


<script>
import Author from "@/components/Author"
import More from "@/components/More"
import CommentBox from '@/components/CommentBox'
import {FETCH_ARTICLE_DETAIL} from '@/store/type/actions'
import { mapGetters } from 'vuex'


export default {
  components: {
    Author,
    More,
    CommentBox
  },
  created(){
     this.$store.dispatch(FETCH_ARTICLE_DETAIL,this.$route.query.articleId)
     console.log(this.articleDetail)
   },
    computed:{
      ...mapGetters(['comment'])
  }


};
</script>


<style lang="scss" scoped>
.article {
  width: 55vw;
  background: #ffffff;
  margin-left: 10vw;
  position: relative;
  top: 10vh;
  padding: 3vw;

  .top {
    display: flex;
    cursor: pointer;
    font-size: 1.2rem;
    font-weight: bold;
    align-items: center;
    margin-bottom: 10px;
    .el-dropdown {
      margin-left: 38vw;
      cursor: pointer;
      color: #409eff;
      font-size: 0.7rem;
    }
  }
}
</style>
