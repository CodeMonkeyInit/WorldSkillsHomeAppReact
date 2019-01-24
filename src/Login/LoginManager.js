import Environment from "../Environment";


class LoginManager {

    getCookie(name) {
        const matches = document.cookie.match(new RegExp(
            "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
        ));

        return matches ? decodeURIComponent(matches[1]) : undefined;
    }

    static getToken(){
        return this.getCookie('token');
    }

    isLogged() {
        return !!Environment.getToken();
    }

    async login(login, password) {
        let response = await fetch(Environment.apiPath + Environment.apiRoutes.login, {
            method: "POST",
            headers: Environment.getHeaders(),
            body: JSON.stringify({login, password})
        });

        let accessToken = await response.json();

        document.cookie = `token=${accessToken}`;

        return true;
    }


}


export default LoginManager;
