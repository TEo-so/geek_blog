<template>
    <router-link to = '/editArticle'>
    <el-button type="primary" icon="el-icon-edit" circle class="editButton"></el-button>
    </router-link>

</template>

<script>
export default {
    name:"EditButton"
    
}
</script>

<style scoped>
   .editButton{
       position: fixed;
       top: 70vh;
       left: 70vw;
   }
</style>

