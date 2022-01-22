<template>
  <div class="todo" v-bind:content="todo.content">
    <p>{{ todo.content }}</p>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "TodoElement",
  props: ["todo"],
});
</script>
