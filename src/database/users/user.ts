import * as mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
    name: String
});

const User = mongoose.model('user', UserSchema);

export default User;