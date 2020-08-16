<template>
  <div id="Header">
    <div class="header-content">
      <div class="header-icon">
        <img src="../assets/yusuke-profile-icon.jpg" />
      </div>
      <div class="header-logo">
        <h1>{{ page }}</h1>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["page"],
};
</script>

<style scoped>
#Header {
  margin-top: 50px;
  height: 170px;
  background: #ffffff;
}

.header-content {
  padding-top: 0;
}

.header-logo {
  margin-top: 20px;
  font-size: 30px;
  font-weight: bold;
  display: block;
  color: #444;
  padding-left: 120px;
}

img {
  width: 90px;
  height: 90px;
  margin-left: 200px;
}


</style>