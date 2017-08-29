'use strict';
const nodeMailer = require('nodemailer');

let transporter = nodeMailer.createTransport({
    host: 'smtp.ex'
})