export default {
    namespaced: true,
    state()
    {
        return {
            Todos: [],
            counterTodos: 0
        }
    },
    mutations: { //methods
        plus(state)
        {
            state.counterTodos++;
        },
    },
    actions: { //methods async
        addTodo({ state }, todo)
        {
            state.Todos.push({ ...todo, id: Date.now() })
        },
        removeTodo({ state }, todo_id)
        {
            state.Todos = state.Todos.filter((el) => el.id != todo_id)
        },
        changeTodo({ state }, { todo_id, status })
        {
            let _todo = state.Todos.find((el) => el.id == todo_id)

            _todo.status = status
        }
    },
    getters: { //computed
        getTodoCount(state)
        {
            return state.Todos.length;
        }
    }
}