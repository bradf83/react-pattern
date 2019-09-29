import React from 'react';
import {NavLink} from "react-router-dom";

// TODO: Research composing components
// TODO: to has to be present, handleNavigate has to be present, exact does not.
// TODO: What to do with location (from NavLink)

const MainNavLink = (props) => {
    return (
        <NavLink to={props.to} exact={props.exact} className="list-group-item list-group-item-action" onClick={() => props.handleNavigate(props.to)}>
            {props.children}
        </NavLink>
    )
};

export default MainNavLink;