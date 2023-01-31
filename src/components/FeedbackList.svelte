<script>
    import FeedbackItem from "./FeedbackItem.svelte"
    export let feedback;
</script>

{#each feedback as item (item.id)}
    <FeedbackItem item={item}/>
{/each}