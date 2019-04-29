import React, { Component } from 'react'
import StatefulApp from './props_state/StatefulApp';
import Grid from './props_state/Grid'
import TextInput from './props_state/TextInput';

//stateful functional component / class component / intelligent components
export default class Dashboard extends Component{
    constructor(props){
        super(props)
        this.state={}
    }
    render(){
        return(
            <div>
                <StatefulApp/>
                <Grid/>
                <TextInput></TextInput>
            </div>
        )
    }
}