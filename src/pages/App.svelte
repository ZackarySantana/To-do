<script>
  import { authState } from "rxfire/auth";

  import { auth } from "../firebase/firebase";
  import Home from "./home/Home.svelte";
  import Login from "./login/Login.svelte";

  let user = authState(auth);
</script>

{#if $user}
  <Home {user} />
{:else}
  <Login />
{/if}
