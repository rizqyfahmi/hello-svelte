<script>
    let firstname = "";
    let lastname = "";

    // React to changes in either the firstname or lastname. 
    $: fullname = `${firstname} ${lastname}`;
</script>

<main class="main">
	<div class="content">
        <h3 class="result">Hello: {fullname}</h3>
        <input type="text" placeholder="Enter your first name here..." class="input-firstname" bind:value={firstname}/>
        <input type="text" placeholder="Enter your last name here..." class="input-lastname" bind:value={lastname}/>
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

    input {
        font-size: 16px;
        line-height: 24px;
        border: 1px solid #EBEDF0;
        padding: 12px 16px;
        border-radius: 6px;
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

    .input-firstname {
        grid-column: 5/7;
    }

    .input-lastname {
        grid-column: 7/9;
    }
</style>