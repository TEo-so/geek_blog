<template>
  <div class="commentList">
    <div class="title">评论</div>

    <div class="commentBox">
      <div class="content">
        <img src="../assets/images/background.jpg" />
        <textarea></textarea>
      </div>

      <div class="publish">
        <span class="el-icon-picture-outline"></span>
        <el-button size="mini" round class="button">发布</el-button>
      </div>
    </div>

    <div class="otherComments" 
   >
      <img />
      <p></p>
    </div>
  </div>
</template>

<script>
export default {
 
  
};
</script>

<style lang="scss" scoped>
.commentList {
  width: 55vw;
  height: 60vh;
  background: #ffffff;
  margin: 10vh auto;
  border: 1px solid #f6f6f6;
  .title {
    height: 5vh;
    background-color: #f6f6f6;
    line-height: 5vh;
    padding-left: 10px;
    font-size: 0.8rem;
  }
  .commentBox {
    padding: 10px;
    border-bottom: 1px solid #f6f6f6;
  }

  .content {
    display: flex;
    margin-bottom: 10px;
    align-items: center;
    textarea {
      width: 38vw;
      height: 20px;
      outline: none;
    }

    img {
      width: 25px;
      height: 25px;
      margin-right: 15px;
    }
  }
  .publish {
    display: flex;
    margin-left: 35px;
    .el-icon-picture-outline {
      font-size: 21px;
      margin-right: 30vw;
    }
  }
}
.otherComments {
  display: flex;
  margin: 10px;
  img {
    width: 20px;
    height: 20px;
    margin: 5px;
  }
  p {
    display: flex;
    align-items: center;
  }
}
</style>

