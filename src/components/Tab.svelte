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
        padding: 0px 8px;
    }

    li.active {
        color: #F27F3C;
    }
</style>