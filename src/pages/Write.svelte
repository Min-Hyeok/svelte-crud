<script>
import { BoardService } from 'Service/BoardService.js';
import { onMount } from 'svelte';
import { push, querystring } from 'svelte-spa-router';
const client = new BoardService();

let subject = '';
let content = '';
let idx = null;

onMount(async () => {
  idx = new URLSearchParams($querystring).get('idx');
  
  if (!idx) return;

  const response = await client.view(idx);

  subject = response.subject;
  content = response.content;
});

function validation() {
  if (!subject) {
    alert('제목을 입력해주세요.');

    return;
  }

  if (!content) {
    alert('내용을 입력해주세요.');

    return;
  }

  return true;
}

async function write() {
  if (!validation()) return;
  const { insertId } = await client.write({ subject, content });
  alert('작성되었습니다.');

  push(`/view/${insertId}`)
}

async function update() {
  if (!validation()) return;
  await client.update({ subject, content, idx });
  alert('업데이트 되었습니다.');

  push(`/view/${idx}`);
}
</script>

<div>
  <form>
    <fieldset>
      <legend>글작성 페이지</legend>
      <input type="text" name="subject" placeholder="글제목" bind:value={subject}>
      <textarea name="content" cols="30" rows="10" bind:value={content}></textarea>
      <button type="button" on:click={idx ? update : write}>글작성</button>
    </fieldset>
  </form>
</div>

<style>

</style>