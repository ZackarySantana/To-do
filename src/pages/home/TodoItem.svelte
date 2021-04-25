<script>
  import { fade, fly } from "svelte/transition";
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();

  function remove() {
    dispatch("remove", { id });
  }

  function toggleStatus() {
    let newStatus = !complete;
    dispatch("toggle", {
      id,
      newStatus,
    });
  }

  export let id;
  export let text;
  export let complete;
</script>

<li in:fly={{ x: 100, duration: 500 }}>
  <h2 class:complete>{text}</h2>
  <button on:click={toggleStatus}>{complete ? "✔️" : "❌"}</button>
  <button on:click={remove}> 🗑 </button>
</li>

<style>
  .complete {
    text-decoration: line-through;
    color: green;
  }

  li {
    margin-bottom: 0.5em;
  }
  button {
    font-size: 1.75em;
  }

  h2 {
    color: #eeeeee;
    display: inline;
    margin-right: 0.5em;
  }
</style>
