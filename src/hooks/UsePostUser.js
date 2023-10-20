const UsePostUser = (name, email) => {
	fetch('http://localhost:5000/user', {
		method: 'POST',
		headers: {'Content-Type': 'application/json'},
		body: JSON.stringify({
			name: name,
			email: email,
		}),
	})
		.then(() => {})
		.catch((err) => {});
};

export default UsePostUser;
