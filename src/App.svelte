<script>
    import Footer from "./components/Footer.svelte";
    import Form from "./components/Form.svelte";
    import Header from "./components/Header.svelte";
    import Tab from "./components/Tab.svelte";

    let items = ["Current Polls", "Add New Poll"];
    let activeItem = "Current Polls";
</script>

<Header />
<main>
  <Tab {items} {activeItem} on:TabClick={(data) => (activeItem = data.detail)} />
  {#if activeItem === items[0]}
    <p>Poll list goes here</p>
  {:else}
    <Form />
  {/if}
</main>
<Footer />

<style>
	main{
    width: 100%;
    max-width: 960px;
    margin: 40px auto;
  }
</style>
