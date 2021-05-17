<script lang="ts">
import { Router, Link, Route } from 'svelte-routing';

import Home from './lib/Home.svelte';
import Signup from './lib/Signup.svelte';
import Login from './lib/Login.svelte';
import Profile from './lib/Profile.svelte';
export let url = '';

</script>

<Router url="{url}">
  <div>
    <!-- ホーム画面 -->
    <Route path="/"><Home /></Route>
    <!-- 新規登録 -->
    <Route path="/signup"><Signup /></Route>
    <!-- ログイン -->
    <Route path="/login"><Login /></Route>
    <!-- プロフィール -->
    <Route path="/profile"><Profile /></Route>
    <Route>not found</Route>
  </div>
</Router>
