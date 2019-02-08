import React, {Component} from 'react';
import Environment from "../Environment";
import LoginManager from "../Login/LoginManager";
import Device from "../Device/Device";

class Macros extends Component {

    state = {
        macros: []
    };

    async getMacros() {
        let response = await fetch(Environment.apiPath + Environment.apiRoutes.macros, {
            headers: Environment.getHeaders(LoginManager.getToken())
        });

        let macros = await response.json();

        this.setState({macros});
    }

    render() {
        return this.state.macros.map(macro => (
            <div className="card" key={macro.id} onClick={this.executeMacro(macro)}>
                <h1>{macro.name}</h1>
                {macro.devices.map(device => <Device key={device.id}
                                                     device={device}/>)}
            </div>
        ));
    }

    componentWillMount() {
        this.getMacros();
    }

    async executeMacro(macro) {
        let response = await fetch(`${Environment.apiPath + Environment.apiRoutes.macros}/${macro.id}`, {
            headers: Environment.getHeaders(LoginManager.getToken())
        });

        let json = await response.json();

        alert(json);
    }
}


export default Macros;
