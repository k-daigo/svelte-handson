<script context="module">
	import * as api from '$lib/api_cli.js';

	export async function load({ params, session }) {
		const res = await api.get('/api/todos');
		return {
			props: { todos: res }
		};
	}
</script>

<script>
	export let todos;
</script>

<h1>TODOアプリハンズオン</h1>
<a href="/todo/add">追加</a>

<ul>
	{#each todos as todo}
		<li><a href="/todo/edit/{todo.id}">{todo.todo}</a></li>
	{/each}
</ul>
