import mongoose from "mongoose";

const connectDB = (url) => {
    mongoose.set('strictQuery', true);

    mongoose.connect(url,{ useNewUrlParser: true })
    .then(() => console.log('MongoDB connected'))
    .catch((err) => {
        console.log('Failed to connect to MongoDB')
        console.log(url);
        console.log(err);
    });

}

export default connectDB;