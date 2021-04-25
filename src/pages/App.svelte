<script>
  import { authState } from "rxfire/auth";
  import { NotificationDisplay } from "@beyonk/svelte-notifications";

  import { auth } from "../firebase/firebase";
  import Home from "./home/Home.svelte";
  import Login from "./login/Login.svelte";
  import Styles from "./styles/Styles.svelte";
  import Settings from "./settings/Settings.svelte";

  let darkmode = false;
  let settings = false;
  let user = authState(auth);

  function openSettings() {
    settings = true;
  }

  function closeSettings() {
    settings = false;
  }

  function modeChange(mode) {
    darkmode = !darkmode;
  }
</script>

<NotificationDisplay />
<Styles {darkmode} />

{#if $user}
  <Home {user} {openSettings} />
{:else}
  <Login />
{/if}

{#if settings}
  <Settings {darkmode} on:close={closeSettings} on:modeChange={modeChange} />
{/if}

{#if !darkmode}
  <style>
    :root {
      --parent-background: #eeeeee;
      --transparent-parent-background: rgba(238, 238, 238, 0.8);
      --background: #dddddd;
      --primary: #14161a;
      --secondary: #121212;
      --third: #333;

      --first_shadow: -2px -2px 3px rgba(255, 255, 255, 0.5);
      --second_shadow: 3px 3px 3px rgba(0, 0, 0, 0.3);

      --section_shadow: 0px 0px 10px rgba(0, 0, 0, 0.6);
    }
  </style>
{:else}
  <style>
    :root {
      --parent-background: #14161a;
      --transparent-parent-background: rgba(20, 22, 26, 0.8);
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
