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
            
        }

        render (){
            const {store} = this.context;
            let stateProps = matlipltProps(store.getState())
            let operaPropss = operaProps(store.dispatch);
            let waProps= {
                ...stateProps,...operaPropss
            }
            return <WrappleComponnet {...waProps}/>
        }
    }
    return Connect;
}

export default connect;