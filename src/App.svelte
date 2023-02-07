<script>
    import { onMount, setContext } from "svelte";
    import Footer from "./components/Footer.svelte";
    import Form from "./components/Form.svelte";
    import Header from "./components/Header.svelte";
    import PollList from "./components/PollList.svelte";
    import Tab from "./components/Tab.svelte";
    import PollStore from "./stores/PollStore";

    let tabItems = ["Current Polls", "Add New Poll"];
    let activeItem = "Current Polls";
    let polls = [];

    const greeting = "Hello World";
    setContext('greeting-context', greeting);

    const onSubmitForm = () => {
      activeItem = tabItems[0];
    }

    const onVote = (data) => {
      const { id, key } = data.detail;
      const tempPolls = [...polls];
      const selectedPoll = tempPolls.find((poll) => poll.id == id)
      
      selectedPoll[key]++;

      polls = tempPolls;
    }

    onMount(async () => {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      const data = await response.json();

      PollStore.update((currentPolls) => {
        const result = data.reduce((accumulator, currentValue) => {
          return [
            ...accumulator,
            {
              id: currentValue.id,
              question: currentValue.title,
              answerA: 'An answer A',
              answerB: 'An answer B',
              voteA: 0,
              voteB: 0,
            }
          ];
        }, []);

        return [...currentPolls, ...result];
      })
    });
</script>

<Header />
<main>
  <Tab items={tabItems} {activeItem} on:TabClick={(data) => (activeItem = data.detail)} />
  {#if activeItem === tabItems[0]}
    <PollList on:vote={onVote} />
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
