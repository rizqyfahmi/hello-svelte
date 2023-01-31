<script>
    import { fade, scale } from "svelte/transition";
    import FeedbackItem from "./FeedbackItem.svelte"
    export let feedback;
</script>

{#each feedback as item (item.id)}
    <div in:scale out:fade="{{ duration: 500 }}">
        <FeedbackItem item={item} on:delete-feedback/>
    </div>
{/each}