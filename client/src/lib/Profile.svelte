<script lang="ts">
let error;
let resp;

const baseUrl = 'http://localhost:3030';
const submit = async () => {
  try {
    resp = await fetch(baseUrl + '/auth/me', {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (err) {
    console.log(err);
    error = err.message;
  }
};

submit();

</script>

<div>
  <h1>Profile</h1>
  <p>
    {(() => {
      JSON.stringify(resp);
    })()}
  </p>
</div>

{#if error}
  <p>{error}</p>
{/if}
