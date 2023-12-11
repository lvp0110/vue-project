<template>

    <h1>{{ $store.state.todos.counterTodos }}</h1>

    <button @click="$store.commit('todos/plus')">todo count +</button>

    <div class="list-group" v-if="$store.state.todos.Todos.length">

        <h1>Count todos: {{ getTodoCount }}</h1>

        <TodoRow v-for="todo in $store.state.todos.Todos" 
                :key="todo.id" 
                :id="todo.id"
                :title="todo.title"
                :status="todo.status"    
        />
    </div>

    <h2 class="text-muted" v-else>No todos</h2>
</template>

<script>

import { mapState, mapGetters } from 'vuex'

import TodoRow from './TodoRow.vue'

export default {
    components: {
        TodoRow
    },
    computed: {
        ...mapGetters(['getTodoCount'])
    },
    created()
    {
        console.log(mapState({ 
            Todos: 'todos/Todos' 
        }))
    }
}
</script>