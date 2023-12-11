<template>
    <div class="list-group" v-if="Todos.length">

        <h1>Count todos: {{ getTodoCount }}</h1>

        <TodoRow v-for="todo in Todos" 
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
        ...mapState(['Todos']),
        ...mapGetters(['getTodoCount'])
    }
}
</script>