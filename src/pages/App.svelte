<script>
  import { authState } from "rxfire/auth";
  import { NotificationDisplay } from "@beyonk/svelte-notifications";

  import { auth } from "../firebase/firebase";
  import Home from "./home/Home.svelte";
  import Login from "./login/Login.svelte";
  import Styles from "./styles/Styles.svelte";

  let darkmode = false;
  let user = authState(auth);
</script>

<NotificationDisplay />
<Styles {darkmode} />

{#if $user}
  <Home {user} />
{:else}
  <Login />
{/if}

{#if !darkmode}
  <style>
    :root {
      --parent-background: #14161a;
      --background: #121212;
      --primary: #eeeeee;
      --secondary: #555;
      --third: #333;

      --first_shadow: -2px -2px 3px rgba(255, 255, 255, 0.09);
      --second_shadow: 3px 3px 3px rgba(0, 0, 0, 0.5);

      --section_shadow: 0px 0px 30px rgba(0, 0, 0, 0.8);
    }
  </style>
{:else}
  <style>
    :root {
      --parent-background: #14161a;
      --background: #121212;
      --primary: #eeeeee;
      --secondary: #555;
      --third: #333;

      --first_shadow: -2px -2px 3px rgba(255, 255, 255, 0.09);
      --second_shadow: 3px 3px 3px rgba(0, 0, 0, 0.5);

      --section_shadow: 0px 0px 30px rgba(0, 0, 0, 0.8);
    }
  </style>
{/if}
