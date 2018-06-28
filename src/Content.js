import React from 'react';
import SwitchButton from './SwitchButton';
import PropTypes from 'prop-types';
export default class extends React.Component{
    static contextTypes = {
        store:PropTypes.object
    }
    constructor(props){
        super(props);
    }
    componentWillMount(){
        const {store} = this.context;
        this.changeColor();
        store.subdiscrbi(()=>{
            this.changeColor();
        });
    }
    changeColor(){
        const {store} = this.context;
        var state = store.getState();
        this.setState({
            themeColor:state.themeColor
        });
    }
    render(){
        return <div >
            <p style={{color:this.state.themeColor}}>this is content</p>
            <SwitchButton/>
        </div>
    }
}