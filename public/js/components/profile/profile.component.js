import React, { Component } from 'react';
import { connect } from 'react-redux'
import PropTypes from 'prop-types';

import { changeProfileEdit } from '../../reducers/userReducer'

// Import custom components
import Title from './title.component';
import ProfilePage from './profile-page.component';

class Profile extends Component {

    static propTypes = {
        user: PropTypes.object,
        changeProfileEdit: PropTypes.func
    }

    render(){
        return (
            <div>
                <Title />

                <section className="content">
                   <ProfilePage user={this.props.user} changeProfileEdit={this.props.changeProfileEdit}/>
                </section>

            </div>
        );
    }
}

const mapDispatchToProps = {
    changeProfileEdit
}

const mapStateToProps = (state) => ({
    user: state.user.user
})

export default connect(mapStateToProps, mapDispatchToProps)(Profile)
