<template>
    <h1>{{ $store.state.Counter.count }}</h1>

    <button class="btn btn-danger" @click="minus">Minus</button>
    <button class="btn btn-primary" @click="plus">Plus</button>
    <button class="btn btn-secondary" @click="reset">Reset</button>
    <button class="btn btn-secondary" @click="setDefault(10)">Set default</button>


</template>

<script>

import { mapState, mapMutations } from 'vuex'


//mapState
//mapGetters
//--computed 

//mapMutations
//mapActions
//--methods


export default {
    methods: {
        ...mapMutations(['minus', 'plus', 'reset', 'setDefault'])
    }
}
</script>