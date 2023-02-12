<script>
    import Button from "./components/Button.svelte";
    import Display from "./components/Display.svelte";
    import Footer from "./components/Footer.svelte";
    import Header from "./components/Header.svelte";
    import { count, customCount } from "./stores/store";

    const onIncreament = () => {
      count.update((currentCount) => {
        return currentCount + 1
      })
    }

    const onDecreament = () => {
      count.update((currentCount) => {
        return currentCount - 1
      })
    }

    const onReset = () => {
      count.set(0)
    }
    
</script>

<Header />
<main>
  <div class="counter-container">
    <div class="counter-full">
      <Display {count} />
    </div>
    <Button on:click={onIncreament}>Increament</Button>
    <Button on:click={onDecreament}>Decreament</Button>
    <Button on:click={onReset}>Reset</Button>
    <Button on:click={() => customCount.onIncreament(2)}>Increament</Button>
    <Button on:click={() => customCount.onDecreament(2)}>Decreament</Button>
    <Button on:click={() => customCount.onReset()}>Reset</Button>
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
