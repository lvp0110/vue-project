<template>
    <div class="list-group-item d-flex align-items-center justify-content-between">
        <div>
            <span><input type="checkbox" class="form-check-input" @change="$emit('changeTodo', id, $event.target.checked)" :checked="status"> {{ status ? 'Complete' : 'Uncomplete' }}</span>
            <h4>{{ title }}</h4>
        </div>

        <button class="btn btn-danger" @click="$emit('removeTodo', id)">Remove</button>
    </div>
</template>

<script>
export default {
    props: ['id', 'title', 'status']
}
</script>