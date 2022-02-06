class Todo {
	constructor() {
		this.data = [];
	}

	add(todo) {
		const entity = { id: this.data.length + 1, todo, finished: false };
		this.data.push(entity);
		console.table(this.data);
	}

	update(todoEntity) {
		const entity = {
			id: todoEntity.id,
			todo: todoEntity.todo,
			finished: todoEntity.finished
		};
		this.data[todoEntity.id - 1] = entity;
		console.table(this.data);
	}

	getAll() {
		console.log('getAll');
		return this.data;
	}

	get(id) {
		console.log('get');
		return this.data[id - 1];
	}
}

const todo = new Todo();
export default todo;
