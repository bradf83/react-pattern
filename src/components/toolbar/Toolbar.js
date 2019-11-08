import React, {useReducer} from 'react';
import ContainerContent from "../ContainerContent";
import ReactTooltip from "react-tooltip";

const reducer = (state, action) => {
    switch(action.type){
        case 'TOGGLE_LEFT':
        case 'TOGGLE_RIGHT':
        case 'TOGGLE_MIDDLE':
            const newState = {...state, [action.name]:!state[action.name]};
            // Ensure that at least one is clicked
            if(newState.right || newState.left || newState.middle){
                // One is still clicked
                return newState;
            } else {
                // Revert to old state as none would be clicked
                return state;
            }
        case 'SET_COLOR':
            return {...state, color: action.color};
        default:
            return state;
    }
};

const Toolbar = () => {
    const [state, dispatch] = useReducer(reducer, {left: true, middle: true, right: true, color: 'bg-warning'});
    return (
        <ContainerContent>
            <h1>Toolbar Example</h1>
            <div className="btn-group" data-tip="Toggle sections on and off.">
                <ToggleButton label="Left" active={state.left} clickHandler={() => dispatch({type: 'TOGGLE_LEFT', name: 'left'})}/>
                <ToggleButton label="Middle" active={state.middle} clickHandler={() => dispatch({type: 'TOGGLE_MIDDLE', name: 'middle'})}/>
                <ToggleButton label="Right" active={state.right} clickHandler={() => dispatch({type: 'TOGGLE_RIGHT', name: 'right'})}/>
            </div>

            <div className="btn-group ml-5" data-tip="Set the background color of each section.">
                <ToggleButton label="Warning" active={state.color === 'bg-warning'} clickHandler={() => dispatch({type: 'SET_COLOR', color: 'bg-warning'})}/>
                <ToggleButton label="Danger" active={state.color === 'bg-danger'} clickHandler={() => dispatch({type: 'SET_COLOR', color: 'bg-danger'})}/>
            </div>

            <div className="d-flex">
                <div className={`col rounded-lg ${state.color} m-1 p-1 ${!state.left && 'd-none'}`} style={{height: 100}}>Left</div>
                <div className={`col rounded-lg ${state.color} m-1 p-1 ${!state.middle && 'd-none'}`} style={{height: 100}}>Middle</div>
                <div className={`col rounded-lg ${state.color} m-1 p-1 ${!state.right && 'd-none'}`} style={{height: 100}}>Right</div>
            </div>

            <ReactTooltip />
        </ContainerContent>
    )
};

export default Toolbar;

const ToggleButton = ({label, active, clickHandler}) => {
    return (
        <button type="button" className={`btn  ${active ? 'btn-danger' : 'btn-outline-danger'}`} onClick={clickHandler}>{label}</button>
    )
};