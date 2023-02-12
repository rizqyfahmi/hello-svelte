<script>
    import { count, currentDate } from "../stores/store";
    import moment from "moment";
    import { onDestroy } from "svelte";

    let date = "00-00-0000 00:00"

    const unsubscribe = currentDate.subscribe((value) => {
        date = moment(value).format("DD-MM-YYYY HH:mm")
    })

    onDestroy(unsubscribe)
</script>
<h3>Counter: {$count}</h3>
<h4>Time: {date}</h4>
<style></style>