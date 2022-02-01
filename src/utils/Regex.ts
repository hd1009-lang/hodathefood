import { ErrorApi } from './HandleError';
enum Regex {
    UPPERCASE = '[A-Z]',
    NUMBER = '[0-9]',
    SPECIAL = '[![\\]@#\\$%\\^\\&*\\{})\(+=._-]',
}

const checkCountAtLeast = (regexPattern: string, num: number, string: string, tittle: string, message: string) => {
    const pattern = `.*${(regexPattern + '.*').repeat(num)}`;
    const regex = new RegExp(pattern, 'g');
    const check = regex.test(string);
    if (!check) {
        throw ErrorApi.BadRequest(`${tittle} cần ít nhất ${num} ${message}`);
    }
    return true;
};

const Helper = {
    checkCountAtLeast,
    Regex,
};
export default Helper;
