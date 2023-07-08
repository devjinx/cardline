import { defineStore } from 'pinia';

export const useStore = defineStore('myStore', {
    state: () => ({
        count: 0,
    }),
    getters: {
        doubleCount: (state) => state.count * 2,
    },
    actions: {
        increment() {
            this.count++;
        },
    },
    mutations: {
        setCount(value) {
            this.count = value;
        },
    },
});