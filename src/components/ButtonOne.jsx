import React from 'react'
import StylesWrapper from '../HOC/StylesWrapper'

const ButtonOne=(props)=>{
    return (
       <button style={props.styles}>
           Click Me
       </button>
    )
}
export default StylesWrapper(ButtonOne)