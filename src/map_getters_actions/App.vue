<template>
  <div class="container py-4">
    <h1>Todo App</h1>

    <FormAdd />

    <hr>

    <TodoList />

    <hr>

    <Counter />
  </div>
</template>

<script>

import FormAdd from './components/FormAdd.vue'
import TodoList from './components/TodoList.vue'

import Counter from './components/Counter.vue'


export default {
  components: {
    FormAdd,
    TodoList,
    Counter
  }
}
</script>