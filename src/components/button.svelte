<script>
  let count = 0;

  function asd(v) {
    return v * v + '입니당';
  }

  $: test = asd(count);

  function add() {
    count = count + 1;
  }
</script>
<div>
  <button on:click="{add}" type="button">클릭!</button>
  <p>{count}</p>
  <p>{test}</p>
</div>
<style>
  
</style>