import React from 'react'

//1. Create the Context
const MyContext=React.createContext()

//2. Create the Provider component
class MyProvider extends React.Component{
constructor(props){
    super(props);
    this.state={
        name:"Soham",
        salary:50000,
        job:'Engineer'
    }
}
    render(){
        return(
            <MyContext.Provider value={
                {
                    //data
                    state:this.state,
                    //Function
                    incrementSalary:()=>this.setState({
                        salary:this.state.salary+10000
                    })
                }
            }>
            {this.props.children}
            </MyContext.Provider>
        )
    }
}
 //3. Wrap main app into MyProvider to access the context
 export default class Context extends React.Component{
        render(){
            return(
                <MyProvider>
                    <div className="bg-success">
                    <h2 className="bg-info">React Context API Demo</h2>
                    <Family/>
                    </div>
                </MyProvider>
            )
        }
}
const Family=()=>{
    return(
        <div>
            <Person/>
            <Employee/>
        </div>
    )
}
class Person extends React.Component{
    render(){
        return(
            <div>
                <MyContext.Consumer>
                    {
                        (context)=>(
                            <React.Fragment>
                                <h3 className="bg-primary">Person Details</h3>
                                <p>Hi!{context.state.name}</p>
                                <p className="bg-danger">Salary: {context.state.salary}</p>
                                <p>Job: {context.state.job}</p>
                                <button className="btn btn-primary" onClick={context.incrementSalary}>Increment Salary</button>
                            </React.Fragment>
                        )
                    }
                </MyContext.Consumer>
            </div>
        )
    }
}
class Employee extends React.Component{
    render(){
        return(
            <div>
                <MyContext.Consumer>
                    {
                        (context)=>(
                            <React.Fragment>
                                <h3 className="bg-secondary">Displaying Employee details</h3>
                                <p>Hello!{context.state.name}</p>  
                            </React.Fragment>
                        )
                    }
                </MyContext.Consumer>
            </div>
        )
    }
}
