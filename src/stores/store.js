import { derived, readable, writable } from "svelte/store"

export const count = writable(0)
export const currentDate = readable(new Date())
export const color = derived(count, (value) => {
    if (value % 2 == 0) {
        return "#F07126"
    }

    return "#A084DC"
})