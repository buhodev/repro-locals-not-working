export const load = async ({ locals }) => {
	console.log('locals from about/page.server.js: ', locals);

	return {
		name: locals.user
	};
};
