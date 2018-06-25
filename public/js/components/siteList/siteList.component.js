import React, { Component } from 'react';
import { connect } from 'react-redux'
import PropTypes from 'prop-types';

import { fetchSites } from '../../reducers/siteReducer'


class SiteList extends Component {

    static propTypes = {
        fetchSites: PropTypes.func,
        sites: PropTypes.array

    }
    componentDidMount(){
        this.props.fetchSites()
    }


    render(){
        let sitesList = null

        if (this.props.sites !== null && this.props.sites.length !== 0) {
            sitesList = this.props.sites.map((site, index) => {
              return (
                    <li key={index} className="list-group-item"><strong>{site.siteName}</strong></li>
              )
            })
          } else {
            sitesList = (
                <div className="alert alert-info">
                    <strong>OOPs!</strong> Not sites was found!
                </div>
            )
          }
        return (
            <div>
                <h3>Sites List</h3>
                <ul className="list-group">
                {sitesList}
                </ul>
            </div>
        );
    }
}

const mapDispatchToProps = {
    fetchSites
}

const mapStateToProps = (state) => ({
    sites: state.site.sites
})

export default connect(mapStateToProps, mapDispatchToProps)(SiteList)