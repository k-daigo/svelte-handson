import todoDb from '$lib/TodoDb';

export async function get() {
	const todos = todoDb.getAll();
	return { body: todos };
}
