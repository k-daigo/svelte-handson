import todoDb from '$lib/TodoDb';

export async function put({ request }) {
	const data = await request.json();

	todoDb.update(data.todo);

	return { body: {} };
}

export async function get({ params }) {
	const { id } = params;
	const todo = todoDb.get(id);
	return { body: todo };
}
