import React  from 'react'
export const Header=(props)=>{
    return(
        <div>
            <h2 className="text-info text-center">{props.title}</h2>
        </div>
    )
}
//specifies the default value for props:
Header.defaultProps={
    title:"Welcome to React Project"
}