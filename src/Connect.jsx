import React,{Component} from 'react';
import PropTypes from 'prop-types'
const connect = (matlipltProps,operaProps) => (WrappleComponnet=React.Component)=>{
    class Connect extends React.Component{
        static contextTypes = {
            store:PropTypes.object
        }
        constructor(props){
            super(props);
            this.state = {
                allProps:{
                    
                }
            }
        }

        componentWillMount(){
            const {store} = this.context;
            const {dispatch} = store.dispatch;
            let stateProps = matlipltProps(store.getState())
            let operaPropss = operaProps(store.dispatch);
            this.setState({
                allProps:{
                    ...stateProps,
                    ...operaPropss,
                    dispatch
                }
            });
        }

        render (){
            return <WrappleComponnet {...this.state.allProps}/>
        }
    }
    return Connect;
}

export default connect;