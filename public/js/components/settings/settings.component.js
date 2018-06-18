import React, { Component } from 'react';

// Import custom components
import Title from './title.component';
import SettingsPage from './settings-page.component';

class Settings extends Component {
    render(){
        return (
            <div>
                <Title />

                <section className="content">
                   <SettingsPage />
                </section>

            </div>
        );
    }
}

export default Settings