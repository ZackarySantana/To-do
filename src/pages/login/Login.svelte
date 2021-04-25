<script>
  import { auth, googleProvider } from "../../firebase/firebase";

  function login() {
    auth.signInWithPopup(googleProvider);
  }
</script>

<section>
  <h1>To-do Application</h1>
  <h2>
    By <i><a href="https://zackaryjamessantana.com">Zackary Santana</a></i>
  </h2>
  <button on:click={login}>Log in with Google</button>
</section>

<style>
  section {
    background: var(--parent-background);
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

  h1 {
    margin: 0;
    margin-bottom: 0.2em;
  }

  h2 {
    margin: 0;
    margin-bottom: 0.7em;
    color: var(--third);
  }
</style>
