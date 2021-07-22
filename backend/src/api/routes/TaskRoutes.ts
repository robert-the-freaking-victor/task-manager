import app from '../../app';
import TaskController from '../controllers/TaskController';


export default class TaskRoutes {

	public static async run() {
		app.post('/Tasks', TaskController.create);
		app.get('/Tasks', TaskController.list);
		app.get('/Tasks/:id', TaskController.get);
		app.put('/Tasks/:id', TaskController.update);
		app.delete('/Tasks/:id', TaskController.delete);
		return true;
	}
}