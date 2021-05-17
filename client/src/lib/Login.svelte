<script lang="ts">
import { Router, Link, Route, navigate } from 'svelte-routing';
let username, password, error;
let response = null;
let promise = Promise.resolve([]);
let disabled = false;
let continents;

const baseUrl = 'http://localhost:3030';

// const submit = async () => {
//   try {
//     const hoge = await fetch(baseUrl + '/auth/login', {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify({
//         username: username,
//         password: password,
//       }),
//     });

//     response = hoge.body.getReader();

//     console.log(hoge);
//   } catch (err) {
//     console.log(err);
//     error = err.message;
//   }
// };

const fetchData = async () => {
  await fetch(baseUrl + '/auth/test')
    .then(r => r.json())
    .then(data => {
      continents = data;
    });
};

const handleClick = () => {
  promise = fetchData();
  console.log(promise);
  disabled = true;
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
  <button on:click="{handleClick}" disabled="{disabled}">Login</button>
</div>

{#await promise}
  <p>...waiting</p>
{:then users}
  {#each users as { login, url } (login)}
    <h3>{login}</h3>
    <img height="100" src="{genericAvatar}" alt="{login}" use:fetchAvatar="{url}" />
  {/each}
{:catch error}
  <p style="color: red">{error.message}</p>
{/await}
