<script>
    export let showModal = false;
    export let isPromo = false;
</script>

{#if showModal}
  <div class="backdrop" class:promo={isPromo} on:mousedown|self>
    <div class="modal">
      <slot></slot>
    </div>
  </div>
{/if}

<style>
  .backdrop{
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    position: fixed;
    background: rgba(0,0,0,0.8);
  }
  .modal{
    padding: 10px;
    border-radius: 10px;
    max-width: 400px;
    margin: 10% auto;;
    text-align: center;
    background: white;
  }
  .promo .modal{
    background: crimson;
    color: white;
  }
</style>