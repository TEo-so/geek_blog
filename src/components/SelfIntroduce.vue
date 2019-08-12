<template>
  <div>
    <div class="about">

      <div class="top">
        <h1>关于作者</h1>
      </div>

      <div class="content">
        <img src="../assets/images/background.jpg"> 
        <P>
          <span class="name">vue</span>
          <span class="job">前端</span>
        </p>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: "selfIntroduce"
};
</script>

<style scoped>
.about {
  width: 20vw;
  background: #ffffff;
  padding: 10px;
  position: fixed;
  left: 70vw;
  top:21vh;
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

.job {
  color: #989898;
}

.top {
  padding-bottom: 10px;
  border-bottom: 2px solid #f6f6f6;
}

.content {
  display: flex;
  align-items: center;
}
</style>
