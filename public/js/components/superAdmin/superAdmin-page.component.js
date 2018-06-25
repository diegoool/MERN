import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SuperAdminPage extends Component {
    static propTypes = {
        createNewSite: PropTypes.func
    }
    
    constructor(props) {
        super(props);
        this.onCreateSite = this.onCreateSite.bind(this);
    }
    
    onCreateSite(event){
        event.preventDefault()
        let newSiteTitle = event.currentTarget['new-site-title'].value
        let newSiteOwnerId = event.currentTarget['new-site-owner-id'].value

        this.props.createNewSite(newSiteTitle, newSiteOwnerId)
    }

    render(){
        return (
            <div>
                <h4>SuperAdmin can manage all sites here.</h4>
                <br/>

                <form id='create-new-site' onSubmit={this.onCreateSite}>
                    <table className="table">
                        <thead>
                            <tr>
                                <td>Title new site</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <input
                                        type="text"
                                        defaultValue='New Site Title'
                                        id="new-site-title"
                                        className="form-control"
                                    />
                                </td>
                            </tr>
                        </tbody>
                        <thead>
                            <tr>
                                <td>Assigned to</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <input
                                        type="text"
                                        defaultValue='Id Owner'
                                        id="new-site-owner-id"
                                        className="form-control"
                                    />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </form> 
                <button className="btn btn-primary" style={{margin: '4px'}} type="submit" form='create-new-site'>
                    <i className="material-icons">Save</i>
                </button>
            </div>
        );
    }
}

export default SuperAdminPage