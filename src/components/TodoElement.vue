<template>
  <div class="todo mb-2" v-bind:content="todo.content" :status="todo.status">
    <p v-if="!editing">
      {{ todo.id }}: {{ todo.content }}<br />
      Status:
      <span class="todo-status">{{ todoStatusToString(todo.status) }}</span>
    </p>
    <input :id="`edit-${todo.id}`" class=" w-2/4 text-black bg-gray-200 rounded p-2 mb-2 outline-none focus:ring-2 focus:ring-white" placeholder="Todo" v-if="editing" :value="todo.content" @keypress.enter="editTodo(todo.id)" />
    <br v-if="editing === true"/>
    <button v-if="editing === false" class="blue-button" type="button" @click="editing = true">Edit</button>
    <button v-if="editing === true" class="blue-button" type="button" @click="editTodo(todo.id)">OK</button>
    <button v-if="editing === true" class="red-button" type="button" @click="editing = false">Cancel</button>
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
      if (newInput.value.trim() == "") return;
      this.$emit("todoEdition", id, newInput.value);
      this.editing = false;
    },
    todoStatusToString,
  },
});
</script>
