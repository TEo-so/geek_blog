<template>
  <div class="commentList">
    <div class="title">评论</div>

    <div class="commentBox">
      <div class="commentator">
        <img src="../assets/images/background.jpg" />
        <span class="name">Vue</span>

        <el-dropdown class="more">
          <span class="el-dropdown-link">
            更多
            <i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>删除评论</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>

      <div class="content">评论内容</div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.commentList {
  width: 50vw;
  height: 60vh;
  background: #ffffff;
  margin: 10vh auto;
  border: 1px solid #f6f6f6;
  .title {
    width: 100%;
    height: 5vh;
    background-color: #f6f6f6;
  }
  .commentBox {
    width: 100%;
    padding: 10px;
    border-bottom: 1px solid #f6f6f6;
  }

  .commentator {
    display: flex;
    margin-bottom: 10px;
    align-items: center;

    img {
      width: 40px;
      height: 40px;
      margin-right: 15px;
    }
    .more {
      margin-left: 35vw;
      cursor: pointer;
      color: #409eff;
    }
  }
}
</style>

