import mongoose, { Schema } from 'mongoose';

const PostSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
});

const Post = mongoose.model('posts', PostSchema);
export default Post;
