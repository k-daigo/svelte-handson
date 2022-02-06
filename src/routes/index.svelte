<script context="module">
	import * as api from '$lib/api_client.js';

	export async function load({ params, session }) {
		// TODOを全件取得する
		const res = await api.get('/api/todos');
		return {
			props: { todos: res }
		};
	}
</script>

<script>
	import { invalidate } from '$app/navigation';
	export let todos = [];

	// TODOを完了にする
	async function compClick(id) {
		await api.put(`/api/todo/${id}/complete`);
		invalidate('/');
	}
</script>

<h1>TODO</h1>
<a href="/todo/add">追加</a>

<ul>
	{#each todos as todo}
		<li>
			<a href="/todo/edit/{todo.id}">{todo.todo}</a>
			{#if !todo.finished}
				<button on:click={compClick(todo.id)}>完了</button>
			{:else}
				済
			{/if}
		</li>
	{/each}
</ul>
