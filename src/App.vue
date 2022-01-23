<template>
  <h1 class="text-center text-4xl mb-4">Todo list</h1>
  <input 
    class="border-indigo-500 border-2 font-mono bg-slate-900 rounded outline-none p-2 mb-3 w-11/12 focus:ring-2 focus:ring-indigo-400"
    v-bind:id="TODO_CREATE_ID"
    @keypress.enter="addTodo()"
  />
  <TodoElement
    :todos="todos"
    v-for="todo in todos"
    :todo="todo"
    :key="todo.content"
    @todoDeletion="removeTodo"
    @statusUpdate="updateStatus"
    @todoEdition="editTodo"
    >{{ todo.content }}</TodoElement
  >
</template>

<script setup lang="ts">
import { defineComponent, ref } from "vue";
import './index.css'
import TodoElement from "./components/TodoElement.vue";
import { TODO_CREATE_ID, TODO_STORAGE_KEY } from "./constants";
import { TodoItem, TodoStatus } from "./types";

/** Save all todos to local storage and render them */
const saveTodos = (newTodos: TodoItem[]): void => {
  todos.value = newTodos;
  return window.localStorage.setItem(
    TODO_STORAGE_KEY,
    JSON.stringify(newTodos)
  );
};

/** Get all todos from localStorage */
const getTodos = (): TodoItem[] => {
  return JSON.parse(
    window.localStorage.getItem(TODO_STORAGE_KEY) || "[]"
  ) as TodoItem[];
};

/** Add new todo from HTML input */
const addTodo = (): void => {
  const inputElement = document.getElementById(
    TODO_CREATE_ID
  ) as HTMLInputElement;
  /** Don't add empty todos */
  if (!inputElement || inputElement?.value === "") return;
  const oldTodos = getTodos();
  /** Unique ID for the todo */
  const todoID = (oldTodos[oldTodos.length - 1]?.id || 0) + 1;
  oldTodos.push({
    content: inputElement.value,
    id: todoID,
    status: TodoStatus.NOT_STARTED,
  });
  console.log(`Adding todo content: ${inputElement?.value} | id ${todoID}`);
  // Write all to local storage and render
  saveTodos(oldTodos);
  // Reset input
  inputElement.value = "";
};

/** Remove todo element $id */
const removeTodo = (id: number) => {
  const oldTodos = getTodos();
  console.log(`Deleting todo ${id}`);
  const newTodos = oldTodos.filter((todo) => todo.id != id);
  saveTodos(newTodos);
};

/** Change "status" of Todo */
const updateStatus = (id: number, newStatus: TodoStatus) => {
  console.log(`Changing status of todo ${id} to ${newStatus}`);
  const oldTodos = getTodos();
  // Find todo to change
  const todoIndexToChange = oldTodos.findIndex((todo) => todo.id == id);
  oldTodos[todoIndexToChange].status = newStatus;
  saveTodos(oldTodos);
};

/** Change todo content */
const editTodo = (id: number, newContent: string) => {
  console.log(`Changing content of ${id} with ${newContent}`);
  const oldTodos = getTodos();
  const todoIndex = oldTodos.findIndex(td => td.id == id);
  if(!todoIndex && todoIndex != 0) return;
  oldTodos[todoIndex].content = newContent;
  saveTodos(oldTodos);
}

let todos = ref(getTodos());

defineComponent({
  name: "App",
  components: {
    TodoElement,
  },
});
</script>
