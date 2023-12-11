<template>
  <div class="container py-4">
    <h1>Todo App</h1>

    <FormAdd @add="addTodo" />

    <hr>

    <TodoList :todos="Todos" :remove="removeTodo" :change="changeTodo" />

    <hr>

  </div>
</template>

<script>

import FormAdd from './components/FormAdd.vue'
import TodoList from './components/TodoList.vue'




export default {
  components: {
    FormAdd,
    TodoList,
    Counter
  },
  data()
  {
    return {
      Todos: []
    }
  },
  methods: {
    addTodo(todo)
    {
      this.Todos.push({ ...todo, id: Date.now() })
      console.log(this.Todos)
    },
    removeTodo(todo_id)
    {
      this.Todos = this.Todos.filter((el) => el.id != todo_id)
    },
    changeTodo(todo_id, status)
    {
      console.log(todo_id, status)

      let _todo = this.Todos.find((el) => el.id == todo_id)

      console.log(_todo)

      _todo.status = status
    }
  }
}
</script>