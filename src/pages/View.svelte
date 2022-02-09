<script>
import { onMount } from 'svelte';
import { BoardService } from 'Service/BoardService.js';
import { userInfo } from '@/store/index.js'; 
import { push } from 'svelte-spa-router';
export let params;

const client = new BoardService();
let data = null;
let idx = null;

onMount(async () => {
  idx = params.idx;
  data = await client.view(idx);
});

async function remove() {
  if (!confirm('삭제하시겠습니까?')) return;

  await client.remove(idx);
  alert('삭제를 한 것이다');
  push('/');
}

</script>

<div>
  {#if data}
    제목: {data.subject}<br>
    내용: {data.content}<br>
    {#if data.userIdx === $userInfo.userIdx}
    <button type="button" on:click={push(`/write?idx=${data.idx}`)}>수정</button>
    <button type="button" on:click={remove}>삭제</button>
    {/if}
  {/if}
</div>

<style>

</style>