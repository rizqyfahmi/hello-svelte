<script></script>
<div class="button-container">
    <button>
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
        background: #F07126;
        padding: 12px 16px;
        border-radius: 8px;
    }
</style>