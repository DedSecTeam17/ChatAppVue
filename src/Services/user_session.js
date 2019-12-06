export class UserSession {


    static setToken(token) {
        // localStorage.setItem( "iat",iat);
        // localStorage.setItem( "expire",expire);
        localStorage.setItem("token", token);


    }

    static destroyToken() {
        // localStorage.setItem( "iat",iat);
        // localStorage.setItem( "expire",expire);
        localStorage.removeItem("token");
    }

    static getUserToken() {
        return localStorage.getItem("token");
    }

    static isAuth() {
        return this.getUserToken() !==null;
    }


}
