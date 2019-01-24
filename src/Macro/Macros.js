import React, {Component} from 'react';
import Environment from "./Environment";
import LoginManager from "./LoginManager";
import Device from "./Device";

class Macros extends Component {

    state = {
        macros: []
    };

    async getMacros() {
        let response = await fetch(Environment.apiPath + Environment.apiRoutes.macros, {
            headers: Environment.getHeaders(LoginManager.getToken())
        });

        let macros = response.json();

        this.setState({macros});
    }

    render = () => this.state.macros.map(macro => (
        <div key={macro.id} onClick={this.executeMacro(macro)}>
            <h1>{macro.name}</h1>
            {macro.devices.map(device => <Device
                key={device.id}
                device={device}/>)}
        </div>
    ));

    componentWillMount() {
        this.getMacros();
    }

    async executeMacro(macro) {
        let response = await fetch(Environment.apiPath + Environment.apiRoutes.macros + macro.id, {
            headers: Environment.getHeaders(LoginManager.getToken())
        });

        let json = await response.json();
    }
}


export default Macros;
