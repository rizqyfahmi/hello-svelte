<script>
    import Footer from "./components/Footer.svelte";
    import Form from "./components/Form.svelte";
    import Header from "./components/Header.svelte";
    import PollList from "./components/PollList.svelte";
    import Tab from "./components/Tab.svelte";

    let tabItems = ["Current Polls", "Add New Poll"];
    let activeItem = "Current Polls";

    let polls = [];

    const onSubmitForm = (value) => {
      polls = [
        ...polls,
        value.detail
      ]
      activeItem = tabItems[0];
    }
</script>

<Header />
<main>
  <Tab items={tabItems} {activeItem} on:TabClick={(data) => (activeItem = data.detail)} />
  {#if activeItem === tabItems[0]}
    <PollList items={polls} />
  {:else}
    <Form on:submit={onSubmitForm}/>
  {/if}
</main>
<Footer />

<style>
	main{
    width: 100%;
    max-width: 960px;
    margin: 40px auto 0px auto;
  }
</style>
