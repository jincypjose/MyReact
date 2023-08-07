import React from 'react'
class ClassLifecycle extends React.Component{

    constructor(props){
        console.log("Constructor works")
        super(props)
        this.state={msg:"hai"}
    }
componentWillMount(){
    console.log("Component will mount works")
}
componentDidMount(){
    console.log("Component did mount works")
}
changes1=()=>{
    this.setState({msg:"Hello React Lifecycle Hooks"})
}
componentWillUpdate(){
    console.log("Component will update works")
}
componentDidUpdate(){
    console.log("Component did update works")
}
componentWillUnmount(){
    console.log("Will Unmount work")
}
    render(){
        console.log("render works")
        return(
            <>
            <h3>this is how life cycle hooks in class work</h3>
            <button type="button" onClick={()=>this.changes1()}>Click</button>
            <p>{this.state.msg}</p>
            </>
        )
    }
}
export default ClassLifecycle