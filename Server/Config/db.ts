/**
 * File name: db.ts
 * Student Name: Nikunj Thakor 
 * StudentID: 200555644
 * Date: 14/06/2024
 */

let remoteURI = (process.env.Mongo_uri) as string;
let secret = (process.env.APP_SECRET) as string;

export default {
    remoteURI : remoteURI,
    secret: secret

}