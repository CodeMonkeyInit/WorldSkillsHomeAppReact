import React, {Component} from 'react';
import Environment from "../Environment";
import LoginManager from "../Login/LoginManager";

;

class Room extends Component {
    state = {
        room: {},
        devices: []
    };

    roomApiPath = Environment.apiPath + Environment.apiRoutes.rooms;

    async getRoomDevices() {
        let response = await fetch(`${this.roomApiPath}${this.props.roomId}/${Environment.apiRoutes.devices}`, {
            headers: Environment.getHeaders(LoginManager.getToken())
        });

        let devices = await response.json();

        this.setState({devices});
    }

    componentWillMount() {
        this.getRoomDevices();

        this.setState(this.props.room);
    }

    render() {
        return this.state.room && this.state.devices.length > 0 ? (
            <div>
                {this.renderRoomData()}

                {this.renderDevices()}
            </div>
        ) : <div>Загрузка...</div>;

    }

    renderRoomData = () => (
        <div className="roomData">
            {this.state.room.name}
        </div>
    );

    renderDevices = () => (
        <div className="devices">
            {this.state.devices.map(device => (
                <div key={device.id}>
                    <h1>{device.name}</h1>
                    <div onClick={() => this.props.deviceSelected(device)}>{device.value}</div>
                    <p1>{device.typeName}</p1>
                </div>
            ))}
        </div>
    );
}


export default Room;
