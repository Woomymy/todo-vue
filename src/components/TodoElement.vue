<template>
  <div class="todo" v-bind:content="todo.content" :status="todo.status">
    <p>
      {{ todo.id }}: {{ todo.content }}<br />
      Status: {{ todoStatusToString(todo.status) }}
    </p>
    <button @click="removeTodo(todo.id)">Delete</button>
  </div>
</template>
<script lang="ts">
import { TodoItem } from "../types";
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
    todoStatusToString,
  },
});
</script>
