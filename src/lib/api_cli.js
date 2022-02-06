const BASE_HOST = 'http://localhost:3000';

async function send({ method, path, data }) {
	const opts = { method, headers: {} };

	opts.headers['Content-Type'] = 'application/json';
	if (data) {
		opts.body = JSON.stringify(data);
	}

	return fetch(`${BASE_HOST}${path}`, opts)
		.then((r) => r.text())
		.then((json) => {
			try {
				console.log('fetch');
				console.table(json);
				return JSON.parse(json);
			} catch (err) {
				return json;
			}
		});
}

export function get(path) {
	console.log(`get path=${path}`);
	return send({ method: 'GET', path });
}

export function post(path, data) {
	console.log(`post path=${path} data=${data}`);
	return send({ method: 'POST', path, data });
}

export function put(path, data) {
	console.log(`put path=${path} data=${data}`);
	return send({ method: 'PUT', path, data });
}
