/*
Mixins are obselete in latest React version: React 14.x

Higher order components are JavaScript stateless/stateful functional
components  used for adding additional functionality
to existing component called decorators for extensible archtecture

These functions are pure which means they are receiving data
 and  returning values according to that data.
  If data changes,  higher  order functions is re-run
   again with  different data input. 

 If we want to update our returning component, we don't have 
 to change our HOC. (Functional Components)

 All we need to do is change the data that our
  function is using.

Higher order component (HOC) is wrapping around 
"normal" component and provide additional data input.

  It is actually a function that takes
  one component and returns another component that 
  wraps the original one.
*/

import React from 'react';
const newData = {
  data: 'I am Data from Higher-Order Component'
 }
 
const MyHOC = (ComposedComponent,params) =>
 class xyz extends React.Component {
  
    componentDidMount() {    
      this.setState({
         data: newData.data 
         // fetch("http://verizon.com/customerservice")
      });
   }
  
   render() {
      return <ComposedComponent {...this.props} {...this.state} />;
      // write the current state  to this.props for updation
   }
};

class MyComponent extends React.Component {
   render() {
      return (
         <div>
           <h1>Testing HOC</h1>
            <h2>{this.props.data}</h2>
         </div>
      )
   }
}
export default MyHOC(MyComponent)