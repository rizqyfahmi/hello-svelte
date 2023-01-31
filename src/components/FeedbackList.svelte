<script>
    import { fade, scale } from "svelte/transition";
    import FeedbackItem from "./FeedbackItem.svelte"
    import { FeedbackStore } from "../stores";
</script>

{#each $FeedbackStore as item (item.id)}
    <div in:scale out:fade="{{ duration: 500 }}">
        <FeedbackItem item={item} on:delete-feedback/>
    </div>
{/each}