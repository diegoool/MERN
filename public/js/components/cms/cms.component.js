import React, { Component } from 'react';

// Import custom components
import Title from './title.component';
import CmsPage from './cms-page.component';

class Cms extends Component {
    render(){
        return (
            <div>
                <Title />

                <section className="content">
                   <CmsPage />
                </section>

            </div>
        );
    }
}

export default Cms