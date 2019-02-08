import Environment from "../Environment";


class LoginManager {

    static token = '';

    static getCookie(name) {
        const matches = document.cookie.match(new RegExp(
            "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
        ));

        return matches ? decodeURIComponent(matches[1]) : undefined;
    }

    static getToken(){
        // return LoginManager.getCookie('token');
        return LoginManager.token;
    }

    isLogged() {
        return !!LoginManager.token;
    }

    async login(login, password) {
        let response = await fetch(Environment.apiPath + Environment.apiRoutes.login, {
            method: "POST",
            headers: Environment.getHeaders(),
            body: JSON.stringify({login, password})
        });

        let accessToken = await response.json();

        document.cookie = `token=${accessToken.token}`;

        LoginManager.token = accessToken.token;

        return true;
    }


}


export default LoginManager;
