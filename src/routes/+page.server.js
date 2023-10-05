export const load = async ({ locals }) => {
	console.log('locals from /page.server: ', locals);
	return {
		name: locals.user
	};
};
