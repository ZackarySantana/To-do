<script>
  import { authState } from "rxfire/auth";

  import { auth, googleProvider } from "./firebase";
  import Profile from "./Profile.svelte";
  import Todos from "./Todos.svelte";

  let user = authState(auth);

  function login() {
    auth.signInWithPopup(googleProvider);
  }
</script>

<section>
  {#if $user}
    <Profile {...$user} />
    <button on:click={() => auth.signOut()}>Logout</button>
    <hr />
    <Todos uid={$user.uid} />
  {:else}
    <button on:click={login}>Log in with Google</button>
  {/if}
</section>

<style>
  section {
    background: rgb(235, 235, 235);
    padding: 20px;
  }
</style>
