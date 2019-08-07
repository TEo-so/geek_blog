<template>
  <div class="articleList">
    <div class="article">
      <div class="top">
        <h2 class="title">Vue</h2>
        <el-dropdown>
          <span class="el-dropdown-link">
            <i class="el-icon-arrow-down el-icon--right"></i>更多
          </span>

          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>删除文章</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>

      <div class="content" v-text="html">vue-blog</div>

      <div class="end">
        <span class="tag">vue</span>
        <span class="el-icon-medal-1">点赞</span>

        <span class="el-icon-chat-dot-square">评论</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ArticlesList",
  data() {
    return {
      html: "<p>我是内容</p>"
    };
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
      font-size: 1.3rem;
      font-weight: bold;
      align-items: center;
      .el-dropdown {
        margin-left: 40vw;
        cursor: pointer;
        color: #409eff;
      }
    }
  }
  .content {
    margin: 1vw 0;
    cursor: pointer;
    font-size: 1.2rem;
  }
  .end {
    margin: 30px 0;
    span {
      margin-right: 20px;
      cursor: pointer;
      font-size: 1rem;
      color: #b2bac2;
    }
    .tag {
      padding: 4px;
      border-radius: 30px;
      background-color: #f6f6f6;
    }
  }
}
</style>