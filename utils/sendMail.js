const nodemailer = require('nodemailer');
// const asyncHandler = require("express-async-handler");

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
        user: process.env.MAIL_EMAIL,
        pass: process.env.MAIL_PASSWORD,
    },
});

module.exports.sendMail = async (params) => {
    try {
        let info = await transporter.sendMail({
            from: '"Hey 👻" <foo@gmail.com>',
            to: params.to, // list of receivers
            subject: 'Your Skill-Brewery Internship is Confirmed', // Subject line
            html: `<h1>Your Details are:</h1><p>Name: ${params.name}</p><p>Degree + College : ${params.college}</p><p>Current Semester: ${params.current_semester}</p><p>Domain: ${params.domain}</p>`
        });
        return info;
    } catch (error) {
        console.log(error);
        return false;
    }
};