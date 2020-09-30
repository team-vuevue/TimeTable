<template>
  <div id="questions">
    <!-- <router-view/>
    <p><router-link to="/EachQuestion" @keydown.enter="add">EachQuestions</router-link></p> -->
      <div v-if="page % 2 == 0">
        <button @click="change" class="btn-square-pop">戻る</button>
        <EachQuestion msg="偏微分と全微分の違いはなんですか？" />
      </div>
      <div v-if="page % 2 == 1">
        <textarea v-model="input" />
        <button @click="add();setMessage(sharedState.message)" class="btn-square-little-rich">投稿</button>
        <ol >
            <li v-for="question in questions" @click="change" :key="question" > {{ question.contents }}</li>
        </ol>
      </div>
  </div>
</template>

<script>
import EachQuestion from "@/components/EachQuestion";
import store from "@/store";

export default {
  name: 'Questions',
  components: {
     EachQuestion
   },

  data() {
    return {
      input: "",
      questions: [
        {index: 1, contents: "偏微分と全微分の違いはなんですか？"},
        {index: 2, contents: "微分方程式の解法を教えて下さい"},
      ],
      page: 1,
      sharedState: store.state,
    };
  },

  methods: {
    add() {
      if(this.input.length < 1){
        return ;
      }

      this.questions.push({
        contents: this.input,
      });

      this.input="";
      this.index++;
    },

    change() {
      this.page += 1;
    },

    setMessage(msg) {
      store.setMessage(msg.target.value);
    }
  }
}
</script>

<style scoped>
.btn-square-pop {
  position: relative;
  display: inline-block;
  padding: 0.25em 0.5em;
  text-decoration: none;
  color: #FFF;
  background: deepskyblue;/*背景色*/
  border-bottom: dodgerblue;/*少し濃い目の色に*/
  border-radius: 4px;/*角の丸み*/
  box-shadow: inset 0 2px 0 rgba(255,255,255,0.2), 0 2px 2px rgba(0, 0, 0, 0.19);
  font-weight: bold;
}

.btn-square-pop:active {
  border-bottom: solid 2px #fd9535;
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.30);
}
.btn-square-little-rich {
  position: relative;
  display: inline-block;
  padding: 0.25em 0.5em;
  text-decoration: none;
  color: #FFF;
  background: #03A9F4;/*色*/
  border: solid 1px #0f9ada;/*線色*/
  border-radius: 4px;
  box-shadow: inset 0 1px 0 rgba(255,255,255,0.2);
  text-shadow: 0 1px 0 rgba(0,0,0,0.2);
}

.btn-square-little-rich:active {
  /*押したとき*/
  border: solid 1px #03A9F4;
  box-shadow: none;
  text-shadow: none;
}

ul {
  padding: 0;
}

ul li, ol li {
  color: #404040;
  border-left: solid 6px #1fa67a;/*左側の線*/
  border-bottom: solid 2px #dadada;/*下に灰色線*/
  background: whitesmoke;
  margin-bottom: 5px;/*下のバーとの余白*/
  line-height: 1.5;
  padding: 0.5em;
  list-style-type: none!important;/*ポチ消す*/
  font-weight: bold;
}
</style>