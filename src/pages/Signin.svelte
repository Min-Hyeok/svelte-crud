<script>
  import { MemberService } from 'Service/MemberService.js';
  import { push } from 'svelte-spa-router';
  const client = new MemberService();

  let id = '';
  let password = '';

  async function signin() {
    const response = await client.signin({ id, password });
    const { error } = response;

    if (error) {
      alert(error);

      return;
    }

    alert('로그인 되었습니다.');
    push('/');
  }
</script>

<div>
  <form>
    <fieldset>
      <legend>로그인 페이지</legend>
      <input type="text" name="id" placeholder="id" bind:value={id}>
      <input type="text" name="password" placeholder="password" bind:value={password}>
      <button type="button" on:click={signin}>signin</button>
    </fieldset>
  </form>
</div>
<style>
  
</style>