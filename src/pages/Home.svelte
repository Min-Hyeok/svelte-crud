<script>
  import { MemberService } from 'Service/MemberService.js';
  const client = new MemberService();

  (async () => {
    const response = await client.getInfo();

    console.log('response', response);
  })();
</script>

<div>
  <div class="table">
    <div class="table-header" style="display: flex;">
      <div class="table-header__item">제목</div>
      <div class="table-header__item">내용</div>
      <div class="table-header__item">작성자</div>
      <div class="table-header__item">등록일</div>
    </div>
    <div class="table-content">
      <div class="table-content__wrapper" style="display: flex;">
        <div class="table-content__item">제목이당</div>
        <div class="table-content__item">내용이당</div>
        <div class="table-content__item">작성자당</div>
        <div class="table-content__item">2022-99-99</div>
      </div>
    </div>
  </div>
</div>
<style>
  
</style>