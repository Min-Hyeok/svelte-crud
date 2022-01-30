<script>
  let count = 0;

  function add() {
    count = count + 1;
  }
</script>
<div>
  <button on:click="{add}" type="button">클릭!</button>
  <p>{count}</p>
</div>
<style>
  
</style>