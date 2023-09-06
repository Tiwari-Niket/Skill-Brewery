import { connectToDB } from "@utils/database";
import User from '@models/user';
import {sendMail} from "@utils/sendMail";

export const PATCH = async (request) => {
    const { email, otp, name, college, current_semester, domain } = await request.json();
    try {
        await connectToDB();
        const user = await validateUserSignUp(email, otp);
        const findUser = await User.findOne({ email });
        if (!user) return new Response("Invalid OTP!", { status: 404 });

        findUser.college = college;
        findUser.name = name;
        findUser.current_semester = current_semester;
        findUser.domain = domain;

        await findUser.save();
        await sendMail({
            to: email,
            college: college,
            name : name,
            current_semester : current_semester,
            domain : domain,

        });
        return new Response(JSON.stringify(findUser), { status: 200 });

    } catch (error) {
        return new Response("Invalid OTP!", { status: 500 });
    }
};

const validateUserSignUp = async (email, otp) => {
    const user = await User.findOne({ email });

    if (user && user.otp !== otp) {
        return [false, 'Invalid OTP'];
    }

    return [true, user];
};