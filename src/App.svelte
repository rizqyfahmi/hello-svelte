<script>
    import { onMount, setContext } from "svelte";
    import Button from "./components/Button.svelte";
    import Counter, { getTotalCount, totalCount } from "./components/Counter.svelte";
    import Footer from "./components/Footer.svelte";
    import Form from "./components/Form.svelte";
    import Header from "./components/Header.svelte";
    import PollList from "./components/PollList.svelte";
    import Tab from "./components/Tab.svelte";
    import PollStore from "./stores/PollStore";

    let tabItems = [
      {
        title: "Current Poll",
        component: PollList
      },
      {
        title: "Add a New Poll",
        component: Form
      }
    ];
    let activeItem = tabItems[0];
    let result = 0;

    const greeting = "Hello World";
    setContext('greeting-context', greeting);

    const onSubmitForm = () => {
      console.log("Hello Submit");
      activeItem = tabItems[0];
    }

    const onVote = () => {
      const totalCount = getTotalCount();
      console.log('Hello OnVote: ', totalCount);
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
  <div class="counter-container">
    <div class="counter-total">Total Counter: {result}</div>
    <div class="counter-total">
      <Button on:click={() => {
        result = totalCount;
      }}>Total</Button>
    </div>
    <Counter />
    <Counter />
    <Counter />
  </div>
  <Tab items={tabItems} {activeItem} on:TabClick={(data) => (activeItem = data.detail)} />
  <!-- We don't need to add some events from specific component, we only need to add all event from all components -->
  <svelte:component this={activeItem.component} on:submit={onSubmitForm} on:vote={onVote} />
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
    grid-template-rows: repeat(3, minmax(0, 1fr));
  }

  .counter-total {
    grid-column: span 3;
  }
</style>
