import firebase from "firebase/app";
import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
import * as express from 'express';
import * as cors from 'cors';
import * as bodyParser from 'body-parser';
import routes from './router';

const app = express();
app.use(bodyParser.json());
app.use(cors({ origin: true }));
app.use(routes);

// Initialize Firebase -- This will be removed once Bearer token can be taken form front-end.
// Only Admin SDK is enough to be initialized.
var firebaseConfig = {
    apiKey: functions.config().app.apikey,
    authDomain: functions.config().app.authdomain,
    projectId: functions.config().app.projectid,
    storageBucket: functions.config().app.storagebucket,
    messagingSenderId: functions.config().app.senderid,
    appId: functions.config().app.appid,
    measurementId: functions.config().app.measurementid
};
firebase.initializeApp(firebaseConfig);

/**
 * 
 * Once Javascript SDK is removed, service account json can be used to
 * initialize Admin SDK.
 * 
 */
// var serviceAccount = require("../../serviceAccountKey.json");
// var serviceAccount = require("../../serviceAccountKey.json");
// admin.initializeApp({
//     credential: admin.credential.cert(serviceAccount)
// });
admin.initializeApp();

export const api = functions.https.onRequest(app);
