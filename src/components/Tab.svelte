<script>
    import { createEventDispatcher } from "svelte";

    export let items = [];
    export let activeItem = "";

    const dispatch = createEventDispatcher()
    const onClick = (item) => {
        dispatch("TabClick", item)
    }
</script>

<div class="d-flex justify-center">
    <ul class="d-flex justify-center no-p">
        {#each items as item}
            <li class:active={item === activeItem} on:mousedown={() => onClick(item)}>{item}</li>
        {/each}
    </ul>
</div>

<style>
    .d-flex {
        display: flex;
    }

    .no-p {
        padding: 0;
    }

    .justify-center {
        justify-content: center;
    }

    ul {
        list-style: none;
    }

    li {
        padding: 12px;
    }

    li.active {
        color: #F27F3C;
        border-bottom: 2px solid #F27F3C;
    }
</style>