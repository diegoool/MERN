import React, {Component} from 'react';
import {Link, IndexLink} from 'react-router';
import PropTypes from 'prop-types';

// Import custom components
import UserPanel from './user-panel.component';
import Search from './search.component';

class Sidebar extends Component {

    static propTypes = {
        //Incoming
        user: PropTypes.object
    }
    render() {
        return (
            <aside className="main-sidebar">
                <section className="sidebar">

                    <UserPanel user={this.props.user}/>

                    <Search/>

                    <ul className="sidebar-menu">
                        <li className="header">MAIN NAVIGATION</li>
                        <li className="active">
                            <IndexLink to={'/dashboard'}>
                                <i className="fa fa-dashboard"></i><span>Dashboard</span>
                            </IndexLink>
                        </li>
                        <li>
                            <IndexLink to={'/edit'} >
                                <i className="fa fa-edit"></i><span>Edit</span>
                            </IndexLink>
                        </li>
                        <li>
                            <IndexLink to={'/cms'} >
                                <i className="fa fa-th-list"></i><span>Cms</span>
                            </IndexLink>
                        </li>
                        <li>
                            <IndexLink to={'/templates'} >
                                <i className="fa fa-diamond"></i><span>Templates</span>
                            </IndexLink>
                        </li>
                        <li>
                            <IndexLink to={'/settings'} >
                                <i className="fa fa-cog"></i><span>Settings</span>
                            </IndexLink>
                        </li>
                    </ul>
                </section>
            </aside>
        );
    }
}

export default Sidebar