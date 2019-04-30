import React, { Component } from 'react'
import StatefulApp from './props_state/StatefulApp';
import Grid from './props_state/Grid'
import TextInput from './props_state/TextInput';
import ChildParentInvoke from './parent_child/ChildParentInvoke';
import RefsDemo from './parent_child/RefsDemo';
import Context from './contextApi/Context'
import CompLifeCycle from './lifecycle/CompLifeCycle';
import WeatherComponent from './lifecycle/WeatherComponent'

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
                <TextInput/>
                <ChildParentInvoke/>
                <RefsDemo></RefsDemo>
                <Context></Context>
                <CompLifeCycle/>
                <WeatherComponent/>
            </div>
        )
    }
}