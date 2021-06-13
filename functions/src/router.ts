import { Router } from 'express';
import authRouter from './auth/auth.routing';
import studentRouter from './student/student.routing';

const routes = Router();

routes.use('/auth', authRouter);
routes.use('/student', studentRouter);

export default routes;