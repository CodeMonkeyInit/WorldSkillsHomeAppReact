export default class Environment{
    static apiPath = "http://localhost/api/";

    static apiRoutes = {
        rooms: 'rooms',
        devices: 'devices',
        macros: 'macros',
        login: 'login'
    };


    static getHeaders(token = ''){
        let headers = new Headers();

        headers.append("Content-Type", "application/json");
        headers.append("Access-Control-Allow-Credentials", "*");
        headers.append("Accept", "*/*");

        if(token){
            headers.append("Authorization", `Bearer ${token}`);
        }

        return headers;
    }
}
