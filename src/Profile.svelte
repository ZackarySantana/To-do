<script>
  export let displayName;
  export let photoURL;
  export let uid;
</script>

<h3>Hi {displayName}</h3>
<img src={photoURL} width="100" alt="User Avatar" />
<p>Your userID is {uid}</p>
