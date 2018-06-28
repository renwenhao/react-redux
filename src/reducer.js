export default (state,action)=>{
    if(!state){
        return {
            themeColor:'red'
        }
    }
    switch(action.type){
        case'update_color':
            return {
                ...state,
                themeColor:action.color
            }
        default : return state;
    }
}