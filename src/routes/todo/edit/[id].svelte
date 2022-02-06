<script context="module">
	import * as api from '$lib/api_client.js';

	export async function load({ params }) {
		// TODOの取得
		const res = await api.get(`/api/todo/${params.id}`);
		return {
			props: { todo: res }
		};
	}
</script>

<script>
	import { goto } from '$app/navigation';

	export let todo;

	// 編集したTODOを更新登録する
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
