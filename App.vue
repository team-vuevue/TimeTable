<template>
  <div id="app">
    <h1>時間割</h1>


<table id ="table1">
  <tr>
    <th>月曜日</th><th>火曜日</th><th>水曜日</th><th>木曜日</th><th>金曜日</th>
  </tr>
</table>


      <table id="table">
        <tr>
          <td id=0 v-if="selected === '月, 1・2限'">{{ classes}}</td><td id = 1 v-if="selected === '月, 3・4限'"></td>
          <td id = 3></td><td id = 4></td><td id = 5></td>
        </tr>
        <tr>
          <td></td><td></td><td></td><td></td><td></td>
        </tr>
        <tr>
          <td></td><td></td><td></td><td></td><td></td>
        </tr>
        <tr>
          <td></td><td></td><td></td><td></td><td></td>
        </tr>
        <tr>
          <td></td><td></td><td></td><td></td><td></td>
        </tr>
      </table>

    <select v-model = "selected">
    <option disabled value = "">時限選択</option>
    <option>月, 1・2限</option>
      <option>月, 3・4限</option>

    </select>
    <input v-model="input" @keydown.enter="addTimetable" />
    <button @click="addTimetable">add</button>
    
    <router-link to="/Questions">Questions</router-link>
    <router-view/>
    </div>




</template>

<script>



export default {
  name: 'App',
  data(){
    return{
      input: "",
      selected: "",
      classes:[],

    };
  },

  methods:{
    addTimetable() {
      this.classes.push({
        class: this.input,
        index,
      });
      this.input = "";
    },
  },
};

</script>

<style>
td{
  text-align: center;
}

#table {

  margin:0 auto;
  border-collapse: collapse;
  border: 3px solid #ccc;

}

#table td {

  border:1px solid #ccc;
  height: 60px;
  width: 190px;
  text-align: center;
  vertical-align: middle;
  font-size: 17px;
  cursor: pointer;

}

#table1{
  margin:0 auto;
  border-collapse: collapse;
  border: 3px solid #ccc;
}
#table1 th{

  border:1px solid #ccc;
  height: 60px;
  width: 190px;
  text-align: center;
  vertical-align: middle;
  font-size: 30px;
  cursor: pointer;

}

</style>
