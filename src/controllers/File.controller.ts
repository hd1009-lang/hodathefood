import { HttpStatusCode } from './../utils/HandleError';
import { Request, Response } from 'express';
import CloudinaryModel from '../utils/Cloudinary';
import { UploadedFile } from 'express-fileupload';
const FileController = {
    upload: async (req: Request, res: Response) => {
        const file = req.files?.file as UploadedFile;

        const result = await CloudinaryModel.uploadImg(file.tempFilePath);
        return res.status(HttpStatusCode.OK).json({ message: 'Thành công', data: result });
    },
};

export default FileController;
