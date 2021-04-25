<script>
  export let user;

  import Profile from "./Profile.svelte";
  import Todos from "./Todos.svelte";
</script>

<section>
  {#if $user}
    <Profile {...$user} />
    <Todos uid={$user.uid} />
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
