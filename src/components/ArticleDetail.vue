<template>
  <div class="article">
    <Author />
    <More />

    <div class="top">
      <h4 class="title">{{article.title}}</h4>
    </div>

    <div class="content">{{article.content}}</div>
    <CommentBox/>

  </div>
</template>


<script>
import Author from "@/components/Author";
import More from "@/components/More";
import CommentBox from '@/components/CommentBox'

export default {
  data() {
    return {
      article: {
        title: "html",
        content: "超强本语言",
        tag: "html"
      }
    };
  },
  components: {
    Author,
    More,
    CommentBox
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
