import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import actions from '../actions/counterActions';

const selectValue=state=>state.value

const Counter=()=>{
    const dispatch=useDispatch()
    const count=useSelector(selectValue)

    const incrementCount=()=>{
        dispatch(actions.increment)
    }

    return (
        <div>
            <button className="buttonDark" onClick={incrementCount}
            >{count}</button>
        </div>    
    )
}

export default Counter;