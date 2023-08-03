import React, { Component } from "react";

class StateInClass extends React.Component {
    constructor(props) {
        super(props)
        this.state = {counter: 0, name:"Jincy"};
    }

    change = () => {
        this.setState({counter: this.state.counter+1});
    };

    changeName =() => {
        this.setState({name: "jose"});
    };

    render() {
        return (
            <>
            Here you can create your own state
            <div>Counter: {this.state.counter}</div>
            <div>Name: {this.state.name}</div>
            <button onClick={this.change}>Counter</button>
            <button onClick={this.changeName}>Change Name</button>
            </>
        )
    }
}

export default StateInClass