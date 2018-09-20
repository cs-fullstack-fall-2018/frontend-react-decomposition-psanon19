// KEY: Good Job! Well Done on all counts! :-)
import React, {Component} from 'react';
import logo from './todopostit.png';

class LogoCode extends Component {
    constructor(props) {
        super(props);
        this.state = {
            appTitle: "To Do List Ninja"}}


    render() {
        return (
            <div>
            <img src={logo} className="App-logo" alt="logo"/>
            <h1 className="App-title">{this.state.appTitle}</h1>
        </div>
    );
    }
}
export default LogoCode;