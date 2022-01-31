import { Response, Request, NextFunction } from 'express';
export enum HttpStatusCode {
    OK = 200,
    CREATED = 201,
    BAD_REQUEST = 400,
    NOT_FOUND = 404,
    INTERNAL_SERVER = 500,
}
type ErrorDefault = {
    mess: string;
    code: number;
};

export class ErrorApi {
    public mess: string;
    public code: number;
    constructor(code: number, mess: string) {
        this.mess = mess;
        this.code = code;
    }
    static BadRequest(mess: string) {
        console.log(mess);
        return new ErrorApi(HttpStatusCode.BAD_REQUEST, mess);
    }
}

export const handleErrorMessage = (err: ErrorApi, req: Request, res: Response, next: NextFunction) => {
    if (err instanceof ErrorApi) {
        return res.status(err.code).json({ message: err.mess });
    }
    return res.status(HttpStatusCode.NOT_FOUND).json({ message: 'Something wrong' });
};
