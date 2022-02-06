import todoDb from '$lib/TodoDb';

// TODOを完了にする
export async function put({ params }) {
	const { id } = params;

	const todoEntity = todoDb.get(id);
	todoEntity.finished = true;
	todoDb.update(todoEntity);

	return { body: {} };
}
