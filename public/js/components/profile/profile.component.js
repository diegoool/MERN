import React, { Component } from 'react';
import { connect } from 'react-redux'
import PropTypes from 'prop-types';

import { changeProfile, saveProfile } from '../../reducers/userReducer'

// Import custom components
import Title from './title.component';
import ProfilePage from './profile-page.component';

class Profile extends Component {

    static propTypes = {
        user: PropTypes.object,
        changeProfile: PropTypes.func,
        saveProfile: PropTypes.func
    }

    render(){
        return (
            <div>
                <Title />

                <section className="content">
                   <ProfilePage user={this.props.user} changeProfile={this.props.changeProfile} saveProfile={this.props.saveProfile}/>
                </section>

            </div>
        );
    }
}

const mapDispatchToProps = {
    changeProfile,
    saveProfile
}

const mapStateToProps = (state) => ({
    user: state.user.user
})

export default connect(mapStateToProps, mapDispatchToProps)(Profile)
