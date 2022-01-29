import React from 'react'
import FormElementStyle from './FormElement.module.css'

const FormElement = (props)=>{
    let inputElement
    switch(props.inputtype){
        case "input":
            inputElement = <input className={FormElementStyle.Input} onChange={props.changes} {...props.elementConfig} />
            break;
        case "button":
            inputElement = <button className={FormElementStyle.Button} type="button" onClick={props.buttonClicked}>{props.elementConfig.placeholder}</button>
            break;
        default:
            inputElement = <input className={FormElementStyle.Input} onChange={props.changes} {...props.elementConfig}/>
            break;
    }

    return(
        <React.Fragment>{inputElement}</React.Fragment>
    )
}

export default FormElement