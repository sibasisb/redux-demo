import actions from '../actions/counterActions'

const initialState={
    value:0
}

const counterReducer=(state=initialState,action)=>{
    if(action.type===actions.increment.type){
        return {
            ...state,
            value:state.value + 1
        }
    }
    return state
}

export default counterReducer;