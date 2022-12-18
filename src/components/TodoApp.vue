<template>
  <TodoForm />
  <TodoList />
</template>

<script lang="ts">
import TodoForm from "./TodoForm.vue";
import TodoList from "./TodoList.vue";
export default {
  components: { TodoForm, TodoList },
  setup() {
    return {};
  },
};
</script>
