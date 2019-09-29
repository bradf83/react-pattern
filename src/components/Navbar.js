import React, { useState } from 'react';
import {withRouter} from "react-router-dom";
import MainNavLink from "./MainNavLink";

// TODO: Accessibility, I18N
//  Since I am just sliding the side menu out of view I believe its still accessible  is there a way to change that?

const Navbar = ({location}) => {
    const [navCollapsed, setNavCollapsed] = useState(true);

    const toggleCollapsed = () => {
        setNavCollapsed(current => !current);
    };

    // TODO: This feels clunky, maybe a different way to handle this?
    const handleNavigate = (to) => {
        // Only hide the menu if navigating
        if(location.pathname !== to){
            setNavCollapsed(true);
        }
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
                    <MainNavLink to="/" exact={true} handleNavigate={handleNavigate}>
                        Public Homepage
                    </MainNavLink>
                    <MainNavLink to="/charts" handleNavigate={handleNavigate}>
                        Charts
                    </MainNavLink>
                </div>
            </section>
        </>
    )
};

export default withRouter(Navbar);