<script>
  import { MemberService } from 'Service/MemberService.js';
  import { push } from 'svelte-spa-router';
  const client = new MemberService();

  let id = '';
  let password = '';
  let name = '';
  let email = '';

  async function signup() {
    const response = await client.signup({ id, password, name, email });
    const { error } = response;

    if (error) {
      alert(error);

      return;
    }
    
    alert('회원가입 완료');
    push('/signin');

  }
</script>

<div>
  <form>
    <fieldset>
      <legend>회원가입 페이지</legend>
      <input type="text" name="id" placeholder="id" bind:value={id}>
      <input type="text" name="password" placeholder="password" bind:value={password}>
      <input type="text" name="name" placeholder="name" bind:value={name}>
      <input type="text" name="email" placeholder="email" bind:value={email}>
      <button type="button" on:click={signup}>signup</button>
    </fieldset>
  </form>
</div>
<style>
  
</style>