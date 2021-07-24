import TaskRoutes from './TaskRoutes';

export default class RoutesAPI {
	// todas os arquivos de rotas importados, devem ser colocados nesse array
	protected static routes = [
		TaskRoutes,
	];

	public static runApi() {
		const promiseRoutes: Promise<boolean>[] = RoutesAPI.routes.map((route) => {
		return route.run();
		});

		Promise.all(promiseRoutes)
			.then(() => {
				console.log('API is now available!');
			})
			.catch((err) => {
				console.log(err);
			});
	}
}