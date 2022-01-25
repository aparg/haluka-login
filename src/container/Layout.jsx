import React from "react";
import {Component} from 'react';
import Background from '../components/Background/Background.jsx'
import DataEntryBox from '../components/DataEntryBox/DataEntryBox.jsx'

class Layout extends Component{
    state={
        submitted:false
    }

    render(){
        return (<React.Fragment>
            <Background/>
            {/* <DataEntryBox/> */}
        </React.Fragment>)
    }
}

export default Layout