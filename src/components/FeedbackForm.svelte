<script>
    import Button from "./Button.svelte";
    import Card from "./Card.svelte";

    let text = '';
    let btnDisable = true;
    let min = 10;
    let message = '';

    const onInput = () => {
        if (text.trim().length <= min) {
            message = `Text must be at least ${min} characters`
            btnDisable = true;
            return;
        }

        message = '';
        btnDisable = false;
    }
</script>

<Card>
    <header>
        <h2>How would you rate your service with us?</h2>
    </header>
    <form>
        <div class="input-group">
            <input type="text" on:input={onInput} bind:value={text} placeholder="Tell us something that keeps you comming back" />
            <Button type="submit" disabled={btnDisable}>Send</Button>
        </div>
        {#if message}
            <div class="message">
                {message}
            </div>
        {/if}
    </form>
</Card>

<style>
    header {
        max-width: 400px;
        margin: auto;
    }
    header h2 {
        font-size: 22px;
        font-weight: 600;
        text-align: center;
    }
    .input-group {
        display: flex;
        flex-direction: row;
        border: 1px solid #ccc;
        padding: 8px 10px;
        border-radius: 8px;
        margin-top: 15px;
    }
    input {
        flex-grow: 2;
        border: none;
        font-size: 16px;
    }
    input:focus {
        outline: none;
    }
    .message{
        padding-top: 10px;
        text-align: center;
        color: rebeccapurple;
    }
</style>