import { Request, Response, NextFunction } from 'express';
import { fdatasync } from 'fs';
import TaskModel, { ITask } from '../models/TaskModel';

export default class TaskController {
	public static async create(request: Request, response: Response, next: NextFunction) {
		try {
			// garantindo que atributos não incluidos no model, não sejam salvos
			const body: ITask = request.body;
			const task = await TaskModel.create(body);
			response.status(201).json(task);
			return task;
		} catch(err) {
			console.log(err);
			response.status(500).json({'error': err});
		} finally {
			next();
		}
	}

	public static async get(request: Request, response: Response, next: NextFunction) {
		try {
			const params = request.params;
			const idTask = params.id;
			const task = await TaskModel.get(idTask);
			response.status(200).json(task);
			return task;
		} catch(err) {
			console.log(err);
			response.status(500).json({'error': err });
		} finally {
			next();
		}
	}

	public static async list(request: Request, response: Response, next: NextFunction) {
		try {
			const tasks = await TaskModel.list();
			response.status(200).json(tasks);
			return tasks;
		} catch(err) {
			console.log(err);
			response.status(500).json({'error': err});
		} finally {
			next();
		}
	}

	public static async update(request: Request, response: Response, next: NextFunction) {
		try {

		} catch(err) {
			console.log(err);
			response.status(500).json({'error': err});
		} finally {
			next();
		}
	}

	public static async delete(request: Request, response: Response, next: NextFunction) {
		try {
			
		} catch(err) {
			console.log(err);
			response.status(500).json({'error': err});
		} finally {
			next();
		}
	}
}