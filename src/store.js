export default (reducer)=>{
    let appState = null;
    let listens = [];
    let getState = ()=>(appState);
    let subdiscrbi = (f)=>{
        listens.push(f)
    }
    let dispatch = (action)=>{
        console.log('action',action);
        appState = reducer(appState,action);
        listens.forEach(item=>item())
    }
    dispatch({});
    return{
        dispatch,
        getState,
        subdiscrbi
    }
}