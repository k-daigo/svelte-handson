import todoDb from '$lib/TodoDb';

// TODOを更新する
export async function put({ request }) {
	const data = await request.json();

	todoDb.update(data.todo);

	return { body: {} };
}

// TODOを1件返す
export async function get({ params }) {
	// RESTパラメータからIDを抽出
	const { id } = params;

	const todo = todoDb.get(id);
	return { body: todo };
}
