/**
 * File name: index.ts
 * Student Name: Nikunj Thakor 
 * StudentID: 200555644
 * Date: 14/06/2024
 */

import express from 'express';
const router = express.Router();

import { DisplayMovieList,DisplayMovieById, AddMovie, UpdateMovie, DeleteMovie } from '../Controllers/movie';
import { ProcessLogin, ProcessLogout, ProcessRegistration } from '../Controllers/auth';

/* Auth Routes Endpoints */

/* Register User */
router.post('/register', (req, res, next) => {  ProcessRegistration(req, res, next); });

/* Login User */
router.post('/login', (req, res, next) => {  ProcessLogin(req, res, next); });

/* Logout User */
router.get('/logout', (req, res, next) => {  ProcessLogout(req, res, next);});

/* Endpooint */

router.get('/', function(req, res, next) {  DisplayMovieList(req, res, next); });

/* GET Movie by ID. */
router.get('/:id', (req, res, next) => {  DisplayMovieById(req, res, next); });

/* Add New Movie */
router.post('/add', (req, res, next) => {  AddMovie(req, res, next); });

/* Update Movie */
router.put('/update/:id', (req, res, next) => {  UpdateMovie(req, res, next); });

/* Delete Movie */
router.delete('/delete/:id', (req, res, next) => {  DeleteMovie(req, res, next); });


export default router;
