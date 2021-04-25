<script>
  import { authState } from "rxfire/auth";
  import { NotificationDisplay } from "@beyonk/svelte-notifications";

  import { auth } from "../firebase/firebase";
  import Home from "./home/Home.svelte";
  import Login from "./login/Login.svelte";

  let user = authState(auth);
</script>

<NotificationDisplay />

{#if $user}
  <Home {user} />
{:else}
  <Login />
{/if}
