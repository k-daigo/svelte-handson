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
				return JSON.parse(json);
			} catch (err) {
				return json;
			}
		});
}

export function get(path) {
	return send({ method: 'GET', path });
}

export function post(path, data) {
	return send({ method: 'POST', path, data });
}

export function put(path, data) {
	return send({ method: 'PUT', path, data });
}
