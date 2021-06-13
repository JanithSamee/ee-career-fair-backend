import { Request, Response } from "express";
import * as admin from 'firebase-admin';

export async function createStudent(req: Request, res: Response) {
    const user = req.body;

    await admin.firestore().collection('user').add(user);

    return res.status(201).send();
}

export async function listStudents(req: Request, res: Response) {

    admin.firestore().collection("student").get().then((querySnapshot) => {
        const students = querySnapshot.docs.map(doc => doc.data());
        return res.status(201).send({ users: students });
    });
    
}
