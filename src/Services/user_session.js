export class UserSession {


    static setToken(token) {
        // localStorage.setItem( "iat",iat);
        // localStorage.setItem( "expire",expire);
        localStorage.setItem("token", token);


    }


    static setUser(user) {
        // localStorage.setItem( "iat",iat);
        // localStorage.setItem( "expire",expire);
        localStorage.setItem("user", user);
    }

    static destroyToken() {
        // localStorage.setItem( "iat",iat);
        // localStorage.setItem( "expire",expire);
        localStorage.removeItem("token");
        localStorage.removeItem("user");

    }

    static getUserToken() {
        return localStorage.getItem("token");
    }

    static getUser() {
        return JSON.parse(localStorage.getItem("user"));
    }

    static isAuth() {
        return this.getUserToken() !==null;
    }


}
