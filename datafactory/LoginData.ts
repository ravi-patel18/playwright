import { Login } from "../dataobject/login";

export class LoginData {
    /**
     * Creates and returns a login object with valid login details.
     * 
     * @returns {Login} The login object with valid login details.
     */
    static getLoginDetails(): Login {
        return new Login({
            email: "91100352",
            password: "8qIV8uBmjBvo*",
        });
    }
}
