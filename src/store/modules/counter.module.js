export default {
    state()
    {
        return {
            count: 0
        }
    },
    mutations: { //methods
        plus(state)
        {
            state.count++;
        },
        minus(state)
        {
            state.count--;
        },
        reset(state)
        {
            state.count = 0;
        },
        setDefault(state, payload)
        {
            state.count = payload;
        }

    },
}