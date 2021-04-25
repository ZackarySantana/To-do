<script>
  import { fade, fly } from "svelte/transition";
  import { createEventDispatcher } from "svelte";

  export let darkmode;

  const dispatch = createEventDispatcher();

  function modeChange() {
    dispatch("modeChange");
  }

  function close() {
    dispatch("close");
  }
</script>

<div class="parent" in:fade={{ duration: 500 }} out:fade={{ duration: 500 }}>
  <section
    class="body"
    in:fly={{ y: -500, duration: 500 }}
    out:fly={{ y: 500, duration: 500 }}
  >
    <h1>Settings</h1>
    <div class="settings-box">
      <section>
        <h2>Mode</h2>
        <button on:click={modeChange}>{darkmode ? "🌑" : "☀️"}</button>
      </section>
    </div>
    <section class="x-button">
      <button class="dark" on:click={close}>❌</button>
    </section>
  </section>
  <div class="background" />
</div>

<style>
  .settings-box {
    padding: 3em 3em 3em 3em;
    width: 100%;
  }

  .settings-box section {
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
  }

  .settings-box section * {
    margin: 0 1em;
  }

  .settings-box section *:first-child {
    margin-right: auto;
  }

  .x-button {
    margin-bottom: 2em;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .x-button button {
    width: 2em;
  }

  .body {
    background: var(--background);
    filter: drop-shadow(var(--section_shadow));

    height: fit-content;
    z-index: 5;
    border-radius: 100px;

    min-height: 30vh;
    min-width: 20vw;

    display: flex;
    align-items: center;
    flex-direction: column;
  }

  .parent {
    position: fixed;
    top: 0;
    right: 0;
    height: 100vh;
    width: 100vw;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
  }

  .background {
    position: fixed;
    background: var(--transparent-parent-background);
    height: 100vh;
    width: 100vw;
  }

  @media only screen and (max-width: 1200px) {
    section {
      width: 80vw;
    }
  }
</style>
