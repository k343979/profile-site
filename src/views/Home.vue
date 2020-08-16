<template>
  <div id="Home">
    <Header :page="page_name"></Header>
    <div class="main">
      <div class="main-left">
        <img class="main-img" src="../assets/yusuke-icon.jpg"/>
      </div>
      <div class="main-right">
        <h1>{{ title }}</h1>
        <p>{{ text }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "../components/Header";
export default {
  data() {
    return {
      page_name: "水口 佑介のホームページ",
      title: '水口 佑介のすべて',
      text: '初めまして。私は関西在住の大学生、水口 佑介です。このサイトは私、"水口 佑介"についての自己紹介サイトです。私のパーソナリティから学生生活、プログラミングスキル、そしてポートフォリオについてすべてご紹介しています。是非ご覧ください。'
    };
  },
  components: {
    Header
  }
};
</script>

<style scoped>
.main {
  margin-top: 0;
  margin-bottom: 40px;
  width: 100%;
  height: 350px;
  background-color: #cccccc;
  display: flex;
}

.main-left {
  width: 50%;
  padding-left: 80px;
}

.main-img {
  width: 70%;
  padding-top: 35px;
}

.main-right {
  width: 50%;
  height: 150px;
  padding-right: 40px;
}

.main-right h1 {
  font-size: 25px;
  font-weight: bold;
  margin-top: 100px;
  margin-bottom: 50px;
  text-align: center;
}

.main-right p {
  width: 100%;
  height: 20px;
  font-size: 18px;
  line-height: 26px;
}

@media screen and (max-width: 768) {
  .main {
    margin-top: 50px;
    width: 100%;
    height: auto;
    background-color: #cccccc;
    flex-wrap: wrap;
  }
}
</style>
