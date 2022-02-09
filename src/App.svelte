<script>
import { MemberService } from 'Service/MemberService.js';
import Router from 'svelte-spa-router';
import routes from '@/router/index.js';
import Header from 'Components/Header.svelte';
import { userInfo } from '@/store/index.js';
import { onMount } from 'svelte';
const client = new MemberService();

onMount(async () => {
	const response = await client.getUserInfo();

	userInfo.set(response);
});
</script>

<div>
	<Header />
	<Router {routes} />
</div>