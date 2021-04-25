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
    background: #121212;
    width: 30vw;
    height: calc(100vh - 2em);
    margin: 1em;

    filter: drop-shadow(0px 0px 30px rgba(0, 0, 0, 0.8));
    border-radius: 100px;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

  img {
    width: 50%;
    border-radius: 30px;
    border: #eeeeee 2px solid;
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
