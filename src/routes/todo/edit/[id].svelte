<script context="module">
	import * as api from '$lib/api_cli.js';

	export async function load({ params }) {
		const res = await api.get(`/api/todo/${params.id}`);
		return {
			props: { todo: res }
		};
	}
</script>

<script>
	import { goto } from '$app/navigation';

	export let todo;

	async function submit(event) {
		await api.put(`/api/todo/${todo.id}`, { todo });
		goto('/');
	}
</script>

<h1>TODO編集</h1>

<form on:submit|preventDefault={submit}>
	<input type="text" placeholder="TODO" bind:value={todo.todo} />
	<br />
	<button> 更新 </button>
</form>
