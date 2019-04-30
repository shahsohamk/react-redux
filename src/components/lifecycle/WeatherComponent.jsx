import React from 'react'
class WeatherComponent extends React.Component{
    constructor(props){
        super(props)
            this.state={
                weather:'Sunny',
                pictures:[]
        }
    }

    componentDidMount(){
        console.log("inside componentDidMount method")
        //REST Call
        fetch('https://randomuser.me/api/?results:100')
        .then(results => {
            return results.json();
        }).then(data => {
            let pictures=data.results.map(pic => {
                return(
                    <div key={Math.random()}>
                    <img src={pic.picture.medium}/>

                    </div>
                )
            })
            this.setState({pictures:pictures})
            console.log("state", this.state.pictures)
        })
    }

    changeName(){
        this.setState({weather:'Rainy'})
    }

    render(){
        console.log("inside render method")
        return(
            <div>
                <h1>Today Weather is :{this.state.weather}</h1>
                <button onClick={(e) => this.changeName()}>
                Change weather to Rainy
                </button>
                <span>
                    {this.state.pictures}
                </span>
            </div>
        )
    }
}
export default WeatherComponent