<script>
import { onMount } from 'svelte';
import { BoardService } from 'Service/BoardService.js';
const client = new BoardService();
export let params;
let data = null;

  onMount(async () => {
    const { idx } = params;
    data = await client.view(idx);
  });

</script>

<div>
  {#if data}
    제목: {data.subject}<br>
    내용: {data.content}<br>
  {/if}
</div>

<style>

</style>