import React from 'react'
import CommonStyles from '../components/styles/CommonStyles'


const translateProps = (props) => {
    console.log(props.disable) 
     let _styles = {...CommonStyles.default}
    if(props.disable){
        _styles = {..._styles, ...CommonStyles.disable};  
    }
    const newProps = {...props,styles:_styles }
    return newProps;
} 


export default (WrappedComponent) => {
    return function wrappedRender(args) {
        return WrappedComponent(translateProps(args));
    }
}
