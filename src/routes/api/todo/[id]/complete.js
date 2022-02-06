import todoDb from '$lib/TodoDb';

export async function put({ params }) {
	const { id } = params;

	const todoEntity = todoDb.get(id);
	todoEntity.finished = true;
	todoDb.update(todoEntity);

	return { body: {} };
}
