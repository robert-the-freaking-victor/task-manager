import mongoose, { Schema, ObjectId } from 'mongoose';

interface ITask {
	Title?: string;
	Description?: string;
	Status?: string;
}

class TaskModel {

	// public static async create(body: ITask) {
		
	// }

	protected Task: any;

	constructor() {
		const taskSchema = new Schema({
			Title: String,
			Description: String,
			Status: String
		});
		this.Task = mongoose.model('Task', taskSchema);
	}

	public async create(body: ITask) {
		try {
		const task = await this.Task.create(body);
		return task;
		} catch(err) {
			console.log(err);
		}
	}

	public async list() {
		try {
			const tasks = await this.Task.find({});
			return tasks;
		} catch(err) {
			console.log(err);
		}
	}

	public async get(id: ObjectId) {
		try {
			const task = await this.Task.findById(id);
			return task;
		} catch(err) {
			console.log(err);
		}
	}

	public async update(id: ObjectId, body: ITask) {
		try {
			const task = await this.Task.findById(id);
			
		} catch(err) {
			console.log(err);
		}
	}
}