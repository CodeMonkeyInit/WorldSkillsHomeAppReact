import React, {Component} from 'react';

class Device extends Component {

    state = {
        device: null
    };

    render() {
        return (
            <div className="card">
                <div onClick={() => this.props.back()}>Close</div>
                {this.renderDevice()}
            </div>
        );

    }

    componentWillMount() {
        this.setState({device: this.props.device});
    }

    renderDevice = () => (
        <div>
            <div>
                <h1>{this.state.device.name}</h1>
                <div>{this.state.device.value}</div>
                <p1>{this.state.device.typeName}</p1>
            </div>
        </div>
    );

}


export default Device;
