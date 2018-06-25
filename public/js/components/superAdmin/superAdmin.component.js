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
        createNewSite: PropTypes.func,
        users: PropTypes.array
    }

    render(){
        return (
            <div>
                <Title />

                <section className="content">
                <SuperAdminPage
                    createNewSite= {this.props.createNewSite}
                    users= {this.props.users}
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
    users: state.user.users

})

export default connect(mapStateToProps, mapDispatchToProps)(SuperAdmin)
