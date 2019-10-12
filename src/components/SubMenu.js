import React, {useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faCaretRight } from '@fortawesome/free-solid-svg-icons'

const SubMenu = ({menuName, children}) => {
    const [expanded, setExpanded] = useState(false);

    return (
        <>
            <button className="list-group-item list-group-item-action" onClick={() => setExpanded(current => !current)}>
                {menuName}
                <FontAwesomeIcon icon={faCaretRight} className={`fa-lg fa-pull-right ${expanded && 'fa-rotate-90'}`} />
            </button>
            <div style={{display: `${expanded ? 'block' : 'none'}`}}>
                {children}
            </div>
        </>
    )
};

export default SubMenu;