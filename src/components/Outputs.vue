<template>
  <div id="Outputs">
    <Header :page="page_name"></Header>
    <div class="main">
      <div class="portfolio-finished">
        <h2>♦︎ポートフォリオ完成</h2>
        <div class="main-content">
          <ul v-for="(item, index) in finishLists" :key="index">
            <li><h3>{{ item.finished_name }}</h3></li>
            <li><p>{{ item.finished_text }}</p></li>
          </ul>
        </div>
      </div>
      <div class="portfolio-making">
        <h2>♦︎ポートフォリオ制作中</h2>
        <div class="main-content">
          <ul v-for="(item, index) in makingLists" :key="index">
            <li><h3>{{ making_name }}</h3></li>
            <li><p>{{ making_text }}</p></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "../components/Header"; 
export default {
  name: 'Outputs',
  data() {
    return {
      page_name: "過去の制作物/ポートフォリオ",
      finishLists: [
        {
          finished_name: "■ 卒業論文：カジノ施設の設立による経済への影響",
          finished_text: "日本にカジノが導入される事によって、期待できる「経済効果」と起こりうる「社会的影響」について研究しました。"
        },
        {
          finished_name: "■ telemanage",
          finished_text: "テレワーク制度下において業務管理ができるWebアプリケーションを開発しました。2020年より新型コロナウイルスの影響を受け、テレワーク制度の導入が推奨されています。パンデミックを発端に、今後リモートワークという働き方が当たり前になる時代が到来してもおかしくありません。しかしそのような社会情勢下においても、未だにテレワークへ移行できていない企業様もいらっしゃいます。おそらくその原因は、「部下が出社せずにきちんと仕事に取り組めているのか、監視できない。」、「業務において不明点があった時、すぐに上司に質問できない。」などといったことだと考えました。これらを払拭できるような便利なツールがあれば、リモートワークを促進できるのではないかと考え、「telemanage」というWebアプリケーションを開発しました。離れていても業務の進捗状況を可視的に把握できる機能や、すぐに質問できるチャット機能を搭載しています。"
        }
      ],
      makingLists: [
        {
          making_name: "",
          making_text: ""
        }
      ]
    };
  },
  components: {
    Header
  }
};
</script>

<style scoped>
#Outputs {
  background: #cccccc;
  margin-top: 0;
}

.main {
  padding: 0 50px;
  margin-bottom: 40px;
}

ul {
  list-style: none;
}

h2 {
  margin: 30px 0;
  font-size: 30px;
  font-weight: bold;
  text-align: center;
}

h3 {
  margin-bottom: 10px;
  font-size: 20px;
  font-weight: bold;
}

p {
  padding-bottom: 20px;
  line-height: 30px;
}
</style>