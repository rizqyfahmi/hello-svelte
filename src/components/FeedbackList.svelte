<script>
    import { onDestroy, onMount } from "svelte";
    import { fade, scale } from "svelte/transition";
    import FeedbackItem from "./FeedbackItem.svelte"
    import { FeedbackStore } from "../stores";
    
    let feedback = [];
    
    const unsubscribe = FeedbackStore.subscribe((data) => feedback = data);

    onMount(() => {
        console.log("mounted")
    })

    onDestroy(() => {
        unsubscribe();
    })
</script>


{#each feedback as item (item.id)}
    <div in:scale out:fade="{{ duration: 500 }}">
        <FeedbackItem item={item} on:delete-feedback/>
    </div>
{/each}