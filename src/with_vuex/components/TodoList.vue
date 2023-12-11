<template>
    <div class="list-group" v-if="$store.state.Todos.length">

        <h1>Count todos: {{ $store.getters.getTodoCount }}</h1>

        <TodoRow v-for="todo in $store.state.Todos" 
                :key="todo.id" 
                :id="todo.id"
                :title="todo.title"
                :status="todo.status"    
        />
    </div>

    <h2 class="text-muted" v-else>No todos</h2>
</template>

<script>

import TodoRow from './TodoRow.vue'

export default {
    components: {
        TodoRow
    }
}
</script>