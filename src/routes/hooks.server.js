export async function handle({ event, resolve }) {
	let user = {
		id: 1,
		email: 'user@example.com'
	};

	event.locals.user = user;

	return await resolve(event);
}
