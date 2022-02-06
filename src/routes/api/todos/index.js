import todoDb from '$lib/model/Todo';

export async function get() {
	const todos = todoDb.getAll();
	console.log('get todos');
	console.table(todos);
	console.log(JSON.stringify(todos));
	return { body: todos };
}
