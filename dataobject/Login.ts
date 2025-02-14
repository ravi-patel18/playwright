export class Login {
    public email: string;
    public password: string;

    constructor({ email, password }: { email: string; password: string }) {
        this.email = email;
        this.password = password;
    }
}
