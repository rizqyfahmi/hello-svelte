<script>
    import { createEventDispatcher } from "svelte";
    import PollStore from "../stores/PollStore";
    import Button from "./Button.svelte";

    let fields = { question: "", answerA: "", answerB: "" };
    let errorFields = { question: "", answerA: "", answerB: "" };

    const dispatch = createEventDispatcher();
    const onSubmit = () => {
        errorFields.question = "";
        if (fields.question.trim().length === 0) {
            errorFields.question = "This field is required";
        }

        errorFields.answerA = "";
        if (fields.answerA.trim().length === 0) {
            errorFields.answerA = "This field is required";
        }

        errorFields.answerB = "";
        if (fields.answerB.trim().length === 0) {
            errorFields.answerB = "This field is required";
        }

        const isValid = Object.keys(errorFields).filter((key) => !!errorFields[key]).length === 0;
        
        if (!isValid) return;

        const data = {
            ...fields,
            voteA: 0,
            voteB: 0,
            id: Math.random()
        };

        PollStore.update((currentPolls) => [
            ...currentPolls,
            data
        ]);
        
        dispatch("submit")
    }
</script>

<div class="content">
    <form on:submit|preventDefault={onSubmit}>
        <div class="input-group">
            <label for="question">Poll Question: </label>
            <input type="text" id="question" placeholder="Enter a question here..." bind:value={fields.question} />
            {#if errorFields.question}
                <p class="error-message">{errorFields.question}</p>
            {/if}
        </div>
        <div class="input-group">
            <label for="answerA">Answer A: </label>
            <input type="text" id="answerA" placeholder="Enter your first option here..." bind:value={fields.answerA} />
            {#if errorFields.answerA}
                <p class="error-message">{errorFields.answerA}</p>
            {/if}
        </div>
        <div class="input-group">
            <label for="question">Answer B: </label>
            <input type="text" id="question" placeholder="Enter your second option here..." bind:value={fields.answerB} />
            {#if errorFields.question}
                <p class="error-message">{errorFields.question}</p>
            {/if}
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

    .error-message {
        color: #D70C24;
        font-size: 12px;
        line-height: 16px;
        font-weight: 400;
        margin: 8px 0px;
    }
</style>