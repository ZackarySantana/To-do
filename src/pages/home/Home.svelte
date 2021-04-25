<script>
  import Profile from "./Profile.svelte";
  import Todos from "./Todos.svelte";
  import LoadSettings from "../settings/LoadSettings.svelte";

  export let user;
  export let openSettings;
  export let modeChange;
</script>

<section>
  {#if $user}
    <Profile {...$user} {openSettings} />
    <Todos uid={$user.uid} />

    <LoadSettings uid={$user.uid} {modeChange} />
  {/if}
</section>

<style>
  section {
    background: var(--parent-background);
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
  }

  @media only screen and (max-width: 1200px) {
    section {
      height: fit-content;
      flex-direction: column;
    }
  }
</style>
