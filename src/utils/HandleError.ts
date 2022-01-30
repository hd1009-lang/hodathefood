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
    protected mess: string;
    protected code: number;
    constructor(code: number, mess: string) {
        this.mess = mess;
        this.code = code;
    }
    static OkRequest(mess: string) {
        return new ErrorApi(HttpStatusCode.OK, mess);
    }
    static CreatedRequest(mess: string) {
        return new ErrorApi(HttpStatusCode.CREATED, mess);
    }
    static BadRequest(mess: string) {
        console.log(mess);
        return new ErrorApi(HttpStatusCode.BAD_REQUEST, mess);
    }
}


export const handleErrorMessage = (err: ErrorDefault, req: Request, res: Response, next: NextFunction) => {
    if (err instanceof ErrorApi) {
        return res.status(err.code).json({ message: err.mess });
    }
    return res.status(HttpStatusCode.NOT_FOUND).json({ message: 'Something wrong' });
};
