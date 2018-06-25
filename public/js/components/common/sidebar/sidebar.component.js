import React, {Component} from 'react';
import {Link, IndexLink} from 'react-router';
import PropTypes from 'prop-types';

// Import custom components
import UserPanel from './user-panel.component';
import Search from './search.component';

class Sidebar extends Component {

    static propTypes = {
        //Incoming
        user: PropTypes.object,
        sites: PropTypes.array
    }
    render() {
        var allSite = null

        if (this.props.sites !== null && this.props.sites.length !== 0) {
            allSite = this.props.sites.map((site,i) => {
            return <option key={i} value={site._id} >{site.siteName}</option>
          })
        }
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
                        <li>
                            <IndexLink to={'/superadmin'} >
                                <i className="fa fa-rocket"></i><span>Super Admin</span>
                            </IndexLink>
                        </li>
                        { this.props.sites !== 0 &&
                            <li style={{'textAlign': '-webkit-center', 'marginTop':'10px' }} >
                                <select id='select-site' className="form-control" style={{width:'80%'}}>
                                    {allSite}
                                </select>
                            </li>
                        }
                    </ul>
                </section>
            </aside>
        );
    }
}

export default Sidebar