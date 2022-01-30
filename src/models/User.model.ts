import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            trim: true,
            required: true,
        },
        password: {
            type: String,
            trim: true,
            required: true,
        },
        height: {
            type: Number,
        },
        weight: {
            type: Number,
        },
        gender: {
            type: String,
        },
        yearOfBirth: {
            type: Number,
        },
        activity: {
            type: Number,
        },
        post: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'posts',
            },
        ],
    },
    {
        timestamps: true,
    }
);
const Users = mongoose.model('users', UserSchema);
export default Users;
