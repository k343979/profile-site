<template>
  <div id="Skills">
    <Header :page="page_name"></Header>
    <div class="main">
      <div class="main-left">
        <h2>{{ lang_name }}</h2>
        <ul>
          <li>
            <img src="../assets/HTML-logo.jpg" />
            <p>HTML5</p>
          </li>
          <li>
            <img src="../assets/CSS-logo.jpg" />
            <p>CSS3</p>
          </li>
          <li>
            <img src="../assets/Javascript-logo.png" />
            <p>Javascript</p>
          </li>
          <li>
            <img src="../assets/PHP-logo.png" />
            <p>PHP</p>
          </li>
        </ul>
      </div>
      <div class="main-right">
        <h2>{{ framework }}</h2>
        <ul>
          <li>
            <img src="../assets/logo.png" />
            <p>Vue.js</p>
          </li>
          <li>
            <img src="../assets/laravel-logo.png" />
            <p>Laravel</p>
          </li>
        </ul>
        <h2 class="design_name">{{ design }}</h2>
        <ul>
          <li>
            <img src="../assets/figma-logo.png" />
            <p>Figma</p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "../components/Header"; 
export default {
  data() {
    return {
      page_name: "プログラミングスキル",
      lang_name: "プログラミング言語",
      framework: "フレームワーク",
      design: "デザインツール"
    };
  },
  components: {
    Header
  }
};
</script>

<style scoped>
#Skills {
  background: #cccccc;
  margin-top: 0;
}
.main {
  margin-bottom: 40px;
  display: flex;
  width: 100%;
}

.main-left {
  width: 50%;
  padding-left: 50px;
}

.main-right {
  width: 50%;
  padding-right: 50px;
}

.main-left h2,.main-right h2 {
  font-size: 25px;
  margin-top: 50px;
  margin-bottom: 20px;
  text-align: center;
}

img {
  width: 100px;
  height: 100px;
  padding-right: 30px;
}

ul {
  width: 40%;
  margin-left: 100px;
  list-style: none;
}

li {
  margin: 40px 0;
  display: flex;
}

.design_name {
  padding-top: 70px;
}

p {
  font-size: 20px;
  font-weight: bold;
  line-height: 100px;
  display: block;
}
</style>