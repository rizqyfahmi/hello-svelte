<script>
    export let color = "#F07126";
</script>
<div class="button-container">
    <button style="background: {color}" on:click>
        <slot></slot>
    </button>
</div>
<style>
    .button-container {
        display: flex;
    }

    .button-container > button {
        flex: 1;
        margin-top: 24px;
        color: #ffffff;
        border: 0px;
        font-size: 16px;
        line-height: 24px;
        padding: 12px 16px;
        border-radius: 8px;
    }
</style>