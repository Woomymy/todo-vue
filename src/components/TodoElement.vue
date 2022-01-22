<template>
  <div class="todo" v-bind:content="todo.content" :status="todo.status">
    <p>
      {{ todo.id }}: {{ todo.content }}<br />
      Status: {{ todoStatusToString(todo.status) }}
    </p>
    <button @click="removeTodo(todo.id)">Delete</button>
    <button @click="markAsDone(todo.id)">Mark as done</button>
  </div>
</template>
<script lang="ts">
import { TodoItem, TodoStatus } from "../types";
import { defineComponent } from "vue";
import { todoStatusToString } from "../util";

export default defineComponent({
  name: "TodoElement",
  props: {
    todo: {
      type: Object as () => TodoItem,
      required: true,
    },
  },
  methods: {
    removeTodo(id: number) {
      this.$emit("todoDeletion", id);
    },
    markAsDone(id: number) {
      this.$emit("statusUpdate", id, TodoStatus.DONE);
    },
    todoStatusToString,
  },
});
</script>
