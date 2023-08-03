import React, { Component } from "react";

class CounterClass extends Component {
    constructor(props) {
        super(props);
        this.state = {counter:0};
    }

    onIncrement =()=> {
        let counters = this.state.counter
        this.setState({counter: ++counters});
    };

    onDecrement =()=> {
        let counters = this.state.counter
        this.setState({counter: --counters});
    };

    render() {
        return(
            <>
            <h2>Counter App</h2>
            <h3>COUNTER: {this.state.counter}</h3>
            <button onClick={this.onIncrement}>Increment</button>
            <button onClick={this.onDecrement}>Decrement</button>
            </>
        )
    }
}

export default CounterClass