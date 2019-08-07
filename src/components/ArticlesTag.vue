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
          <li>
            <span>VUE</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ArticlesTag"
};
</script>

<style scoped lang = "scss" >
.tag {
  width: 20vw;
  background: #ffffff;
  padding: 10px;
  position: relative;
  left: 70vw;
  bottom: 10vh;
  .top {
    padding-bottom: 10px;
    border-bottom: 2px solid #f6f6f6;
  }
  .content {
    display: flex;
    align-items: center;
  }
}
</style>
