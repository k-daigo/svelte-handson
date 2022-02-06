import todo from '$lib/TodoDb';

export async function post({ request }) {
	const data = await request.json();

	todo.add(data.todo);

	return { body: {} };
}
