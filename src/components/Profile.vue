<template>
  <div id="Profile">
    <Header :page="page_name"></Header>
    <div class="main">
      <div class="main-left">
        <img class="main-img" src="../assets/yusuke-icon2.jpg"/>
      </div>
      <div class="main-right">
        <h2>{{ name }}</h2>
        <ul>
          <li>生年月日：{{ birthday }}</li>
          <li>年齢：{{ age }}</li>
          <li>血液型：{{ blood_type }}</li>
          <li>出身地：{{ hometown }}</li>
          <li>居住地：{{ habitat }}</li>
          <li>職業：{{ ocupation }}</li>
          <li>学校名：{{ university }}</li>
          <li>専攻：{{ major }}</li>
          <li>趣味：{{ hobby }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "../components/Header";
export default {
  name: 'Profile',
  data() {
    return {
      page_name: "水口 佑介のプロフィール",
      name: '水口 佑介',
      birthday: '1998年4月9日',
      age: '22歳',
      blood_type: 'B型',
      hometown: '京都府,嵐山',
      habitat: '大阪府吹田市在住',
      ocupation: '大学生',
      university: '関西大学,経済学部',
      major: '経済学,経済理論',
      hobby: 'プログラミング,読書,服の買い物'
    };
  },
  components: {
    Header
  }
};
</script>

<style scoped>
#Profile {
  background-color: #cccccc;
  margin-top: 0;
}

.main {
  margin-top: 0;
  margin-bottom: 20px;
  width: 100%;
  height: 500px;
  display: flex;
}

.main-left {
  width: 50%;
  padding-left: 50px;
}

.main-img {
  width: 70%;
  height: 90%;
  padding-top: 25px;
}

.main-right {
  width: 50%;
  height: 500px;
  margin-top: 40px;
  padding-right: 30px;
}

.main-right h2 {
  margin-bottom: 40px;
  font-size: 30px;
  text-align: center;
}

ul {
  margin-left: 20px;
  list-style: none;
}

li {
  margin-bottom: 20px;
  font-size: 20px;
}
</style>