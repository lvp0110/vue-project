import { createStore } from 'vuex';

import todos from './modules/todos.module'
import Counter from './modules/counter.module'

export default createStore({
    modules: {
        todos,
        Counter
    }
})