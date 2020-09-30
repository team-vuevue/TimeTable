<template>
  <div class="eachQuestion">
    <router-view />
    <h1>{{ msg }}</h1>
      <p v-for="comment in comments" @click="change" :key="comment" class="box2"> {{ comment.contents }}</p>
    <textarea v-model="input" class="textlines"/>
    <button @click="add();setMessage(sharedState.message)" class="btn-square-so-pop">送信</button>
  </div>
</template>


<script>
import store from "@/store";

export default {
  name: "EachQuestion",
  props: {
    msg: String
  },
  data() {
    return {
      input: "",
      comments: [],
      sharedState: store.state,
    };
  },
  methods: {
    add() {
      if(this.input.length < 1) {
        return;
      }

      this.comments.push({
        contents: this.input,
      });

      this.input= "";
    },

    change() {
      this.page ++ ;
    },

    setMessage(msg) {
      store.setMessage(msg.target.value);
    }
  }
}
</script>

<style scoped>
h1 {
  position: relative;
  padding: 0.5em;
  background: #a6d3c8;
  color: white;
}

h1::before {
  position: absolute;
  content: '';
  top: 100%;
  left: 0;
  border: none;
  border-bottom: solid 15px transparent;
  border-right: solid 20px rgb(149, 158, 155);
}
.box2 {
  padding: 0.5em 1em;
  margin: 2em 0;
  font-weight: bold;
  color: green;/*文字色*/
  background: #FFF;
  border: solid 3px lightseagreen;/*線*/
  border-radius: 10px;/*角の丸み*/
}

.box2 p {
  margin: 0;
  padding: 0;
}

.btn-square-so-pop {
  position: relative;
  display: inline-block;
  padding: 0.25em 0.5em;
  text-decoration: none;
  color: #FFF;
  background: cornflowerblue;/*色*/
  border-radius: 4px;/*角の丸み*/
  box-shadow: inset 0 2px 0 rgba(255,255,255,0.2), inset 0 -2px 0 rgba(0, 0, 0, 0.05);
  font-weight: bold;
  border: solid 2px #d27d00;/*線色*/
}

.btn-square-so-pop:active {
  /*押したとき*/
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.30);
}

.textlines {
  border: 2px solid #0a0;  /* 枠線 */
  border-radius: 0.67em;   /* 角丸 */
  padding: 0.5em;          /* 内側の余白量 */
  background-color: snow;  /* 背景色 */
  width: 30em;             /* 横幅 */
  height: 100px;           /* 高さ */
  font-size: 1em;          /* 文字サイズ */
  line-height: 1.2;        /* 行の高さ */
}
</style>