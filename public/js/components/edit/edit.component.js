import React, { Component } from 'react';

// Import custom components
import Title from './title.component';
import EditPage from './edit-page.component';

class Edit extends Component {
    render(){
        return (
            <div>
                <Title />

                <section className="content">
                   <EditPage />
                </section>

            </div>
        );
    }
}

export default Edit