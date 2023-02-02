<script>
    import Content from "./Content.svelte";
    import Modal from "./Modal.svelte";

    // once - makes sure the event can only fire once (removes handler)
    // preventDefault - prevent the default action (run e.preventDefault())
    // self - only fires the event if the clicked element is the target

    let people = [
        { id: 1, name: "John", age: 17 },
        { id: 2, name: "Mario", age: 24},
        { id: 3, name: "Sarah", age: 31}
    ];

    let showModal = false;

    const onClick = () => {
        showModal = !showModal;
    }
</script>

<main class="main">
    <h1 >Hello there!</h1>
	<Content on:open={onClick} {people} />
    <Modal {showModal} on:click={onClick} />
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