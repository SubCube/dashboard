import { defineStore } from 'pinia'

export const useStore = defineStore('main', {
	state: (): { counter: number } => ({
		counter: 0,
	}),
	actions: {
		increment() {
			this.counter++
		},
		decrement() {
			this.counter--
		},
	},
	getters: {
		doubleCounter: ({ counter }) => {
			return counter * 2
		},
	},
})
