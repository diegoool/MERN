import React, { Component } from 'react';

// Import custom components
import UserMenu from './user-menu.component';
import Notifications from './notifications.component';

class Header extends Component {
    render(){
        return (
            <header className="main-header">
                <a href="index2.html" className="logo">
                    <span className="logo-mini"><i className="fa fa-bitbucket"></i></span>
                    <span className="logo-lg"><i className="fa fa-bitbucket"></i>_Webb<b>App</b></span>
                </a>
                <nav className="navbar navbar-static-top">
                    <a href="#" className="sidebar-toggle" data-toggle="offcanvas" role="button">
                        <span className="sr-only">Toggle navigation</span>
                    </a>
                    <div className="navbar-custom-menu">
                        <ul className="nav navbar-nav">
                            
                            <Notifications />
                            <UserMenu />

                        </ul>
                    </div>
                </nav>
        </header>
       );
    }
}

export default Header