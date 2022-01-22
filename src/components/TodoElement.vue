<template>
  <div class="todo" v-bind:content="todo.content">
    <p>{{ todo.id }}: {{ todo.content }}</p>
    <button @click="removeTodo(todo.id)">Delete</button>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "TodoElement",
  props: ["todo"],
  methods: {
    removeTodo(id: number) {
      this.$emit("todoDeletion", id);
    },
  },
});
</script>
