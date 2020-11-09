<template>
  <Error msg="L'entrée est vide!" v-if="emptyval"/>
  <Error msg="Cet élément existe déjà!" v-if="showalreadyex"/>
  <Success msg="Elément ajouté!" v-if="successshow"/>
  <h1 class="center">TodoList</h1>
  <ul>
  <TodoItem v-for="todo in todos" v-bind:todo="todo" v-bind:id="todo.id" v-bind:key="todo.id" > </TodoItem>
  </ul>
  <input id="adder">
  <button class="bigbutton" id="validate" @click="addTodo()">Valider</button>
</template>
<script>
import Error from "./components/Error"
import Success from "./components/Succes"
import TodoItem from "./components/TodoItem"
export default {
  name: "App",
  components: {
    Error,
    Success,
    TodoItem
  },
  data() {
    return {
      todos: [],
      emptyval: false,
      showalreadyex: false,
      successshow: false
    }
  },
  methods: {
    addTodo() {
      const val = document.getElementById('adder').value
      if(!val) {
        this.emptyval = true
        setTimeout(() => {
          this.emptyval = false
        }, 3000)
        return;
      }
      if(this.hasTodo(val)) {
        this.showalreadyex = true;
        setTimeout(() => {
          this.showalreadyex = false;
        }, 3000)
        return;
      }
      const todoid = this.todos.length + 1
      this.todos.push({
        value: val,
        id: todoid
      });
      this.successshow = true

      setTimeout(() => {
        this.successshow = false
      }, 3000)
      document.getElementById('adder').value = ""; // Reset field value
      this.resetProps()
    },
    hasTodo(val) {
      let has;
      this.todos.forEach(todo => {
        if(todo.value === val) {
          has = true;
          return;
        }
      });
      return has;
    },
    resetProps() {
      this.showalreadyex = false
      this.emptyval = false
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
  margin: 10px;
}
.bigbutton {
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
.tinybutton{
  margin: 10px;
  background-color: #288fef;
  border: none;
  color: white;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 17px;
}
div, body, html{
  padding: 0;
  display: block;
  margin-top: 0px;
  overflow: hidden;
  list-style-type: none;
  margin: 0;
  padding: 0;
}
.error{
  align-self: center;
  text-align: center;
  background-color: #e45640;
}
.succes{
  align-self: center;
  text-align: center;
  background-color: #0ecc5d;
}
</style>