<template>
  <form @submit.prevent="addTodoAndClear(todo)">
    <header>
      <label fo="todo-list">Todo List</label>
      <p v-if="todoList.length > 0">
        {{ finishedTodos.length }}/{{ todoList.length }} complete
      </p>
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
import { ref } from 'vue';
import { useTodoStore } from '../stores/todos';
import { storeToRefs } from 'pinia';
export default {
  setup() {
    const todo = ref('');
    const store = useTodoStore();
    const { finishedTodos, todoList } = storeToRefs(store);

    const addTodoAndClear = (text: string) => {
      if (text.length === 0) return;
      store.addTodo(text);
      todo.value = '';
    };

    return { addTodoAndClear, finishedTodos, todo, todoList };
  },
};
</script>

<style scoped>
button:hover {
  border-color: var(--color-border-hover);
  transition: border 0.1s ease-in-out;
}

button:active {
  border-color: var(--color-border);
  transition: border 0.1s ease-in-out;
}

form {
  display: flex;
  flex-direction: column;
  width: 100%;
}

label {
  font-size: var(--font-size-heading);
}

header {
  align-items: baseline;
  justify-content: space-between;
  display: flex;
}

input {
  border: 0.2rem solid var(--color-border);
  border-radius: 0.4rem;

  font-size: var(--font-size-small);

  padding: 1rem 0.5rem;

  height: 3.6rem;
  width: 100%;
}

p {
  text-align: end;
}

.input-group-wrapper {
  display: flex;
  gap: 2rem;
  padding: 2rem 0;
}
</style>
