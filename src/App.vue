<template>
  <h1 class="center">Todo</h1>
  <input v-bind:id="TODO_CREATE_ID" @keypress.enter="addTodo()" />
</template>

<script setup lang="ts">
import { defineComponent } from "vue";
import { TODO_CREATE_ID, TODO_STORAGE_KEY } from "./constants";

interface TodoItem {
  content: string;
}

const saveTodos = (todos: TodoItem[]) => {
  return window.localStorage.setItem(TODO_STORAGE_KEY, JSON.stringify(todos));
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
  const todos = getTodos();
  todos.push({ content: inputElement.value });
  saveTodos(todos);
};

defineComponent({
  name: "App",
  components: {},
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
