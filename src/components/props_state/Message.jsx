import React from 'react'
export const Message = (props)=>{
    return(
        <div>
            <h3 className="bg-warning text-primary">
            <marquee>{props.data}</marquee>
            </h3>
        </div>
    )
}
