<script>
    import Content from "./Content.svelte";

    let people = [
        { id: 1, name: "John", age: 17 },
        { id: 2, name: "Mario", age: 24},
        { id: 3, name: "Sarah", age: 31}
    ];
</script>

<main class="main">
    <h1 >Hello there!</h1>
	<Content {people} />
</main>

<style>
    .main {
        display: block;
        padding: 0px 16px;
    }
    
    h1 {
        text-align: center;
    }
</style>