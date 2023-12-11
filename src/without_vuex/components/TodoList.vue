<template>
    <div class="list-group" v-if="todos.length">
        <TodoRow v-for="todo in todos" 
                :key="todo.id" 
                :id="todo.id"
                :title="todo.title"
                :status="todo.status"  
                @removeTodo="remove"
                @changeTodo="change"      
        />
    </div>

    <h2 class="text-muted" v-else>No todos</h2>
</template>

<script>

import TodoRow from './TodoRow.vue'

export default {
    components: {
        TodoRow
    },
    props: ['todos', 'remove', 'change']
}
</script>