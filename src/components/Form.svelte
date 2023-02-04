<script>
    import Button from "./Button.svelte";

    let fields = { question: "", answerA: "", answerB: "" }
    
    const onSubmit = () => {
        console.log(fields);
    }
</script>

<div class="content">
    <form on:submit|preventDefault={onSubmit}>
        <div class="input-group">
            <label for="question">Poll Question: </label>
            <input type="text" id="question" placeholder="Enter a question here..." bind:value={fields.question} />
        </div>
        <div class="input-group">
            <label for="question">Answer A: </label>
            <input type="text" id="question" placeholder="Enter your first option here..." bind:value={fields.answerA} />
        </div>
        <div class="input-group">
            <label for="question">Answer B: </label>
            <input type="text" id="question" placeholder="Enter your second option here..." bind:value={fields.answerB} />
        </div>
        <Button>Send</Button>
    </form>
</div>

<style>
    .content {
        display: grid;
        grid-template-columns: repeat(3, minmax(0, 1fr));
    }

    form {
        grid-column: 2/3;
    }

    .input-group {
        display: flex;
        flex-direction: column;
    }

    .input-group > label {
        margin: 12px 0px;
    }

    input {
        font-size: 16px;
        line-height: 24px;
        border: 1px solid #EBEDF0;
        padding: 12px 16px;
        border-radius: 6px;
        grid-column: 5/8;
    }
    input::placeholder {
        color: #B3BCC5;
    }
    input:-ms-input-placeholder{
        color: #B3BCC5;
    }
    input::-ms-input-placeholder {
        color: #B3BCC5;
    }

    
</style>