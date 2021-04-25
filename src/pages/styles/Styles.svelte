<script>
  export let darkmode;
</script>

{#if darkmode}
  <style>
    input::placeholder {
      color: #a0a0a0;
    }
  </style>
{/if}
