<script lang="ts">
import { Router, Link, Route } from 'svelte-routing';
const baseUrl = 'http://localhost:3030';
let promise;

const login = async () => {
  const response = await fetch(baseUrl + '/auth/me', {
    method: 'GET',
    credentials: 'include',
  });

  return await response.json();
};

</script>

<div>
  <Link to="/">Home</Link>
  <Link to="/signup">Signup</Link>
  <Link to="/login">Login</Link>
  <Link to="/profile">Profile</Link>
</div>
<h1>Profile</h1>
<p>
  {#await login()}
    <p>...waiting</p>
  {:then data}
    <p>{JSON.stringify(data)}</p>
  {:catch error}
    <p style="color: red">{error.message}</p>
  {/await}
</p>
