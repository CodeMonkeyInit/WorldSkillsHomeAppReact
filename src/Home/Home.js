import React, {Component} from 'react';
import Environment from "../Environment";
import LoginManager from "../Login/LoginManager";

class Home extends Component {
    state = {
        rooms: []
    };

    async getRooms() {

        let response = await fetch(Environment.apiPath + Environment.apiRoutes.rooms, {
            headers: Environment.getHeaders(LoginManager.getToken())
        });

        let rooms = await response.json();

        this.setState({rooms: rooms});
    }

    componentWillMount() {
        // noinspection JSIgnoredPromiseFromCall
        this.getRooms();
    }

    render() {
        if (this.state.rooms.length) {
            return (
                <div>
                    Загрузка...
                </div>
            );
        }

        return (
            <div>
                {this.renderRooms()}
            </div>
        );

    }

    renderRooms() {
        return this.state.rooms.map(room => (
            <div key={room.id} onClick={this.props.roomSelected(room.id)}>
                <h2>{room.name}</h2>
                <img src={room.image}/>
            </div>
        ));
    }
}

export default Home;
