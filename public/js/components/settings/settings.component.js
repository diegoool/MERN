import React, { Component } from 'react';

import { connect } from 'react-redux'
import PropTypes from 'prop-types';

import { changeSettings, saveSettings } from '../../reducers/userReducer'

// Import custom components
import Title from './title.component';
import SettingsPage from './settings-page.component';

class Settings extends Component {

    static propTypes = {
        user: PropTypes.object,
        changeSettings: PropTypes.func,
        saveSettings: PropTypes.func
    }

    render(){
        return (
            <div>
                <Title />

                <section className="content">
                   <SettingsPage user={this.props.user} changeSettings={this.props.changeSettings} saveSettings={this.props.saveSettings} />
                </section>

            </div>
        );
    }
}

const mapDispatchToProps = {
    saveSettings,
    changeSettings
}

const mapStateToProps = (state) => ({
    user: state.user.user
})

export default connect(mapStateToProps, mapDispatchToProps)(Settings)
