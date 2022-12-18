<template>
  <font-awesome-icon @click="toggleDarkMode" class="pointer" :icon="icon" />
  <TodoForm />
  <TodoList />
</template>

<script lang="ts">
import TodoForm from './TodoForm.vue';
import TodoList from './TodoList.vue';
export default {
  components: { TodoForm, TodoList },
  setup() {
    return {};
  },
  data() {
    return {
      icon: this.prefersDark() ? 'fa-solid fa-sun' : 'fa-solid fa-moon',
    };
  },
  methods: {
    checkDarkMode() {
      /* Assume light theme and default to moon icon */
      let icon = 'fa-solid fa-moon';
      const sun = 'fa-solid fa-sun';

      /* Check user preferred color-scheme */
      const prefersDark = this.prefersDark();
      /* Check if we have already inverted the colour */
      const inverseTheme = document.body.classList.contains('inverse-theme');

      /* Change icon to sun if necessary */
      if (!prefersDark && inverseTheme) icon = sun;
      if (prefersDark && !inverseTheme) icon = sun;

      this.icon = icon;
    },
    prefersDark() {
      return (
        window.matchMedia &&
        window.matchMedia('(prefers-color-scheme: dark)').matches
      );
    },
    toggleDarkMode() {
      document?.body?.classList.toggle('inverse-theme');
      this.checkDarkMode();
    },
  },
};
</script>

<style scoped>
svg {
  align-self: flex-end;
}
</style>
