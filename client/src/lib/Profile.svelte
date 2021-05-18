<script lang="ts">
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
</div>
