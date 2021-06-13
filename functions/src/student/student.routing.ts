import { Router } from 'express';
import { isAuthenticated } from '../service/auth.service';
import { createStudent, listStudents } from './student.controller';

const studentRouter = Router();

studentRouter.post('/create', isAuthenticated, createStudent);
studentRouter.post('/list', isAuthenticated, listStudents);

export default studentRouter;
