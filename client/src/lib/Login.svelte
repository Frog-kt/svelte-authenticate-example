<script lang="ts">
import { Router, Link, Route, navigate } from 'svelte-routing';
let username, password, error;

const baseUrl = 'http://localhost:3030';

const submit = async () => {
  try {
    await fetch(baseUrl + '/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    });
  } catch (err) {
    console.log(err);
    error = err.message;
  }
};

</script>

<div>
  <Link to="/">Home</Link>
  <Link to="/signup">Signup</Link>
  <Link to="/login">Login</Link>
  <Link to="/profile">Profile</Link>
</div>
<h1>Login</h1>
<div class="w-200">
  <input type="text" bind:value="{username}" class="border-1px" placeholder="username" />
  <input type="password" bind:value="{password}" class="border-1px" placeholder="password" />
  <button on:click="{submit}">Login</button>
</div>

{#if error}
  <p>{error}</p>
{/if}
