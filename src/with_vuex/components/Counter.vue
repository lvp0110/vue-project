<template>
    <h1>{{ $store.state.count }}</h1>

    <button class="btn btn-danger" @click="$store.commit('minus')">Minus</button>
    <button class="btn btn-primary" @click="$store.commit('plus')">Plus</button>
    <button class="btn btn-secondary" @click="$store.commit('reset')">Reset</button>
    <button class="btn btn-secondary" @click="$store.commit('default', 10)">Set default</button>


</template>