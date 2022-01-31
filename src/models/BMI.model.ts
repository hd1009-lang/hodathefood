import mongoose from 'mongoose';
import { BMIModel } from '../Types/User';

export interface IBMIModel extends BMIModel, mongoose.Document {}

const BMISchema = new mongoose.Schema(
    {
        idUser: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'users',
        },
        height: {
            type: Number,
        },
        weight: {
            type: Number,
        },
        gender: {
            type: Number,
            default: 0,
        },
        yearOfBirth: {
            type: Number,
        },
        activity: {
            type: Number,
        },
        bmi: {
            type: Number,
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

const BMIs = mongoose.model<IBMIModel>('bmis', BMISchema);
export default BMIs;
