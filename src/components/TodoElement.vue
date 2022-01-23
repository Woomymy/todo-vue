<template>
  <div class="todo mb-2" v-bind:content="todo.content" :status="todo.status">
    <p v-if="!editing" @click="editing = true">
      {{ todo.id }}: {{ todo.content }}<br />
      Status:
      <span class="todo-status">{{ todoStatusToString(todo.status) }}</span>
    </p>
    <input :id="`edit-${todo.id}`" class="text-black" placeholder="Todo" v-if="editing" :value="todo.content" @keypress.enter="editTodo(todo.id)" />
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
      // Use Object as () => T to correct TypeScript types
      type: Object as () => TodoItem,
      required: true,
    },
  },
  data() {
    return { editing: false };
  },
  methods: {
    /** Ask removeTodo() in parent to remove todo $id */
    removeTodo(id: number) {
      this.$emit("todoDeletion", id);
    },
    /** Ask updateStatus() in parent to mark Todo as done */
    markAsDone(id: number) {
      this.$emit("statusUpdate", id, TodoStatus.DONE);
    },
    /** Ask updateStatus() in parent to mark Todo as not started */
    markAsUnstarted(id: number) {
      this.$emit("statusUpdate", id, TodoStatus.NOT_STARTED);
    },
    /** Change todo content */
    editTodo(id: number) {
      const newInput = document.querySelector(`#edit-${id}`) as HTMLInputElement;
      if (newInput.value == "") return;
      this.$emit("todoEdition", id, newInput.value);
      this.editing = false;
    },
    todoStatusToString,
  },
});
</script>
