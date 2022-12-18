<template>
  <div
    class="todo-item-wrapper"
    :class="{ isFinished: todo.isFinished }"
    v-for="todo in todoList"
    :key="todo.id"
  >
    <font-awesome-icon icon="fa-solid fa-minus" />
    <p class="todo-text" :data-tooltip="todo.text">{{ todo.text }}</p>
    <span class="action-wrapper">
      <button @click.stop="toggleCompleted(todo.id)">
        <font-awesome-icon
          v-if="todo.isFinished"
          icon="fa-solid fa-rotate-right"
        />
        <font-awesome-icon v-else icon="fa-solid fa-check" />
      </button>
      <button @click.stop="removeTodo(todo.id)">
        <font-awesome-icon icon="fa-regular fa-trash-can" />
      </button>
    </span>
  </div>
</template>

<script lang="ts">
import { useTodoStore } from "../stores/todos";
import { storeToRefs } from "pinia";
export default {
  setup() {
    const store = useTodoStore();
    const { todoList } = storeToRefs(store);
    const { removeTodo, toggleCompleted } = store;

    return { removeTodo, todoList, toggleCompleted };
  },
};
</script>

<style scoped>
.todo-item-wrapper {
  align-items: center;
  display: flex;
  gap: 1rem;
  height: 4rem;
}

button {
  background-color: transparent;
  border: none;
  color: var(--color-text);
  cursor: pointer;
  max-width: 100%;
}

input {
  cursor: pointer;
}

.action-wrapper {
  margin: 0 0 0 auto;
}

.isFinished {
  text-decoration: line-through;
}

.todo-text {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>
