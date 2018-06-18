import React, { Component } from 'react';

// Import custom components
import Title from './title.component';
import TemplatesPage from './templates-page.component';

class Templates extends Component {
    render(){
        return (
            <div>
                <Title />

                <section className="content">
                   <TemplatesPage />
                </section>

            </div>
        );
    }
}

export default Templates