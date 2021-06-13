import { Request, Response } from "express";
import * as admin from 'firebase-admin';

export async function createStudent(req: Request, res: Response) {
    const student = req.body;

    await admin.firestore().collection('student').add(student);

    return res.status(201).send();
}

export async function listStudents(req: Request, res: Response) {

    admin.firestore().collection("student").get().then((querySnapshot) => {
        const students = querySnapshot.docs.map(doc => doc.data());
        return res.status(201).send({ users: students });
    });
    
}
