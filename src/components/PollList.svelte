<script>
    import PollItem from "./PollItem.svelte";

    export let items = [];
</script>
<div class="content">
    {#each items as item (item.id)}
        <PollItem poll={item} on:vote />
    {:else}
        <p class="no-data">There are no polls yet</p>
    {/each}
</div>
<style>
    .content {
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 12px;
    }
    
    .no-data {
        grid-column: 1/3;
        text-align: center;
    }
</style>