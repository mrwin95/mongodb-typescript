import * as Mongoose from "mongoose";

export const connect = () => {
    const uri = "mongodb://localhost:27017/user_test";

    Mongoose.connect(uri);

    Mongoose.connection.once('open', () => console.log('Good to go'))
    .on('error', (err) => console.warn('Error', err) );

};