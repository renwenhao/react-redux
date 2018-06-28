import React from 'react';
import PropTypes from 'prop-types';
export default class extends React.Component{
    static contextTypes = {
        store:PropTypes.object
    }
    constructor(props){
        super(props);
        this.state = {
            themeColor:''
        }
    }
    componentWillMount(){
        this.setColor();
    }
    setColor(){
        const {store} = this.context;
        console.log('store',store);
        var state = store.getState();
        this.setState({
            themeColor:state.themeColor
        });
    }
    render (){
        return <h1 style={{color:this.state.themeColor}}>this is header</h1>
    }
}