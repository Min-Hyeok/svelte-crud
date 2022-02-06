<script>
  import { link } from 'svelte-spa-router';
</script>

<div class="header">
  <div class="header-list">
    <div class="header-list__item"><a href="/" use:link>홈인것이다</a></div>
    <div class="header-list__item"><a href="/signin" use:link>로그인인것이다</a></div>
    <div class="header-list__item"><a href="/signup" use:link>회원가입인것이다</a></div>
  </div>
</div>