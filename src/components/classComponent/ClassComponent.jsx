import React from "react";
class ClassComponent extends React.Component{
    constructor(props){
        super(props)
    }

    render() {
        return(
            <>
            <h1>Welcome to class Component</h1>
            <h2>The{this.props.value1}</h2>
            <img src={this.props.img} alt='pic1' />
            <h2>The{this.props.value2} is {this.props.value3}</h2>
            </>
        )
    }
}
export default ClassComponent