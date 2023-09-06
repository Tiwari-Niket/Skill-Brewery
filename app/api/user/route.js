import { connectToDB } from "@utils/database";
import User from '@models/user';
import { sendMail } from "@services/sendMail";
const otpGenerator = require("otp-generator");

export const PUT = async (request) => {
    const {email} = await request.json();
    try {
        await connectToDB();

        const user = await User.findOne({email});

        return new Response(JSON.stringify(user), { status: 200 });

    } catch (error) {

        return new Response("Failed to fetch all prompts", { status: 500 });
        
    }
};

export const POST = async (request) => {
    const { email } = await request.json();
    try {
        await connectToDB();

        const otp = await sendOtpToUser(email);

        return new Response(JSON.stringify(otp), { status: 200 });

    } catch (error) {

        return new Response("Invalid Email", { status: 500 });

    }
};

const generateOTP = () => {
    const OTP = otpGenerator.generate(6, { upperCaseAlphabets: false, specialChars: false, lowerCaseAlphabets: false });
    return OTP;
};

const sendOtpToUser = async (email) => {
    const otpGenerated = generateOTP();
    const findUser = await User.findOne({ email });
    if (!findUser) {
        const newUser = await User.create({
            email,
            otp: otpGenerated,
        });
    }else{
        const updateUser = await User.findOneAndUpdate({email},{otp:otpGenerated})
    }

    try {
        await sendMail({
            to: email,
            OTP: otpGenerated,
        });
        return true;
    } catch (error) {
        return [false, 'Unable to sign up, Please try again later', error];
    }
};