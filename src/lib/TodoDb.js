class TodoDb {
	constructor() {
		this.data = [];
	}

	add(todo) {
		const entity = { id: this.data.length, todo, finished: false };
		this.data.push(entity);
	}

	update(todoEntity) {
		const entity = {
			id: todoEntity.id,
			todo: todoEntity.todo,
			finished: todoEntity.finished
		};
		this.data[todoEntity.id] = entity;
	}

	getAll() {
		return this.data;
	}

	get(id) {
		return this.data[id];
	}
}

const todoDb = new TodoDb();
export default todoDb;
