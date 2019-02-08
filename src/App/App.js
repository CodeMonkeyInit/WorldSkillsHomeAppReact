import React, {Component} from 'react';
import './App.css';
import Login from "../Login/Login";
import Home from "../Home/Home";
import NavBar from "./NavBar/NavBar";

class App extends Component {
    state = {
        renderingElement: <Home/>,
        isLogged: false
    };

    wasLogged() {
        this.setState({isLogged: true});
    }

    getContent() {
        let content = <Login onLogin={() => this.wasLogged()}/>;

        if (this.state.isLogged) {
            content = this.state.renderingElement;
        }

        return content;
    }

    roomSelected(room) {
        this.setState(room);
    }

    render() {
        return (
            <div className="App">
                <NavBar selected={element =>
                    this.setState({renderingElement: element})}/>

                {this.getContent()}
            </div>
        );
    }

    navbarItemSelected(element) {
        this.setState({renderingElement: element});
    }
}

export default App;
