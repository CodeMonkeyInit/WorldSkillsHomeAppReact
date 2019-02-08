import React, {Component} from 'react';
import './NavBar.css';
import Macros from "../../Macro/Macros";
import Home from "../../Home/Home";

class NavBar extends Component {

    navbarElements = [
        {key: "Дом", value: <Home/>},
        {key: "Макросы", value: <Macros/>}
    ];

    state = {
        selectedKey: this.navbarElements[0].key,
        navBarElements: this.navbarElements
    };

    render() {
        return (
            <div className="Nav-bar">
                <div className="nav-bar-header">
                    <span className="nav-bar-header-element">Умный дом</span>
                    <div className="nav-bar-header-element nav-bar-expand">^</div>
                </div>

                <div className="nav-bar-body">
                    {this.state.navBarElements.map((element, i) => (
                        <div className={this.getElementClass(element)}
                             onClick={() => this.itemSelected(element, i)}
                             key={i}>
                            {element.key}
                        </div>
                    ))}
                </div>
            </div>
        );
    }

    getElementClass = element => (element.key === this.state.selectedKey ? 'nav-bar-item-selected' : "")
        + " nav-bar-item";

    itemSelected(element) {
        this.setState({selectedKey: element.key});

        return this.props.selected(element.value);
    }
}

export default NavBar;