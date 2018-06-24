import React, {Component} from 'react';
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux';
import {Link, IndexLink} from 'react-router';

// Import authService
import * as authService from '../../../services/authService';

class UserMenu extends Component {

    logOut(e) {
        e.preventDefault();
        this.props.actions.logout();
    }

    render() {

        return (
            <li className="dropdown user user-menu">
                <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                    <img src="js/theme/img/user2-160x160.jpg" className="user-image" alt="User Image"/>
                    <span className="hidden-xs">Diego Puyol</span>
                </a>
                <ul className="dropdown-menu">
                    <li className="user-header">
                        <img src="js/theme/img/user2-160x160.jpg" className="img-circle" alt="User Image"/>

                        <p>
                            Diego Puyol - Web Developer
                            <small>Administrator</small>
                        </p>
                    </li>
                    <li className="user-footer">
                        <div className="pull-left">
                        <IndexLink className="btn btn-default btn-flat" to={'/profile'}>
                            Profile
                        </IndexLink>
                        </div>
                        <div className="pull-right">
                            <a href="#" className="btn btn-default btn-flat" onClick={this.logOut.bind(this)}>Sign
                                out</a>
                        </div>
                    </li>
                </ul>
            </li>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(_.assign({}, authService), dispatch)
    }
}
export default connect(null, mapDispatchToProps)(UserMenu)