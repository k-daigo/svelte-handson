import todoDb from '$lib/TodoDb';

// 全てのTODOを取得する
export async function get() {
	const todos = todoDb.getAll();
	return { body: todos };
}
