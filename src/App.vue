<template>
  <h1 class="center">TodoList</h1>
  <ul>
    <li v-for="todo in todos" :key="todo.id" >{{ todo.id }}: {{ todo.value }}</li>
  </ul>
  <input id="adder">
  <button id="validate" @click="addTodo()">Valider</button>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      todos: []
    }
  },
  methods: {
    addTodo() {
      console.log("Test")
    }
  }
};
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
* {
  font-family: 'Roboto', sans-serif;
}
.center{
  align-self: center;
  text-align: center;
  align-items: center;
}
input {
  border-style: double;
  border-color:  #288fef;
}
button {
    margin: 10px;
    background-color: #288fef;
    border: none;
    color: white;
    padding: 13px 29px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 17px;
}
</style>