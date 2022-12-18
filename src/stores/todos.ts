import { defineStore } from "pinia";
import { computed, ref } from "vue";

export const useTodoStore = defineStore("todos", () => {
  const filter = ref("all");
  const nextId = ref<number>(0);
  const todoList = ref<Todo[]>([]);

  const finishedTodos = computed((): Todo[] =>
    todoList.value.filter((todo) => todo.isFinished)
  );

  const unfinishedTodos = computed((): Todo[] =>
    todoList.value.filter((todo) => !todo.isFinished)
  );

  const filteredTodos = computed(() => {
    if (filter.value === "finished") return finishedTodos;
    if (filter.value === "unfinished") return unfinishedTodos;
    return todoList.value;
  });

  const findTodo = (id: Todo["id"]) => {
    const todo = todoList.value.find((todoItem) => todoItem.id === id);
    return todo;
  };

  const addTodo = (text: Todo["text"]) => {
    todoList.value.push({ text, id: nextId.value++, isFinished: false });
  };

  const removeTodo = (idToFind: Todo["id"]) => {
    todoList.value = todoList.value.filter((obj) => {
      return obj.id !== idToFind;
    });
  };

  const toggleCompleted = (idToFind: Todo["id"]) => {
    const todo = findTodo(idToFind);
    if (todo) todo.isFinished = !todo.isFinished;
  };

  return {
    filter,
    nextId,
    todoList,
    finishedTodos,
    unfinishedTodos,
    filteredTodos,
    addTodo,
    removeTodo,
    toggleCompleted,
  };
});

type Todo = {
  id?: number;
  isFinished?: boolean;
  text?: string;
};
