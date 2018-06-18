import React, {Component} from 'react';
import PropTypes from 'prop-types';

class UserPanel extends Component {

    static propTypes = {
        // Incoming
        user: PropTypes.object
    }
    render() {
        return (
            <div className="user-panel">
                <div className="pull-left image">
                    <img src="js/theme/img/user2-160x160.jpg" className="img-circle" alt="User Image"/>
                </div>
                <div className="pull-left info">
                    {
                    this.props.user &&
                    <p>{this.props.user.first_name + ' ' + this.props.user.last_name}</p>
                    }
                    <a href="#"><i className="fa fa-circle text-success"></i> Online</a>
                </div>
            </div>
        );
    }
}

export default UserPanel