<script>
  import Profile from "./Profile.svelte";
  import Todos from "./Todos.svelte";

  export let user;
</script>

<section>
  {#if $user}
    <Profile displayName={$user.displayName} photoURL={$user.photoURL} />
    <Todos />
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
