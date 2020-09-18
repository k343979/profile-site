<template>
  <div id="Background">
    <Header :page="page_name"></Header>
    <div class="main">
      <h2>♦︎大学</h2>
      <div class="main-content">
        <div class="main-left">
          <img src="../assets/zemi.jpg" />
        </div>
        <div class="main-right">
          <h3>■ 所属ゼミ：{{ major }}</h3>
          <p>{{ major_content }}</p>
          <h3>■ 卒業論文：{{ essay }}</h3>
          <p>{{ essay_content }}</p>
        </div>
      </div>
      <h2>♦︎アルバイト経験</h2>
      <div class="main-content">
        <div class="main-left">
          <h3>■ {{ job }}</h3>
          <p>{{ job_content }}</p>
        </div>
        <div class="main-right">
          <img src="../assets/part-time-job.jpg" />
        </div>
      </div>
      <h2>♦︎海外インターンの経験</h2>
      <div class="main-content">
        <div class="main-left">
          <img src="../assets/SSHP-illust.jpg" />
        </div>
        <div class="main-right">
          <h3>■ {{ internship }}</h3>
          <p>{{ internship_content }}</p>
          <p class="explain">{{ explain_img }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "../components/Header"; 
export default {
  data() {
    return {
      page_name: "水口佑介の学生時代",
      major: "経済理論専攻",
      major_content: "日本における様々な社会問題や経済問題について理論に基づき、研究を進めてきました。研究手法は主にR言語を活用し、統計データを回帰式に当てはめる回帰分析を実証することで論理構成を整理し、考察することでした。",
      essay: "カジノ施設の設立による経済への影響",
      essay_content: "2016年12月に日本でカジノ法案が成立したことから、日本でカジノ施設が設立される可能性を考察し、実現されると経済へどのような影響をもたらすのか、ということを研究しました。カジノ導入のメリット・デメリットの比較、経済的利益の回帰分析、またカジノの潜在的市場規模の推計などを行い、考察を図りました。",
      job: "塾講師",
      job_content: "とある個別指導塾の塾講師として4年間勤めてきました。担当生徒の成績向上と担当受験生の志望校合格をサポートするため、生徒一人ひとりに合った教え方を探し、実行しました。相手にわかりやすく伝えるために簡単な問題に置き換えたり、具体例を交えて説明するように工夫していました。",
      explain_img: "左図：CEOへ企画のプレゼンテーション",
      internship: "シンガポール現地のスタートアップ企業へ",
      internship_content: "シンガポール現地のSaaS企業に約1ヶ月勤めました。ホテルのホームページにチャットボットを導入するSaaS企業でした。そこで私は、シンガポール国内におけるホテル産業の市場調査と外国人旅行客の動向調査、そして自社サービスの宣伝方法を模索し、マーケティングについて学びました。ホテル産業の市場調査と外国人観光客の動向調査の結果、自社のチャットサービスを導入してもらうクライアント先のホテルを3件選定し、アプローチをかけることを提案しました。",
    };
  },
  components: {
    Header
  }
};
</script>

<style scoped>
#Background {
  background: #cccccc;
  margin-top: 0;
}

.main {
  margin-bottom: 40px;
  width: 100%;
}

h2 {
  margin: 40px 0;
  font-size: 30px;
  font-weight: bold;
  text-align: center;
}

h3 {
  font-size: 20px;
  font-weight: bold;
  margin-top: 50px;
  margin-bottom: 20px;
}

.main-content {
  display: flex;
  width: 100%;
}

.main-left {
  padding-left: 40px;
  margin-bottom: 20px;
  width: 50%;
}

.main-right {
  padding-right: 40px;
  width: 50%;
}

img {
  padding-top: 50px;
  padding-left: 70px;
  width: 60%;
  height: auto;
}

p {
  padding: 30px 0;
  width: 90%;
  line-height: 25px;
}
</style>