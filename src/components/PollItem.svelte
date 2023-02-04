<script>
    import Card from "./Card.svelte";

    export let poll;

    $: totalVote = poll.voteA + poll.voteB;
</script>
<Card>
    <div class="poll">
        <h3>{poll.question}</h3>
        <p>Total votes: {totalVote}</p>
        <div class="answer">
            <div class="percent percent-a"></div>
            <span>{poll.answerA} ({poll.voteA})</span>
        </div>
        <div class="answer">
            <div class="percent percent-b"></div>
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
    }

    .answer:hover {
        opacity: 0.6;
    }

    span {
        display: inline-block;
        padding: 10px;
    }
</style>