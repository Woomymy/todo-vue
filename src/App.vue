<template>
  <h1 class="center">Todo</h1>
  <input v-bind:id="TODO_CREATE_ID" @keypress.enter="addTodo()" />
  <TodoElement
    :todos="todos"
    v-for="todo in todos"
    :todo="todo"
    :key="todo.content"
    >{{ todo.content }}</TodoElement
  >
</template>

<script setup lang="ts">
import { defineComponent, ref } from "vue";
import TodoElement from "./components/TodoElement.vue";
import { TODO_CREATE_ID, TODO_STORAGE_KEY } from "./constants";

interface TodoItem {
  content: string;
}

const saveTodos = (newTodos: TodoItem[]) => {
  todos.value = newTodos;
  return window.localStorage.setItem(
    TODO_STORAGE_KEY,
    JSON.stringify(newTodos)
  );
};

const getTodos = (): TodoItem[] => {
  return JSON.parse(
    window.localStorage.getItem(TODO_STORAGE_KEY) || "[]"
  ) as TodoItem[];
};

const addTodo = () => {
  const inputElement = document.getElementById(
    TODO_CREATE_ID
  ) as HTMLInputElement;
  if (!inputElement || inputElement?.value === "") return;
  const oldTodos = getTodos();
  oldTodos.push({ content: inputElement.value });
  console.log(`Adding todo ${inputElement?.value}`);
  saveTodos(oldTodos);
  // Reset input
  inputElement.value = "";
};

let todos = ref(getTodos());

defineComponent({
  name: "App",
  components: {
    TodoElement,
  },
});
</script>

<style>
* {
  font-family: Arial, Helvetica, sans-serif;
  background-color: #333;
  color: white;
}
.center {
  text-align: center;
}
</style>
