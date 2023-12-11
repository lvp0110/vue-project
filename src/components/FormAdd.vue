<template>
    <form @submit.prevent="addTodo(todo)">
        <div class="py-1">
            <label class="form-label">Todo title</label>
            <input type="text" class="form-control" v-model="todo.title">
        </div>
        <div class="py-1">
            <button class="btn btn-success">Add</button>
        </div>
    </form>
</template>

<script>

import { mapActions } from 'vuex'


export default {
    data()
    {
        return {
            todo: {
                status: false,
                title: ''
            }
        }
    },
    methods: {
        ...mapActions(['addTodo'])
    }
}
</script>