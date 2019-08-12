<template>
  <div>
    <div class="tag">
      <div class="top">
        <h1>
          <span class="el-icon-collection"></span>标签
        </h1>
      </div>
      <div class="content">
        <ul>
          <li  
          v-for = "(item) in tagList"
          :key = item.id>
            <span>{{item.name}}</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ArticlesTag",
  props:{
     tagList:{
       type:Array,
       require:true
     }
  }
};
</script>

<style scoped lang = "scss" >
.tag {
  width: 20vw;
  background: #ffffff;
  padding: 10px;
  position: fixed;
  left: 70vw;
  top:50vh;
  cursor: pointer;
  .top {
    padding-bottom: 10px;
    border-bottom: 2px solid #f6f6f6;
  }
  .content {
    display: flex;
    align-items: center;
    ul{
      display:flex;
      width: 15vw;
      flex-wrap:wrap;
      li{
        background:#F4F5F5;
        margin: 5px;
        padding:3px;
        border-radius: 5px

      }
    }
  }
}
</style>
