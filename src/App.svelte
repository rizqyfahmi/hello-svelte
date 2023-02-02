<script>
    let people = [
        { id: 1, name: "John" },
        { id: 2, name: "Mario" },
        { id: 3, name: "Sarah" }
    ];
</script>

<main class="main">
	<div class="content">
        {#each people as person (person.id)}
            <div class="result">{person.name}</div>
        {:else}
            <div class="result">There are no people to know</div>
        {/each}
    </div>
</main>

<style>
    .main {
        display: block;
        padding: 0px 16px;
    }

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
</style>