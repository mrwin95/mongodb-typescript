import * as database from 'mongoose';

database.connect('mongodb://localhost:27017/user_test');

database.connection.once('open', () => console.log('Good to go'))
.on('error', (err) => console.warn('Error', err));

beforeEach(() => {
    
})