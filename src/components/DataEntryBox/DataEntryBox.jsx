import React,{Component} from 'react'
import DataEntryBoxStyle from './DataEntryBox.module.css'
import FormElement from '../FormElement/FormElement'

class DataEntryBox extends Component{
    state={
        orderForm:[{
                    inputtype: "input",
                    elementConfig:{
                        type: "text",
                        placeholder: "Email address or Username",
                    },
                    value:""
                },
                {
                    inputtype:"input",
                    elementConfig:{
                        type:"password",
                        placeholder: "Password",
                    },
                    value:""
                },
                {
                    inputtype:"button",
                    elementConfig:{
                        type:"button",
                        placeholder:"Punch it!"
                    }
                }]
            
        
    }

    changeVal(ev,index){
        let newOrderForm = [...this.state.orderForm]
        newOrderForm[index].value=ev.target.value;
        this.setState({orderForm:newOrderForm})
    }
    render(){
        return (
            <div className={DataEntryBoxStyle.Box}>
                <div className={DataEntryBoxStyle.title}>BELT LOGIN</div>
                <div className={DataEntryBoxStyle.signin}>Sign In</div>
                <form className={DataEntryBoxStyle.form}>
                    {this.state.orderForm.map((el,ind)=><FormElement key={el.elementConfig.placeholder} inputtype={el.inputtype} elementConfig={el.elementConfig} changes={(event)=>this.changeVal(event,ind)}/>)}
                </form>
                <span className={DataEntryBoxStyle.forgot}>Forgot email/username or password?<a href="./">Click here!</a></span>
                <div className={DataEntryBoxStyle.line}></div>
                <span className={DataEntryBoxStyle.signup}>New to Belt?<a href="./">Belt up now!</a></span>
            </div>
        )
    }
 
}
export default DataEntryBox

