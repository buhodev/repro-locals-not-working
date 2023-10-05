export const load = async ({ locals }) => {
	console.log('locals from layout.server.js: ', locals);
	return {
		user: locals.user
	};
};
