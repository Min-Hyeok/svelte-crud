<script>
	import Router from 'svelte-spa-router';
	import routes from '@/router/index.js';
	import Header from 'Components/Header.svelte';


</script>

<div>
	<Header />
	<Router {routes} />
</div>