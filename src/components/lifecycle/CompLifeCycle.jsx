import React from 'react';
//import Parent from './ErrorHandlling';

export default class CompLifeCycle extends React.Component {

   constructor(props) {
     //1. initialization phase
      super(props);		
      this.state = {
         data: 0,
         msg: 'Initial data...'
      }
     // this.setNewNumber = this.setNewNumber.bind(this)
     // this.updateState = this.updateState.bind(this);       
   };
   
   setNewNumber(e) {
      this.setState({data: this.state.data + 1})
   }
   updateState(e) {
      this.setState({msg:e.target.value});
   }      
   //2. Initial render
   render() {
      return (
         <div>          
             <button  onClick = {(event)=>{this.setNewNumber(event)}}>INCREMENT</button>   
            
             <Content myNumber = {this.state.data} ></Content>
            <br/>
             <input type = "text" value = {this.state.msg} 
                           onChange = {(e)=>this.updateState(e)} />
             <h3 >{this.state.msg}</h3>      
            </div>
      );
   }
}// parent component is completed

//child comp
class Content extends React.Component {
  constructor(props){
    // Initialize props with constructor, initialize state and register events
    super(props);
    this.state={name:'Murthy'} 
    console.log("In constructor:"+props.myNumber); 
    console.log("1. Content Constructor fired - Initialization phase");
    this.handleScroll = this.handleScroll.bind(this); 
  }
  // register the handler
  handleScroll() {
    console.log("handle Scroll is executed");
}

  //The componentWillMount() method is invoked only once before initial rendering.
   //It is also a good place to set initial state value inside componentWillMount().
   componentWillMount() {
      // load data from cache (Local storage)
       console.log('1. componentWillMount => ' +this.props.myNumber);
   }

// important hook fires only once 
componentDidMount() {
  console.log('2. Component DID MOUNT! - reset data or reintialize data ')
 console.log('componentDidMount => ' + this.props. myNumber);
 //Make ajax calls here or load some mocked data and update state
  //window.addEventListener('scroll', this.handleScroll);    
}

//This method will be invoked when a component is receiving 
   //new props. componentWillReceiveProps() 
   //won't be called for the initial rendering.
   componentWillReceiveProps(nextProps) {    
      console.log('3.set default props here and validate props here')
      console.log("Props in Component will receive :"+ nextProps.myNumber)
     //The old props can be accessed via this.props inside this. 
    //you can set state according to changes of props in this method.
    this.setState({
      isPassed: nextProps.myNumber >= 60
       });
    }

    // In future versions, above method replaced with below method
    static getDerivedStateFromProps(props, state){
      console.log("getDerivedStateFromProps")
      console.log(state.name)
      return {}
  }
    //shouldComponentUpdate() will be invoked before rendering 
//when new props or state are being received.
// This method won't be called on initial rendering. (return true by default)
   shouldComponentUpdate(nextProps, nextState) {
      console.log("Decide whether to re-render or not ")
      console.log(nextState )
      // Don't rerender if score doesn't change    
    //if ( nextProps.myNumber == this.props.myNumber ) {
    //  console.log(" Component Not Rendered");
    //  return false;      
  //}
    console.log(" 4. Component is  Rendered");
    if(nextProps.myNumber >3) {
      return true
    }else{
         return false;  // change it to false to stop rendering     
        }
   }

//Use this as an opportunity to prepare for an update.
   componentWillUpdate(nextProps, nextState) {
      //- check props & state before updating state
      console.log('5.Component WILL UPDATE! ' +nextProps.myNumber );
   }

   //Invoked immediately after the component's updates 
   //are flushed to the DOM. 
  //This method is not called for the initial rendering.
//You can perform DOM operations after an update inside this function.
// access Real DOM with Jquery here or normal javascript 
   componentDidUpdate(prevProps, prevState) {
      console.log('7. Component DID UPDATE! - you can rollback state here to previous state')
   }
       // Error handling only available from 16.0 onwards
   componentDidCatch(err) {
    console.log("Some error has occured... log it in server in mongodb")
  }
   //This is invoked immediately before a component is unmounted or removed from the DOM.
  //Use this as an opportunity to perform cleanup operations.
  // For example, unbind event listeners here to avoid memory leaking.
   componentWillUnmount() {
    // avoid memory leak - unsubscribe to web sockets
      console.log('8.Component WILL UNMOUNT! - release the resources here or cache data here')
      window.removeEventListener('scroll', this.handleScroll);
    }
   render() {   
      return (       
         <div>
            <h3 >{this.props.myNumber}</h3>               
         </div>
      );
   }
}
// End of code
