<script>
    /*
        One way data binding:
        We can only update the name by button and input text, but when we change it by button, we don't affect the value of the input text.
    */
    let name = "John";

    const onInput = (e) => {
        name = e.target.value;
    }

    const onReset = () => {
        name = "John"
    }
</script>

<main class="main">
	<div class="content">
        <h3 class="result">Hello: {name}</h3>
        <input type="text" placeholder="Enter a value here" class="input" on:input={onInput} />
        <button class="button" on:click={onReset}>Reset</button>
    </div>
</main>

<style>
    .main {
        display: block;
        padding: 0px 16px;
    }

    .content {
        display: grid;
        column-gap: 12px;
        grid-template-columns: repeat(12, minmax(0, 1fr));
        grid-template-rows: auto auto;
    }

    .result {
        grid-column: 5/9;
    }

    .input {
        font-size: 16px;
        line-height: 24px;
        border: 1px solid #EBEDF0;
        padding: 12px 16px;
        border-radius: 6px;
        grid-column: 5/8;
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
        grid-column: 8/9;
    }
</style>