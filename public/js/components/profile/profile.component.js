import React, { Component } from 'react';

// Import custom components
import Title from './title.component';
import ProfilePage from './profile-page.component';

class Profile extends Component {
    render(){
        return (
            <div>
                <Title />

                <section className="content">
                   <ProfilePage />
                </section>

            </div>
        );
    }
}

export default Profile