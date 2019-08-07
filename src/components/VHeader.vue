<template>
    <header>
        <h1 class="title">GEEK-BLOG</h1>
        <div 
        class ="login"
        >
            <span class="el-icon-user-solid"></span>
            <span>登录|注册</span>
        </div>
    </header>
</template>

<script>
export default {
  
}
</script>


<style  scoped lang = "scss">
  header{
      width:100vw;
      height:10vh;
      background-color:blue;
      color:#ffffff;
      display: flex;
      align-items: center;
      justify-content: space-around;
     h1{
      font-weight: bold;
      font-size: 2rem;
  }
    span{
      font-size: 1rem;
      letter-spacing: 5px;
      cursor: pointer;
  }
      
  }
  
  

  
</style>
