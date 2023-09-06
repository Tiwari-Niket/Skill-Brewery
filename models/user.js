import { Schema, model, models } from "mongoose";

const UserSchema = new Schema({
    email: {
        type: String,
    },
    name: {
        type: String,
    },
    college: {
        type: String,
    },
    current_semester: {
        type: String,
    },
    domain: {
        type: String,
    },
    otp: {
        type: String
    }
});

const User = models.User || model("User", UserSchema);

export default User;