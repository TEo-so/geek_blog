<template>
    <div>
        <el-dropdown>
          <span class="el-dropdown-link">
            <i class="el-icon-arrow-down el-icon--right"></i>更多
          </span>

          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>删除文章</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
    </div>
</template>

<style lang="scss" scoped>
   .el-dropdown {
        cursor: pointer;
        color: #409eff;
        font-size: 0.7rem;
        position: relative;
        left:40vw;
        top: -10vh
      }
</style>

