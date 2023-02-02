<script>
    import { createEventDispatcher } from "svelte";

    export let people;

    const dispatch = createEventDispatcher();

    const onClick = () => {
        dispatch("open")
    }
</script>

<div class="content">
    <button class="column-center btn-modal" on:click|once={onClick}>Open Modal</button>
    {#each people as person (person.id)}
        <div class="column-center item">
            <div class="item-content">
                {person.name}
            </div>
            {#if person.age > 25}
                <div class="item-category">Gen Z</div>
            {:else if person.age > 17}
                <div class="item-category">Gen Y</div>
            {:else}
                <div class="item-category">Gen Alpha</div>
            {/if}
            <button class="item-delete" class:btn-disable={person.age > 25} disabled={person.age > 25} on:click={() => { people = people.filter((p) => p.id != person.id) }}>x</button>
        </div>
    {:else}
        <div class="column-center result">There are no people to know</div>
    {/each}
</div>

<style>
    .content {
        display: grid;
        row-gap: 12px;
        grid-template-columns: repeat(12, minmax(0, 1fr));
        grid-template-rows: auto auto;
        color: #1BB0DF
    }

    .column-center {
        grid-column: 5/9;    
    }

    .result {
        border: 1px solid #EBEDF0;
        padding: 12px;
        background: #ffffff;
        border-radius: 8px;
    }

    .item {
        border: 1px solid #EBEDF0;
        padding: 12px;
        background: #ffffff;
        border-radius: 8px;
        display: flex
    }

    .item-content {
        flex: 1
    }

    .item-delete {
        background-color: #FF3636;
        border: 0px;
        color: #ffffff;
        height: 24px;
        width: 24px;
        border-radius: 8px;
    }

    .item-category {
        margin-right: 8px;
    }

    .btn-disable {
        background: #99a6b3;
        color: #ffffff
    }

    .btn-modal {
        border-radius: 8px;
        padding: 12px;
        border: 0px;
        color: #ffffff;
        background-color: #F07126;
    }
</style>