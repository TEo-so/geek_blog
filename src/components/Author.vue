<template>
    <div class="author">
        <img src="../assets/images/background.jpg"> 
        <P>
          <span class="name">vue</span>
        </p>
      </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>
 .author{
   display: flex
 }
img {
  width: 40px;
  height: 40px;
  border-radius: 100%;
  margin: 10px;
}

span {
  display: block;
  margin-top: 10px;
}



p {
  display: flex;
  align-items: center;
}
</style>

