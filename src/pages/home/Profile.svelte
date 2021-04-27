<script>
  import { logout } from "../ItemStorage";

  export let displayName;
  export let photoURL;
  export let openSettings;
</script>

<section>
  <img src={photoURL} alt="User Avatar" />
  <h1>Hi {displayName}</h1>
  <div>
    <button on:click={() => openSettings()}>⚙️</button>
    <button on:click={logout()}>Logout</button>
  </div>
</section>

<style>
  section {
    background: var(--background);
    width: 30vw;
    height: calc(100vh - 2em);
    margin: 1em;

    filter: drop-shadow(var(--section_shadow));
    border-radius: 100px;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

  img {
    width: 50%;
    border-radius: 50%;
    border: var(--primary) 2px solid;
    margin-top: 1em;
  }

  button {
    margin: 0 0 1em 0.2em;
  }

  button:nth-of-type(1):hover {
    text-shadow: 0 0 5px var(--primary);
  }

  @media only screen and (max-width: 1200px) {
    section {
      width: 95vw;
      height: fit-content;
    }
  }
</style>
