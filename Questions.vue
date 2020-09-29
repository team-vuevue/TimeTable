<template>
  <div id="questions">
 <!--   <EachQuestion /> -->
    <router-view/>
    <p><router-link to="/EachQuestion">EachQuestions</router-link></p>
    <textarea v-model="input" @keydown.enter="add" />
    <button @click="add">投稿</button>
    <ul>
      <li v-for="question in questions" :key="question"> {{ question.contents }}</li>
    </ul>
  </div>
</template>

<script>
//import EachQuestion from "@/components/EachQuestion";

export default {
  name: 'Questions',
 /* components: {
     EachQuestion
   },
  */
  data() {
    return {
      input: "",
      questions: [],
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
    }
  }
}
</script>

<style scoped>

</style>