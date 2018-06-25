import React, { Component } from 'react';
import { connect } from 'react-redux'
import PropTypes from 'prop-types';

// Import SitesList
import SiteList from '../siteList/siteList.component';

// Import custom components
import Title from './title.component';
import SuperAdminPage from './superAdmin-page.component';

import { createNewSite } from '../../reducers/siteReducer'

class SuperAdmin extends Component {

    static propTypes = {
        createNewSite: PropTypes.func
    }

    render(){
        return (
            <div>
                <Title />

                <section className="content">
                <SuperAdminPage
                    createNewSite= {this.props.createNewSite}
                />
                <SiteList />
                </section>

            </div>
        );
    }
}

const mapDispatchToProps = {
    createNewSite
}

const mapStateToProps = (state) => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(SuperAdmin)
