import React, {Component} from 'react';
import Environment from "../Environment";
import LoginManager from "../Login/LoginManager";
import Device from "../Device/Device";
import Loading from "../Loading/Loading";

class Room extends Component {
    state = {
        room: {},
        devices: [],
        deviceSelected: null,
    };

    roomApiPath = Environment.apiPath + Environment.apiRoutes.rooms;

    async getRoomDevices() {
        let response = await fetch(`${this.roomApiPath}/${this.props.room.id}/${Environment.apiRoutes.devices}`, {
            headers: Environment.getHeaders(LoginManager.getToken())
        });

        let devices = await response.json();

        this.setState({devices});
    }

    componentWillMount() {
        this.setState({room: this.props.room});
        this.getRoomDevices();
    }

    getComponent() {
        if (this.state.deviceSelected) {
            return <Device device={this.state.deviceSelected} back={() =>
                this.setState({deviceSelected: null})}/>
        }

        return (
            <div className="card">
                <div onClick={() => this.props.back()}>Close</div>
                {this.renderRoomData()}
                {this.renderDevices()}
            </div>
        );
    }

    render() {
        return this.getComponent();
    }

    renderRoomData = () => (
        <div className="roomData">
            {this.state.room.name}
        </div>
    );

    renderDevices() {
        if (this.state.devices.length > 0) {
            return (
                <div className="devices">
                    {this.state.devices.map(device => (
                        <div key={device.id}>
                            <h1>{device.name}</h1>
                            <div onClick={() => this.setState({deviceSelected: device})}>{device.value}</div>
                            <h2>{device.typeName}</h2>
                        </div>
                    ))}
                </div>);
        } else {
            return <Loading/>;
        }
    }
}


export default Room;
