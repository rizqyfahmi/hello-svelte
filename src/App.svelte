<script>
    import Button from "./components/Button.svelte";
    import Display from "./components/Display.svelte";
    import Footer from "./components/Footer.svelte";
    import Header from "./components/Header.svelte";

    let count = 0;
    const onIncreament = () => {
        count++;
    }

    const onDecreament = () => {
        count++;
    }

    const onReset = () => {
        count = 0
    }
    
</script>

<Header />
<main>
  <div class="counter-container">
    <div class="counter-full">
      <Display {count} />
    </div>
    <Button on:click={onIncreament}>Up</Button>
    <Button on:click={onDecreament}>Down</Button>
    <Button on:click={onReset}>Reset</Button>
  </div>
</main>
<Footer />

<style>
	main{
    width: 100%;
    max-width: 960px;
    margin: 40px auto 0px auto;
  }

  .counter-container {
    display: grid;
    column-gap: 12px;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    grid-template-rows: repeat(3, minmax(0, max-content));
  }

  .counter-full {
    grid-column: span 3;
  }
</style>
