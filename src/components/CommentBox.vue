<template>
  <div class="commentList">
    <div class="title">评论</div>
          
    <ul>
       <li v-for  = "(item) in comment.content"
       :key = "item.id">
         <img :src = "item.avator">
         <p>{{item.content}}</p> 
       </li>

    </ul>

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

  
  </div>
</template>

<script>
export default {
 props:{
   comment:{
     type:Object,
     required:true
   }
 }
  
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
  li{
    img{
      width: 30px;
      height: 30px;
      margin: 5px;
    }
    display: flex;
    align-items: center
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

</style>

