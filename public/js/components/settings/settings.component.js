import React, { Component } from 'react';

import { connect } from 'react-redux'
import PropTypes from 'prop-types';

import { saveSettings } from '../../reducers/userReducer'

// Import custom components
import Title from './title.component';
import SettingsPage from './settings-page.component';

class Settings extends Component {

    static propTypes = {
        saveSettings: PropTypes.func
    }

    render(){
        return (
            <div>
                <Title />

                <section className="content">
                   <SettingsPage saveSettings={this.props.saveSettings} />
                </section>

            </div>
        );
    }
}

const mapDispatchToProps = {
    saveSettings
}

const mapStateToProps = (state) => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(Settings)
