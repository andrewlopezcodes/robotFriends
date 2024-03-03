import React from 'react';

class ErrorBoundary extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      hasError: false
    }
  }
  

  componentDidCatch(error, info){
    this.setState({ hasError: true})
  }

  render(){
    if(this.state.hasError){
      console.log("there is an error playboy!");
      return <h1>There is an error with the code your just ran</h1>
      
    }
    return this.props.children
  }
}



export default ErrorBoundary