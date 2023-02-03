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
    <h1>Hello there!</h1>
	<Content on:open={onClick} {people} />
    <Modal {showModal} on:mousedown={onClick}>
        <div slot="description" class="description">Hello World</div>
        <h3>Add a new person</h3>
        <form>
            <input type="text" class="input" placeholder="Enter name here..." />
            <button class="button">Add Person</button>
        </form>
    </Modal>
</main>

<style>
    .main {
        display: block;
        padding: 0px 16px;
    }
    
    h1 {
        text-align: center;
    }
    form {
        display: flex;
    }
    .description {
        margin-top: 8px;
        margin-bottom: 8px;
        color: #03213E
    }
    .input {
        flex: 1;
        font-size: 16px;
        line-height: 24px;
        border: 1px solid #EBEDF0;
        padding: 12px 16px;
        border-radius: 6px;
        margin-right: 12px;
    }
    .input::placeholder {
        color: #B3BCC5;
    }
    .input:-ms-input-placeholder{
        color: #B3BCC5;
    }
    .input::-ms-input-placeholder {
        color: #B3BCC5;
    }
    .button {
        color: #ffffff;
        border: 0px;
        font-size: 16px;
        line-height: 24px;
        background: #F07126;
        padding: 12px 16px;
        border-radius: 8px;
    }
</style>