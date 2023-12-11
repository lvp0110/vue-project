<template>
    <form @submit.prevent="$emit('add', todo)">
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
export default {
    data()
    {
        return {
            todo: {
                status: false,
                title: ''
            }
        }
    }
}
</script>