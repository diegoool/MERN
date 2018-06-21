import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SettingsPage extends Component {
    static propTypes = {
        saveSettings: PropTypes.func

    }
    
    constructor(props) {
        super(props);
    
        // this.onChangeSettingsEdit = this.onChangeSettingsEdit.bind(this);
        this.onSaveSettings = this.onSaveSettings.bind(this);
    
    }
    
    // onChangeSettingsEdit(e) {
    // e.preventDefault()
    // this.props.changeProfile(e.target.id, e.target.value);
    // }

    onSaveSettings(e){
    e.preventDefault()
    this.props.saveSettings()
    }

    render(){
        return (
            <div>
                <h4>Here you can configure your web page.</h4>
                <form id='form-settings' onSubmit={this.onSaveSettings}>
                    <table className="table">
                        <thead>
                            <tr>
                                <td>Title</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <input
                                        type="text"
                                        defaultValue='default'
                                        id="site-title"
                                        className="form-control"
                                        />
                                </td>
                            </tr>
                        </tbody>
                        <thead>
                            <tr>
                                <td>Keywords</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <input
                                        type="text"
                                        defaultValue='default'
                                        id="site-keywords"
                                        className="form-control"
                                        />
                                </td>
                            </tr>
                        </tbody>
                        <thead>
                            <tr>
                                <td>Description</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <input
                                        type="text"
                                        defaultValue='default'
                                        id="site-description"
                                        className="form-control"
                                        />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </form> 
                <button className="btn btn-primary" style={{margin: '4px'}} type="submit" form='form-settings'>
                    <i className="material-icons">Save</i>
                </button>
            </div>
        );
    }
}

export default SettingsPage