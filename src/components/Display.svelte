<script>
    import { onDestroy } from "svelte";
    import { count } from "../stores/store";
    
    let localCount = 0
    const unsubscribe = count.subscribe((currentCount) => {
        localCount = currentCount;
    })

    onDestroy(() => {
        unsubscribe()
    })
</script>
<h3>Counter: {localCount}</h3>
<style></style>