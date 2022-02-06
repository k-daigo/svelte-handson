import todo from '$lib/model/Todo';

export async function post({ request }) {
	const data = await request.json();
	console.log(data);

	todo.add(data.todo);

	return { body: {} };
}
