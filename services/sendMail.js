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
            subject: 'Your OTP Code', // Subject line
            text: `Your OTP code is: ${params.OTP}`,
        });
        return info;
    } catch (error) {
        console.log(error);
        return false;
    }
};