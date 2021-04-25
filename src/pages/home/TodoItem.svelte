<script>
  import { fly } from "svelte/transition";
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
  <button on:click={remove}>🗑️</button>
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
    margin-left: 0.2em;
    min-width: 1.75em;
    color: var(--primary);
  }

  button:hover {
    text-shadow: 0 0 5px var(--primary);
  }

  h2 {
    color: var(--primary);
    display: inline;
    margin-right: 0.5em;
  }
</style>
