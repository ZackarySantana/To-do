<script>
  export let displayName;
  export let photoURL;

  import { auth } from "../../firebase/firebase";
</script>

<section>
  <img src={photoURL} alt="User Avatar" />
  <h1>Hi {displayName}</h1>
  <button on:click={() => auth.signOut()}>Logout</button>
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
    border-radius: 30px;
    border: var(--primary) 2px solid;
    margin-top: 1em;
  }

  button {
    margin-bottom: 1em;
  }

  @media only screen and (max-width: 1200px) {
    section {
      width: 95vw;
      height: fit-content;
    }
  }
</style>
