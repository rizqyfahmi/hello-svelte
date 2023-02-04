<script>
    import { createEventDispatcher } from "svelte";
    import Card from "./Card.svelte";

    export let poll;

    $: totalVote = poll.voteA + poll.voteB;
    $: percentA = ((poll.voteA / totalVote) * 100)
    $: percentB = ((poll.voteB / totalVote) * 100)

    const dispatch = createEventDispatcher();
    const onVote = (id, key) => {
        dispatch("vote", { id, key });
    }
</script>
<Card>
    <div class="poll">
        <h3>{poll.question}</h3>
        <p>Total votes: {totalVote}</p>
        <div class="answer" on:mousedown={() => onVote(poll.id, "voteA")}>
            <div class="percent percent-a" style="width: {percentA}%"></div>
            <span>{poll.answerA} ({poll.voteA})</span>
        </div>
        <div class="answer" on:mousedown={() => onVote(poll.id, "voteB")}>
            <div class="percent percent-b" style="width: {percentB}%"></div>
            <span>{poll.answerB} ({poll.voteB})</span>
        </div>
    </div>
</Card>
<style>
    .poll {
        display: block;
    }

    p {
        margin-top: 8px;
        font-size: 14px;
        line-height: 24px;
    }

    .answer {
        cursor: pointer;
        background-color: #fafafa;
        margin: 12px auto;
        border-radius: 8px;
        position: relative;
        overflow: hidden;
    }

    .answer:hover {
        opacity: 0.6;
    }

    .percent {
        position: absolute;
        height: 100%;
        box-sizing: border-box;
    }

    .percent-a {
        background-color: rgba(242, 127, 60, .2)
    }

    .percent-b {
        background-color: rgba(46, 144, 250, .2)
    }

    span {
        display: inline-block;
        padding: 10px;
    }
</style>