<template>
  <div class="todo mb-2" v-bind:content="todo.content" :status="todo.status">
    <p>
      {{ todo.id }}: {{ todo.content }}<br />
      Status:
      <span class="todo-status">{{ todoStatusToString(todo.status) }}</span>
    </p>
    <button class="purple-button" type="button" @click="removeTodo(todo.id)">Delete</button>
   
    <button class="green-button" v-if="todo.status !== 'DONE'" @click="markAsDone(todo.id)">
      Mark as done
    </button>
    <button class="red-button" v-if="todo.status === 'DONE'" @click="markAsUnstarted(todo.id)">
      Mark as not done
    </button>
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
    markAsUnstarted(id: number) {
      this.$emit("statusUpdate", id, TodoStatus.NOT_STARTED);
    },
    todoStatusToString,
  },
});
</script>
