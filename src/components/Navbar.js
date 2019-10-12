import React, { useState } from 'react';
import MainNavLink from "./MainNavLink";
import SubMenu from "./SubMenu";
import {useLocation} from "react-router-dom";

const Navbar = () => {
    const [navCollapsed, setNavCollapsed] = useState(true);
    const location = useLocation();

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
                    <MainNavLink to="/" exact={true} handleNavigate={handleNavigate}>
                        Public Homepage
                    </MainNavLink>
                    <SubMenu menuName="Visualizations">
                        <MainNavLink to="/charts" handleNavigate={handleNavigate}>
                            Charts
                        </MainNavLink>
                        <MainNavLink to="/visualization/one" handleNavigate={handleNavigate}>
                            Visualization One
                        </MainNavLink>
                        <MainNavLink to="/visualization/two" handleNavigate={handleNavigate}>
                            Visualization Two
                        </MainNavLink>
                    </SubMenu>
                </div>
            </section>
        </>
    )
};

export default Navbar;