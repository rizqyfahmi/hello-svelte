<script>

    import { fade } from "svelte/transition";

</script>
<div class="container" transition:fade>
    <slot></slot>
</div>
<style>
    .container {
        background: #FFFFFF;
        box-shadow: 0px 0px 1px rgba(40, 41, 61, 0.04), 0px 2px 4px rgba(96, 97, 112, 0.16);
        border-radius: 8px;
        padding: 16px;
    }
</style>