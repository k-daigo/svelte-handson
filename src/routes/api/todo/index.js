import todo from '$lib/TodoDb';

// TODOを追加する
export async function post({ request }) {
	const data = await request.json();

	todo.add(data.todo);

	return { body: {} };
}
