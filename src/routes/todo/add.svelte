<script>
	import { goto } from '$app/navigation';
	import * as api from '$lib/api_client.js';

	export let todo = '';

	// TODOを新規登録する
	async function submit(event) {
		await api.post('/api/todo', { todo });
		goto('/');
	}
</script>

<h1>TODO追加</h1>

<form on:submit|preventDefault={submit}>
	<input type="text" placeholder="TODO" bind:value={todo} />
	<br />
	<button> 追加 </button>
</form>
