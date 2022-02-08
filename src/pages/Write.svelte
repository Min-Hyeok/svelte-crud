<script>
  import { BoardService } from 'Service/BoardService.js';
  import { push } from 'svelte-spa-router';
  const client = new BoardService();

  let subject = '';
  let content = '';

  async function write() {
    if (!subject) {
      alert('제목을 입력해주세요.');

      return;
    }

    if (!content) {
      alert('내용을 입력해주세요.');

      return;
    }

    const { insertId } = await client.write({ subject, content });
    alert('작성되었습니다.');

    push(`/view/${insertId}`)
  }
</script>

<div>
  <form>
    <fieldset>
      <legend>글작성 페이지</legend>
      <input type="text" name="subject" placeholder="글제목" bind:value={subject}>
      <textarea name="content" cols="30" rows="10" bind:value={content}></textarea>
      <button type="button" on:click={write}>글작성</button>
    </fieldset>
  </form>
</div>

<style>

</style>