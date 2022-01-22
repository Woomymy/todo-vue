<template>
  <h1 class="center">Todo</h1>
  <input v-bind:id="TODO_CREATE_ID" @keypress.enter="addTodo()" />
  <TodoElement
    :todos="todos"
    v-for="todo in todos"
    :todo="todo"
    :key="todo.content"
    @todoDeletion="removeTodo"
    @statusUpdate="updateStatus"
    >{{ todo.content }}</TodoElement
  >
</template>

<script setup lang="ts">
import { defineComponent, ref } from "vue";
import TodoElement from "./components/TodoElement.vue";
import { TODO_CREATE_ID, TODO_STORAGE_KEY } from "./constants";
import { TodoItem, TodoStatus } from "./types";

const saveTodos = (newTodos: TodoItem[]): void => {
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

const addTodo = (): void => {
  const inputElement = document.getElementById(
    TODO_CREATE_ID
  ) as HTMLInputElement;
  if (!inputElement || inputElement?.value === "") return;
  const oldTodos = getTodos();
  const todoID = oldTodos.length + 1;
  oldTodos.push({
    content: inputElement.value,
    id: todoID,
    status: TodoStatus.NOT_STARTED,
  });
  console.log(`Adding todo content: ${inputElement?.value} | id ${todoID}`);
  saveTodos(oldTodos);
  // Reset input
  inputElement.value = "";
};

const removeTodo = (id: number) => {
  const oldTodos = getTodos();
  console.log(`Deleting todo ${id}`);
  const newTodos = oldTodos.filter((todo) => todo.id != id);
  saveTodos(newTodos);
};

const updateStatus = (id: number, newStatus: TodoStatus) => {
  console.log(`Changing status of todo ${id} to ${newStatus}`);
  const oldTodos = getTodos();
  /// Find todo to change
  const todoIndexToChange = oldTodos.findIndex((todo) => todo.id == id);
  oldTodos[todoIndexToChange].status = newStatus;
  saveTodos(oldTodos);
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
.todo[status="DONE"] .todo-status {
  color: green;
}
.todo[status="NOT_STARTED"] .todo-status {
  color: red;
}
</style>
