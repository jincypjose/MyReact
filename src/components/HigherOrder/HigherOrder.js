import React from "react";
var newElement={data1:"Message from new HOC"}

// var MyHOC = ComposedComponent => class extends React.Component {
//     componentDidMount() {
//        this.setState({
//           data: newData.data
//        });
//     }
//     render() {
//        return <ComposedComponent {...this.props} {...this.state} />;
//     }
//  };

var HigherComponent=(MyComponent)=>class extends React.Component {
    componentWillMount(){
        this.setState({loading:newElement.data1});
    }
    render(){
        return<MyComponent {...this.props} {...this.state}/>
    }

}
class HigherOrder extends React.Component{
    render() {
        return(
            <>
            Hello HOC
            <div>{this.props.loading}</div>
            <p>gfgdshhfjd</p>
            </>
        )
    }
}
export default HigherComponent(HigherOrder)