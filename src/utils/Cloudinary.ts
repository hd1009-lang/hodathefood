import dotenv from 'dotenv';

import { ErrorApi } from './HandleError';
import { v2 as cloudinary } from 'cloudinary';
import fs from 'fs';
// use
dotenv.config();

const removeTmp = (path: string) => {
    fs.unlink(path, (err) => {
        if (err) throw err;
    });
};

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.CLOUDINARY_APIKEY,
    api_secret: process.env.CLOUDINARY_SECRETKEY,
});
// cloudinary.config({
//     cloud_name: 'dinpdudj2',
//     api_key: '353559158844385',
//     api_secret: 'RpKQuVJuJkkfJAr5v7IF6U895UQ'
//   });
const uploadImg = async (file: string) => {
    try {
        let link;
        await cloudinary.uploader.upload(file, function (error, result) {
            if (error) {
                throw new Error((error as Error).message);
            }
            removeTmp(file);
            link = result?.url;
        });
        return link;
    } catch (error) {
        console.log(error);

        throw ErrorApi.BadRequest('Lỗi khi up ảnh');
    }
};
const CloudinaryModel = {
    uploadImg,
};

export default CloudinaryModel;
