<script>
    import { count, currentDate, color, customCount } from "../stores/store";
    import moment from "moment";
    import { onDestroy } from "svelte";

    let date = "00-00-0000 00:00"

    const unsubscribe = currentDate.subscribe((value) => {
        date = moment(value).format("DD-MM-YYYY HH:mm")
    })
    
    

    onDestroy(unsubscribe)
</script>
<h3 style="color: {$color}">Counter: {$count}</h3>
<h3 style="color: {$color}">Custom Counter: {$customCount}</h3>
<h4>Time: {date}</h4>
<style></style>