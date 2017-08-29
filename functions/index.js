const functions = require('firebase-functions');
const mailer = require('nodemailer');
const auth = require('./config.json');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.helloWorld = functions.https.onRequest((request, response) => {
 response.send("Hello from Firebase!");
});

exports.emailMe = functions.https.onRequest((request, response) => {
        response.send('Sending you an email', request);
    });
