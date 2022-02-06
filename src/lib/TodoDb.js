// TODOを保持するクラス
class TodoDb {
	constructor() {
		// データ
		this.data = [];
	}

	// 追加する
	add(todo) {
		const entity = { id: this.data.length, todo, finished: false };
		this.data.push(entity);
	}

	// 更新する
	update(todoEntity) {
		const entity = {
			id: todoEntity.id,
			todo: todoEntity.todo,
			finished: todoEntity.finished
		};
		this.data[todoEntity.id] = entity;
	}

	// 全件返却
	getAll() {
		return this.data;
	}

	// 指定IDのデータを返す
	get(id) {
		return this.data[id];
	}
}

const todoDb = new TodoDb();
export default todoDb;
