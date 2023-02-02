<script>
    export let people;
</script>

<div class="content">
    {#each people as person (person.id)}
        <div class="item">
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
            <button class="item-delete" on:click={() => { people = people.filter((p) => p.id != person.id) }}>x</button>
        </div>
    {:else}
        <div class="result">There are no people to know</div>
    {/each}
</div>

<style>

    .content {
        display: grid;
        row-gap: 12px;
        grid-template-columns: repeat(12, minmax(0, 1fr));
        grid-template-rows: auto auto;
    }

    .result {
        grid-column: 5/9;
        border: 1px solid #EBEDF0;
        padding: 12px;
        background: #ffffff;
        border-radius: 8px;
    }

    .item {
        grid-column: 5/9;
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
</style>