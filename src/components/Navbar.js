import React, { useState } from 'react';

// TODO: Accessibility, I18N
//  Since I am just sliding the side menu out of view I believe its still accessible  is there a way to change that?

const Navbar = () => {
    const [navCollapsed, setNavCollapsed] = useState(true);

    const toggleCollapsed = () => {
        setNavCollapsed(current => !current);
    };

    const collapsed = navCollapsed ? 'collapsed' : '';
    return (
        <>
            {/*Nav*/}
            <section>
                <nav className="navbar-main">
                    <button className={`navbar-toggler ${collapsed}`} onClick={toggleCollapsed}>
                        <span className="icon-bar"/>
                        <span className="icon-bar"/>
                        <span className="icon-bar"/>
                    </button>
                    <div className="flex-fill text-right">
                        <div className="d-none d-sm-block h4 m-0 p-0 text-white">
                            React Patterns
                        </div>
                    </div>
                </nav>
            </section>

            {/*Nav Side*/}
            <section className={`navbar-side ${collapsed}`}>
                <div className="list-group">
                    <div className="list-group-item list-group-item-header">
                        React Patterns
                    </div>
                </div>
            </section>
        </>
    )
};

export default Navbar;