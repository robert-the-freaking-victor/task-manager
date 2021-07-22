import { Schema, ObjectId } from 'mongoose';
import mongoose from '../database/mongoDB';


const taskSchema = new Schema({
	Title: String,
	Description: String,
	Status: String
});

export interface ITask {
	Title?: string;
	Description?: string;
	Status?: string;
}

export default class TaskModel {

	protected static Task = mongoose.model('Task', taskSchema);

	public static async create(body: ITask) {
		try {
		const task = await TaskModel.Task.create(body);
		return task;
		} catch(err) {
			console.log(err);
		}
	}

	public static async list() {
		try {
			const tasks = await TaskModel.Task.find({});
			return tasks;
		} catch(err) {
			console.log(err);
		}
	}

	public static async get(id: string) {
		try {
			const task = await TaskModel.Task.findById(id);
			return task;
		} catch(err) {
			console.log(err);
		}
	}

	public static async update(id: string, body: ITask) {
		try {
			await TaskModel.Task.findByIdAndUpdate(id, body);
			const task = await TaskModel.Task.findById(id);
			return task;
		} catch(err) {
			console.log(err);
		}
	}

	public static async delete(id: string) {
		try {
			await TaskModel.Task.remove({ _id: id });
		} catch(err) {
			console.log(err);
		}
	}
}