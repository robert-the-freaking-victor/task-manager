import app from '../../app';
import TaskController from '../controllers/TaskController';


export default class TaskRoutes {

	public static async run() {
		app.post('/Tasks', TaskController.create);
		app.get('/Tasks/:id', TaskController.get);
		return true;
	}
}