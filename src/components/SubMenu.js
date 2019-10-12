import React, {useState} from "react";

const SubMenu = ({menuName, children}) => {
    const [expanded, setExpanded] = useState(false);

    return (
        <>
            <button className="list-group-item list-group-item-action" onClick={() => setExpanded(current => !current)}>{menuName}</button>
            <div style={{display: `${expanded ? 'block' : 'none'}`}}>
                {children}
            </div>
        </>
    )
};

export default SubMenu;