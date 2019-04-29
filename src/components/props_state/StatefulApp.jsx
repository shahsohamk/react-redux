import React from 'react'
import {Message} from './Message'

class StatefulApp extends React.Component{
    constructor(props){
        super(props);
        this.state={
            data: 
         [
            {
               "id":1,
               "name":"Murthy",
               "age":"46"
            },
				
            {
               "id":2,
               "name":"Kavitha",
               "age":"30"
            },
				
            {
               "id":3,
               "name":"Kiran",
               "age":"40"
            }
         ]
        }
    }
    render() {
        return (
           <div>
              <Message data="Verizon grabbed new React Project"/>
             <h3 className="bg-">Developers Enrolled</h3>
              <table  
              className='table table-hover table-striped'>
                 <tbody>
                    {this.state.data.map((personData, index) =>
                        <TableRow key = {index} data = {personData} />)
                    }
                 </tbody>
              </table>                              
           </div>
        );
     }
  }
  const TableRow=(props)=>{
      return(
          <tr>
              <td>{props.data.id}</td>
              <td>{props.data.name}</td>
              <td>{props.data.age}</td>
          </tr>
      )
  }
  export default StatefulApp
