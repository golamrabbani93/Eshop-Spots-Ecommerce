const UsePostUser = (name, email) => {
	fetch('https://eshopspots-server.vercel.app/user', {
		method: 'POST',
		headers: {'Content-Type': 'application/json'},
		body: JSON.stringify({
			name: name,
			email: email,
			userRole: 'customer',
		}),
	})
		.then(() => {})
		.catch((err) => {});
};

export default UsePostUser;
