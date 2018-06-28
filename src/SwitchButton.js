import React from 'react';
import PropTypes from 'prop-types';
import connect from './Connect.jsx';
console.log('connect',connect);
export default connect((state)=>{
    return {
        themeColor:state.themeColor
    }
},(dispatch)=>{
    return {
        changeColor:(color)=>{dispatch({
            type:'update_color',color
        })}
    }
    
})(class extends React.Component{
    constructor(props){
        super(props);
        
    }
    // componentWillMount(){
    //     const {store} = this.props;
    //     this.initColor();
    //     store.subdiscrbi(()=>{
    //         this.initColor();
    //     });
    // }
    // initColor(){
    //     const {store} = this.props;
    //     var state = store.getState();
    //     this.setState({
    //         themeColor:state.themeColor
    //     });
    // }
    // handleClick(color){
    //     const {store} = this.props;
    //     store.dispatch({
    //         type:'update_color',color
    //     });
    // }
    render(){
        console.log('props',this.props);
        return <div>
            <button style={{color:this.props.themeColor}} onClick={()=>{
                console.log(110);
                this.props.changeColor('red')
            }}>变红</button>  
            <button style={{color:this.props.themeColor}} onClick={this.props.changeColor.bind(this,'blue')}>变蓝</button>  
        </div>
    }
})