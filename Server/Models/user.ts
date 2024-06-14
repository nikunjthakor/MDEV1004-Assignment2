/**
 * File name: user.ts
 * Student Name: Nikunj Thakor 
 * StudentID: 200555644
 * Date: 14/06/2024
 */


import mongoose, { PassportLocalDocument, Schema, model } from 'mongoose';
import passportLocalMongoose from 'passport-local-mongoose';

/**
 *user interface
 *
 * @export
 * @interface IUser
 * @extends {PassportLocalDocument}
 */
export interface IUser extends PassportLocalDocument
{
    username: string,
    emailAddress: string,
    displayName: string,
    created: Date,
    updated: Date
}

const userSchema = new Schema<IUser> 
({
    username: {
        type: String,
        required: true,
        unique: true
    },
    emailAddress: {
        type: String,
        required: true
    },
    displayName: {
        type: String,
        required: true
    },
    created: {
        type: Date,
        default: Date.now()
    },
    updated: {
        type: Date,
        default: Date.now()
    }
},
{
    collection: 'users'
});

userSchema.plugin(passportLocalMongoose);

const User = mongoose.model<IUser & PassportLocalDocument>('User', userSchema);

declare global
{
    export type UserDocument = mongoose.Document & 
    {
        _id: String,
        username: String,
        emailAddress: String,
        displayName: String,
    }
}

export default User;