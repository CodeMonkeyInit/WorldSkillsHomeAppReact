import React, {Component} from 'react';
import './App.css';
import Login from "../Login/Login";
import Home from "../Home/Home";
import Room from "../Room/Room";
import Device from "../Device/Device";

class App extends Component {
    state = {
        isLogged: false,
        room: null,
        device: null
    };

    wasLogged() {
        this.setState({isLogged: true});
    }

    getContent() {
        if(this.state.device){
            return <Device/>
        }

        if (this.state.room) {
            return <Room room={this.state.room} deviceSelected={device =>
                this.setState({device})}/>
        }

        return <Home roomSelected={room =>
            this.setState({room})}/>;

    }

    roomSelected(roomId) {

    }

    render() {
        let content = <Login onLogin={() => this.wasLogged()}/>;

        if (this.state.isLogged) {

        }

        return (
            <div className="App">
                {content}
            </div>
        );
    }
}

export default App;
