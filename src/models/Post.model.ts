import mongoose, { Schema } from 'mongoose';

const PostSchema = new Schema(
    {
        _id: {
            type: String,
            required: true,
            trim: true,
        },
        title: {
            type: String,
            required: true,
        },
        idCate: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'cates',
        },
        idUser: {
            type: String,
            ref: 'users',
        },
        ingredient: [
            {
                name: {
                    type: String,
                    ref: 'ingredients',
                },
                quantity: {
                    type: Number,
                    default: 1,
                },
            },
        ],
        data: {
            type: Object,
            default: {},
        },
    },
    {
        timestamps: true,
    }
);

const Post = mongoose.model('posts', PostSchema);
export default Post;
