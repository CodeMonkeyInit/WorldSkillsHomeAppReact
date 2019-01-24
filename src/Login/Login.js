import React, {Component} from 'react';
import LoginManager from "./LoginManager";

class Login extends Component {
    state = {
        login: "",
        password: ""
    };

    handleInput = ({target: {name, value}}) => this.setState({[name]: value});

    login() {
        let loginManager = new LoginManager();

        if (loginManager.login(this.state['login'], this.state['password'])) {
            this.props.onLogin();
        }

        return false;
    }

    render() {
        return (
            <div className='login-form'>
                <label>Логин:</label>
                <input className='login-input input'
                       name="login"
                       onChange={this.handleInput}
                       value={this.state.login}
                       type='text'/>
                <label>Пароль:</label>
                <input className='password-input input'
                       name="password"
                       onChange={this.handleInput}
                       value={this.state.password}
                       type='password'/>
                <button onClick={() => this.login()}>Отправить</button>
            </div>
        );
    }
}

export default Login;
