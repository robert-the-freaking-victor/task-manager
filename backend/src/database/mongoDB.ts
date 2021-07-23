import mongoose from 'mongoose';

(
async () => {
	await mongoose.connect(process.env.MONGODB_URI || '', {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	});
}
)();

export default mongoose;