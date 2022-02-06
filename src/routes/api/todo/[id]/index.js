import todoDb from '$lib/model/Todo';

export async function post({ request }) {
	const data = await request.json();
	console.log(data);

	todoDb.add(data.todo);

	return { body: {} };
}

export async function put({ request }) {
	const data = await request.json();
	console.log(data);

	todoDb.update(data.todo);

	return { body: {} };
}

export async function get({ params }) {
	const { id } = params;
	console.table(id);
	const todo = todoDb.get(id);
	console.log('get');
	console.table(todo);
	console.log(JSON.stringify(todo));
	return { body: todo };
}
