<script>
  export let user;

  import Profile from "./Profile.svelte";
  import Todos from "./Todos.svelte";

  console.log(user);
</script>

<section>
  {#if $user}
    <Profile {...$user} />
    <Todos uid={$user.uid} />
  {/if}
</section>

<style>
  section {
    background: #14161a;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
  }
</style>
