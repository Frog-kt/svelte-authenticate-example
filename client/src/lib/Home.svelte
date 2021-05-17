<script lang="ts">
  import { Router, Link, Route } from 'svelte-routing';
</script>

<div>
  <h1>Home</h1>
  <div>
    <Link to="/">Home</Link>
    <Link to="/signup">Signup</Link>
    <Link to="/login">Login</Link>
    <Link to="/profile">Profile</Link>
  </div>
</div>
