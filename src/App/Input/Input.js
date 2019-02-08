import React, {Component} from 'react';

import './Input.css';

class Input extends Component {
    state = {
        errorMessage: ""
    };

    render() {
        return(
            <div className="input-container">
                <input className="input-control" onChange={changeEvent => this.handleChange(changeEvent)}
                       value={this.props.value}
                       placeholder={this.props.placeholder}
                       type={this.props.type}
                       name={this.props.name}/>
                {this.renderErrorMessage()}
            </div>
        );
    }

    renderErrorMessage() {
        if(this.state.errorMessage) {
            return <div className="input-error-message">{this.state.errorMessage}</div>;
        }
    }

    handleChange(changeEvent){
        this.props.onChange(changeEvent);

        //TODO handle
    }
}

export default Input;