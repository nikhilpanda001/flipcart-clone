import mongoose from "mongoose";

// mongodb clould connection for database, thos function takes the username and password from the dot env file
const Connection = async (username, password) => {
	// const URL = `mongodb+srv://${username}:${password}@cluster0.bi8ok.mongodb.net/PROJECT0?retryWrites=true&w=majority`;
	const URL = `mongodb+srv://${username}:${password}@cluster0.bi8ok.mongodb.net/PROJECT1?retryWrites=true&w=majority`;
	try {
		await mongoose.connect(URL, {
			useUnifiedTopology: true,
			useNewUrlParser: true,
		});
		console.log("Database Connected Succesfully");
	} catch (error) {
		console.log("Error: ", error.message);
	}
};

export default Connection;
