<template>
  <div class="eachQuestion">
    <router-view />
    <h1>{{ question }}</h1>
    <p v-for="comment in comments" :key="comment">{{ comment.contents }}</p>
    <textarea v-model="input" @keydown.enter="add"/>
    <button @click="add">送信</button>
  </div>
</template>

<script>
export default {
  name: "EachQuestion",
  props: {
    question: String
  },
  data() {
    return {
      input: "",
      comments: [],
    };
  },
  methods: {
    add() {
      if(this.input.length < 1) {
        return;
      }

      this.comments.push({
        contents: this.input,
        index: this.num
      });
      this.input= "";
      this.num++;
    }
  }
}
</script>

<style scoped>

</style>