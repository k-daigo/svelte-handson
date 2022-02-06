import todoDb from '$lib/TodoDb';

// TODOを追加する
export async function post({ request }) {
	const data = await request.json();

	todoDb.add(data.todo);

	return { body: {} };
}
