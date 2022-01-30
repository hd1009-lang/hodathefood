interface BodyRequest {
    username: string;
    password: string;
}

const ValidateLogin = (body: BodyRequest) => {
    const { username, password } = body;
    if (username.length < 5 || password.length < 6) {
        throw new Error('Tên tài khoản hoặc mật khẩu sai');
    }
};
export default ValidateLogin;
