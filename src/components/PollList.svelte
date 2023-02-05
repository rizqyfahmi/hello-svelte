<script>
    import PollItem from "./PollItem.svelte";
    import PollStore from "../stores/PollStore";
    import { flip } from "svelte/animate";
</script>

<div class="content">
    {#each $PollStore as item (item.id)}
        <div animate:flip={{duration: 500}}>
            <PollItem poll={item} on:vote />
        </div>
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