import { expect } from "chai";
import User from '../database/users/user';
// import { assert } from 'assert';

describe('Creating records', () => {
    it('save a user', () => {
       const joe = new User({name: 'Joe'});
       joe.save().then(() => {
        //    expect()
       })
    });
});