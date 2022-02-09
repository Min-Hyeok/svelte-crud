<script>
import { BoardService } from 'Service/BoardService.js';
import { onMount } from 'svelte';
import { link } from 'svelte-spa-router';
const board = new BoardService();
let boardList = [];

onMount(async () => {
  const { list, count } = await board.list();

  boardList = list;
});

</script>

<div>
  <a href="/write" use:link>글작성</a>
  <div class="table">
    <div class="table-header" style="display: flex;">
      <div class="table-header__item">제목</div>
      <div class="table-header__item">내용</div>
      <div class="table-header__item">작성자</div>
      <div class="table-header__item">등록일</div>
    </div>
    <div class="table-content">
      {#each boardList as { subject, content, writer, registDate, idx }}
        <div class="table-content__wrapper" style="display: flex;">
          <div class="table-content__item">
            <a href={`/view/${idx}`} use:link>{subject}</a>
          </div>
          <div class="table-content__item">{content}</div>
          <div class="table-content__item">{writer}</div>
          <div class="table-content__item">{registDate}</div>
        </div>
      {/each}
    </div>
  </div>
</div>
<style>
  
</style>