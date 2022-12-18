<template>
  <form @submit.prevent="addTodoAndClear(todo)">
    <header>
      <label fo="todo-list">Todo List</label>
    </header>
    <div class="input-group-wrapper">
      <input
        v-model="todo"
        id="todo-list"
        name="todo-list"
        type="text"
      /><button type="submit">Add</button>
    </div>
  </form>
</template>

<script lang="ts">
import { ref } from "vue";
import { useTodoStore } from "../stores/todos";
export default {
  setup() {
    const todo = ref("");
    const store = useTodoStore();

    const addTodoAndClear = (text: string) => {
      if (text.length === 0) return;
      store.addTodo(text);
      todo.value = "";
    };

    return { addTodoAndClear, todo };
  },
};
</script>

<style scoped>
button {
  align-items: center;
  background-color: var(--button-background);
  border: 0.2rem solid var(--color-background-mute);
  color: var(--button-color);
  border-radius: 0.4rem;
  cursor: pointer;
  display: flex;
  font-size: 1.6rem;
  min-height: 100%;
  padding: 0 2rem;
}

button:hover {
  border-color: var(--vt-c-white);
  transition: all 0.3s ease-in-out;
}

button:active {
  border-color: var(--vt-c-text-dark-2);
  transition: all 0.1s ease-in-out;
}

form {
  display: flex;
  flex-direction: column;
  width: 100%;
}

label {
  font-size: var(--font-size-heading);
}

input {
  border: 0.2rem solid var(--color-border);
  border-radius: 0.4rem;

  font-size: var(--font-size-small);

  padding: 1rem 0.5rem;

  height: 3.6rem;
  width: 100%;
}

.input-group-wrapper {
  display: flex;
  gap: 2rem;
  padding: 2rem 0;
}
</style>
