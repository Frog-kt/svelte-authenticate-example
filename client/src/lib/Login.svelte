<script lang="ts">
let password = '';
let email = '';
let error;

const handleLogin = async () => {
  const response = await fetch('/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({ email, password }),
  });
};

</script>

<div>
  <h1>Login</h1>
</div>

<form on:submit|preventDefault="{handleLogin}" method="post">
  <label>
    Email:
    <input type="email" bind:value="{email}" />
  </label>
  <label>
    Password:
    <input type="password" bind:value="{password}" />
  </label>
  <button type="submit">Login</button>
</form>

{#if error}
  <p>{error}</p>
{/if}
