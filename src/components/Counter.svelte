<script context="module">
    export let totalCount = 0;

    export const getTotalCount = () => {
        return totalCount;
    }
</script>
<script>
    import Button from "./Button.svelte";
    let counter = 0;
</script>

<div>
    <h1>Counter: {counter}</h1>
    <Button on:click={() => {
        counter++;
        totalCount++;
    }}>Add More</Button>
</div>